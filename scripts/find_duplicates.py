import os
import hashlib

def hash_file(filepath):
    hasher = hashlib.md5()
    with open(filepath, 'rb') as f:
        buf = f.read(65536)
        while len(buf) > 0:
            hasher.update(buf)
            buf = f.read(65536)
    return hasher.hexdigest()

def find_duplicates(root_dir):
    hashes = {}
    duplicates = []
    
    for dirpath, _, filenames in os.walk(root_dir):
        for filename in filenames:
            if filename.startswith('.'): continue
            filepath = os.path.join(dirpath, filename)
            try:
                file_hash = hash_file(filepath)
                if file_hash in hashes:
                    duplicates.append((filepath, hashes[file_hash]))
                else:
                    hashes[file_hash] = filepath
            except Exception as e:
                print(f"Error hashing {filepath}: {e}")
                
    return duplicates

if __name__ == "__main__":
    print("Scanning for duplicates...")
    dupes = find_duplicates(os.getcwd())
    for dupe, original in dupes:
        print(f"Duplicate: {dupe}")
        print(f"Original:  {original}")
        print("-" * 20)
