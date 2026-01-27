# How bots nearly ruined everything

Source: 

Publishing Lessons

## How bots nearly ruined everything

12th August 2024 6

!attack-bots-website.jpg

Last week, I announced my brand-new game, Emberleaf, and, as always, I sent out a newsletter to let the community know about the upcoming announcement in advance. Usually, I just send it out, confident that it’ll reach everyone without a hitch. But this time, disaster struck. I noticed that almost no one was opening it…

## Uncovering the issue

I first noticed the problem when I was checking the open rates. Normally, my newsletters see an open rate between 60% and 75%, and for a big announcement like this, I’d usually expect it to be on the higher end. But this time, my newsletter was only getting about 15% opens. That’s a massive drop, and for a major announcement to get less than a quarter of the usual rate, it was a disaster. I won’t lie, I was a bit panicked. I didn’t know what had caused this sudden drop.

So, I did a deep dive, investigating everything I could, and it turned out that the culprit was online bots. I’ll explain what I discovered and how I figured it out, but I’ll try to avoid too many technical details for the sake of clarity.

## The problem with bots

Here’s how it happened: I have a website, and on this website, you can leave comments on just about any page. Over the years, thousands of people have left comments, but the site also attracts a lot of bots. These bots generate a ton of spam comments, and I have systems in place to filter them out and block them. For some perspective, the last time I checked, around 63,000 messages had been blocked by the spam filters over the past year and a half—a substantial amount.

There are multiple layers of protection on my site. First, I have a tool that scans for spam-like messages and blocks them. Then, there’s a third-party tool that checks against a large database of known spam practices and content, filtering things out again. Finally, I use Google reCAPTCHA, which reviews how a visitor is browsing the page. When someone submits a comment, reCAPTCHA decides whether the comment seems trustworthy or if it should be blocked.  
Between these 3 layers, no spam has made it through to being shown on this website for several years.

## How it affected my newsletter

Now, here’s where the problem arose. When someone leaves a comment on my site, they have the option to subscribe to notifications—like being alerted when someone responds to their comment or when new comments are posted. To subscribe, they enter their email address, and the website automatically sends them a confirmation email. However, I discovered that the website was triggering this subscription confirmation email before the spam filters blocked out the spam. This meant that if a spam bot submitted a fake comment and subscribed, it would still receive a subscription confirmation email, even though its comment never actually made it onto the site.

This led to my website sending out thousands of emails to non-existent addresses used by these spam bots. These emails were bouncing back—meaning they were being rejected because the addresses didn’t exist. This might not seem like a huge issue, but it can destroy your email addresses reputation. When I looked into it, I discovered that my domain’s reputation had dropped from high to bad, over the past six to eight weeks. This happened because part of that reputation measurement includes how many emails are sent to non-existent addresses. Afterall, why would a real person send thousands of emails to fake addresses?

## The impact and the road to recovery

The result? My emails were going straight into people’s spam folders, bypassing their inboxes entirely as my email domain was classified as a source of bad emails. No one was marking them as spam—this was all happening automatically. Using Google’s Postmaster Tools, I confirmed that my domain reputation had taken a serious hit. This meant that all my emails to Gmail and other Google-associated addresses, as well as to other providers, were ending up in spam.

So, when I sent out the announcement for Emberleaf, nearly no one saw it. A few people using less stringent email providers received it, but the vast majority didn’t. Thankfully, with a bit of technical know-how, I was able to investigate and uncover the issue, but it was quite a scare. Restoring my domain’s reputation isn’t a quick fix—it’s going to take weeks, if not months, to fully recover.

## Lessons learned and moving forward

I’ve now put systems in place to ensure this problem doesn’t persist, but it’s certainly going to be hard work over the next few weeks and had a major impact on my initial announcement. I wanted to share this story because it’s an unusual situation, and hopefully, a helpful one for others who send out newsletters. If you do, it’s worth keeping an eye on your domain reputation. You can set up Google Postmaster Tools or use other free tools available online. It doesn’t take long—just a few technical steps—and it’s worth it to monitor your reputation.

I also recommend using blacklist tools like MX Toolbox, which will notify you if your email address ever ends up on a blacklist, meaning your emails could go straight to spam. Luckily, the problem is now solved, and I hope you never have to deal with something like this yourself.

![](

#### Frank West

Frank West is a gamer and designer based in Bristol, UK.
He published his first board game, The City of Kings, in 2018 and now works on other games and organising events in the local area.
His goal? To design and publish games focusing on immersive themes, fun mechanics and beautiful components.
If you have any questions or would just like a chat, feel free to get in touch at any time!