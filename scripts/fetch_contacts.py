import json
import csv
import requests
from bs4 import BeautifulSoup
import re
from urllib.parse import urljoin
import concurrent.futures
import sys
import time
from html import unescape

INPUT_FILE = '/Users/nicolechen/Documents/trae_projects/oakheart/publishers_complete.json'
OUTPUT_FILE = '/Users/nicolechen/Documents/trae_projects/oakheart/publishers_with_contact.csv'

EMAIL_REGEX = r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'

# Filter out common false positives (image files, etc. that look like emails or are just noise)
IGNORE_EXTENSIONS = ('.png', '.jpg', '.jpeg', '.gif', '.css', '.js', '.svg', '.woff', '.ttf')

CONTACT_KEYWORDS = [
    'contact', 'kontakt', 'contato', 'contatti', 'kontak', 'contacto',
    'impressum', 'about', 'sobre', 'a-propos', 'info', 'support', 'help',
    'privacy', 'terms'
]

COMMON_CONTACT_PATHS = [
    '/contact', '/contact-us', '/contacts', '/kontakt', '/impressum',
    '/about', '/about-us', '/a-propos', '/contatti', '/contato', '/kontakt.html'
]

def normalize_obfuscated_emails(text):
    t = unescape(text)
    t = re.sub(r'\s*\[\s*at\s*\]\s*', '@', t, flags=re.IGNORECASE)
    t = re.sub(r'\s*\(\s*at\s*\)\s*', '@', t, flags=re.IGNORECASE)
    t = re.sub(r'\s+at\s+', '@', t, flags=re.IGNORECASE)
    t = re.sub(r'\s*\[\s*dot\s*\]\s*', '.', t, flags=re.IGNORECASE)
    t = re.sub(r'\s*\(\s*dot\s*\)\s*', '.', t, flags=re.IGNORECASE)
    t = re.sub(r'\s+dot\s+', '.', t, flags=re.IGNORECASE)
    t = re.sub(r'\(\s*at\s*\)', '@', t, flags=re.IGNORECASE)
    t = re.sub(r'\(\s*dot\s*\)', '.', t, flags=re.IGNORECASE)
    t = re.sub(r'\s*@\s*', '@', t)
    t = re.sub(r'\s*\.\s*', '.', t)
    return t

def try_get(url, headers, timeout=12, retries=1, sleep=0.5):
    for _ in range(retries + 1):
        try:
            resp = requests.get(url, headers=headers, timeout=timeout)
            if resp.status_code == 200:
                return resp
        except:
            pass
        time.sleep(sleep)
    return None

def get_emails_from_text(text):
    normalized = normalize_obfuscated_emails(text)
    candidates = set(re.findall(EMAIL_REGEX, normalized))
    valid = set()
    for email in candidates:
        email = email.lower()
        if any(email.endswith(ext) for ext in IGNORE_EXTENSIONS):
            continue
        # Basic validation
        if len(email) > 5 and '.' in email.split('@')[1]:
             valid.add(email)
    return valid

def process_publisher(publisher):
    name = publisher.get('name', '')
    website = publisher.get('website', '')
    emails = set()
    
    if not website or not website.startswith('http'):
        return {'name': name, 'website': website, 'contact': ''}

    try:
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
        response = try_get(website, headers=headers, timeout=12, retries=1)
        
        if response:
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # 1. Look for emails on homepage
            emails.update(get_emails_from_text(soup.get_text()))
            
            # Look for mailto links
            for a in soup.find_all('a', href=True):
                href = a['href']
                if href.startswith('mailto:'):
                    email = href.replace('mailto:', '').split('?')[0]
                    if get_emails_from_text(email): # Validate extracted email
                        emails.update(get_emails_from_text(email))

            # 2. Look for Contact/About pages
            contact_links = []
            for a in soup.find_all('a', href=True):
                href = a['href']
                text = a.get_text().lower()
                # Prioritize "contact" over "about"
                hlow = href.lower()
                if any(k in hlow for k in CONTACT_KEYWORDS) or any(k in text for k in CONTACT_KEYWORDS):
                    full_url = urljoin(website, href)
                    if full_url.startswith('http') and full_url not in contact_links:
                        contact_links.insert(0, full_url)
                else:
                    if 'about' in hlow or 'about' in text:
                        full_url = urljoin(website, href)
                        if full_url.startswith('http') and full_url not in contact_links:
                            contact_links.append(full_url)
            
            # Common guessed paths
            for p in COMMON_CONTACT_PATHS:
                full = urljoin(website, p)
                if full not in contact_links:
                    contact_links.append(full)
            
            # Try sitemap.xml for links containing contact/about
            sitemap = urljoin(website, '/sitemap.xml')
            sm_resp = try_get(sitemap, headers=headers, timeout=8, retries=0)
            if sm_resp:
                try:
                    sm_soup = BeautifulSoup(sm_resp.text, 'xml')
                    for loc in sm_soup.find_all('loc'):
                        loc_url = loc.get_text()
                        l = loc_url.lower()
                        if any(k in l for k in CONTACT_KEYWORDS):
                            contact_links.append(loc_url)
                except:
                    pass
            
            # Limit to checking top 2 unique links
            checked_links = set()
            for link in contact_links:
                if len(checked_links) >= 4:
                    break
                if link in checked_links or link == website:
                    continue
                
                try:
                    resp_sub = try_get(link, headers=headers, timeout=10, retries=1)
                    if resp_sub:
                        soup_sub = BeautifulSoup(resp_sub.text, 'html.parser')
                        emails.update(get_emails_from_text(soup_sub.get_text()))
                        for a in soup_sub.find_all('a', href=True):
                            if a['href'].startswith('mailto:'):
                                email = a['href'].replace('mailto:', '').split('?')[0]
                                emails.update(get_emails_from_text(email))
                    checked_links.add(link)
                except:
                    pass

    except Exception:
        pass

    return {
        'name': name,
        'website': website,
        'contact': '; '.join(sorted(list(emails)))
    }

def main():
    print("Starting crawler...")
    try:
        with open(INPUT_FILE, 'r') as f:
            publishers = json.load(f)
    except Exception as e:
        print(f"Error reading input file: {e}")
        return

    print(f"Loaded {len(publishers)} publishers. Processing...")
    
    # Use ThreadPoolExecutor for concurrency
    # Adjust max_workers based on network/system capabilities
    results = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=20) as executor:
        future_to_pub = {executor.submit(process_publisher, pub): pub for pub in publishers}
        completed = 0
        total = len(publishers)
        
        for future in concurrent.futures.as_completed(future_to_pub):
            try:
                res = future.result()
                results.append(res)
            except Exception as e:
                print(f"Worker exception: {e}")
            
            completed += 1
            if completed % 50 == 0:
                print(f"Progress: {completed}/{total}")

    # Sort results by name to keep consistent with input roughly
    results.sort(key=lambda x: x['name'])

    # Write to CSV
    try:
        with open(OUTPUT_FILE, 'w', newline='', encoding='utf-8') as f:
            writer = csv.DictWriter(f, fieldnames=['name', 'website', 'contact'])
            writer.writeheader()
            writer.writerows(results)
        print(f"Successfully wrote {len(results)} rows to {OUTPUT_FILE}")
    except Exception as e:
        print(f"Error writing output file: {e}")

if __name__ == '__main__':
    main()
