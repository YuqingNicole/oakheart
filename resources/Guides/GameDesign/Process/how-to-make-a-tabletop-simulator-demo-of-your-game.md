# How to Make a Tabletop Simulator Demo of Your Game

Source: 

Many of you know that I’m in love with Tabletop Simulator as a testing tool. It’s a simple app on the Steam store, it costs $19.99, and it’s been an extraordinary resource for me during the development of *War Co.*, *Highways & Byways,*and *Tasty Humans*.

![](data:image/svg+xml,%3Csvg%20xmlns='

Looking for more resources to help you on your board game design journey?  
Here you go: no email required!  
  
Like this writing style?  
Check out my latest blog on marketing here.

#### The 5 Benefits of Using Tabletop Simulator

I’d like to explain to you exactly how to create a demo of your board game on Tabletop Simulator, but first let’s discuss what I perceive as its five main benefits:

##### 1. It saves you a ton of money and time on prototyping.

Even using simple paper and ink from your printer can add up pretty quickly when you’re making different versions of your game. This can easily add up into the hundreds of dollars, as it did with *War Co.* for me before I discovered LackeyCCG and eventually Tabletop Sim.

##### 2. It takes less time to create a prototype.

Instead of physically creating a new game or swapping out parts every time you make a substantial change, you can simply update the image files on your Tabletop Sim demo. It’s pretty straightforward.

##### 3. You can play-test online.

This means you can find play-testers all over the world, which allows you to see how well your game communicates with people from different cultures or who don’t speak your language as well. Not to mention, it’s easier for many people to find others online than in person.

##### 4. It’s great for publicity.

Because you can play online, you get the tremendous opportunity to livestream your game with people who have a good size audience on Twitch or YouTube. This is one of the most underrated marketing opportunities around for board game dev. I could easily make two or three articles on livestreaming board games.

##### 5. It makes it easier to build an audience before you have a physical copy of the game.

This goes hand in hand with benefit #4 but bears mention on its own. Until you have something to show people, it’s really hard to get them interested in your board game. Because high-quality physical prototypes can be expensive, Tabletop Simulator gives you the ability to show potential fans what your game is all about without committing to expensive physical prototypes.

#### How to Make a Tabletop Simulator Demo of Your Board Game

##### Step One: Create Images of Your Board, Cards, and Components

For the purposes of this guide, let’s assume your game involves a board, some cards, and some two-dimensional pieces. If it involves 3D models or other complex pieces, see the knowledge base that the development studio put together.

First, you’ll want to create JPG images of your board and each unique component. If you have duplicates of components, just create a single JPG – you can copy and paste the piece multiple times once you’ve loaded into Tabletop Simulator. This is pretty straightforward – all you need are some files that show what they actually look like. The Tabletop Simulator software will automatically size the board and pieces around your images.

Cards are more complicated. You’ll need to use this template or one similar to it. You’ll need to place the front of each card on one of these numbered slots, starting with 1 and working your way up from there. If you have 50 cards, you’ll fill up the first 50 slots and no others. If you have more than 69 cards, you’ll need to make multiple decks. Once you have all cards placed, save the whole grid as a JPG.

If your cards are a different dimension than the template linked above, you’ll need to create a template that is 10 times the width of a card and 7 times its height. Then you’ll place several gridlines so you get a similar template with different dimensions.

As for the card back, you’ll just need to save that as a JPG. If you have multiple card backs per deck, you’ll need to make another grid based on the template. Card back 1 needs to correspond to card front 1, card back 2 needs to correspond to card front 2, and so on.

![](data:image/svg+xml,%3Csvg%20xmlns='

##### Step Two: Upload Your Images to the Internet

Once you have your board, cards, and other pieces ready as JPG files, you need to upload them to the internet. When you’re creating a Tabletop Simulator demo, you’ll need to reference the URL of each image. I suggest you upload files to your own web server, if you have a website. If you don’t have your own web servers, Imgur will do the job.

##### Step Three: Create a Workshop Item on Tabletop Simulator

* Start Tabletop Simulator.
* In this order, click *Create*, *Single*, *Classic*, then *Custom*.
* Delete everything from the table by right-clicking each object and clicking *Delete*. (You can use the default stuff, but I want to show you how to do this the long way.)
* In the top middle of the screen, click *Objects*.
* Click *Table* on the menu.
* You should now see a screen similar to the one below where it shows a list of tabletops. Pick one you like.

![](data:image/svg+xml,%3Csvg%20xmlns='

Now that you have a table, let’s get a board on it.

* Click *Objects* in the top middle of the screen.
* On the menu that shows up on the right, click *Components*.
* Click *Boards*and then *Custom*.
* You should see a screen similar to the one below. Copy and paste the URL of your board’s image.
* Click *Import*.

![](data:image/svg+xml,%3Csvg%20xmlns='

Next, let’s add some cards.

* In this order, click *Objects*, *Components,* *Cards*, then *Custom Deck.*
* You should see a prompt like below. Fill it in as follows:
  + Face – enter the URL of your card fronts template
  + Unique Backs – check only if each card has a different back
  + Back – enter the URL of your single card back OR the unique card backs  template
  + Width – 10
  + Height – 7
  + Number – number of cards in the deck
  + Sideways – check only if your cards are meant to be used sideways
  + Back is Hidden – check
* Click *Import.*

![](data:image/svg+xml,%3Csvg%20xmlns='

To add a custom component, follow these instructions.

* In this order, click *Objects,* *Components*, then *Custom*.
* Click *Tile* for flat pieces or *Figurine* for stand-up pieces.
* You should see a prompt like below. Fill it in as follows:
  + Type – Box for square, Hex for hexagon, Circle for circle, Rounded for rounded square
  + Top Image – enter URL
  + Bottom Image – enter URL
  + Thickness – 0.20
  + Stackable – (your choice)
  + Stretch to Aspect Ratio – (checked)
* Click *Import.*

![](data:image/svg+xml,%3Csvg%20xmlns='

At this point, you can hover over any individual piece and press the plus or minus key to increase or decrease its size. You can also highlight any pieces you wish to copy and use CTRL+C and CTRL+V to make copies.

![](data:image/svg+xml,%3Csvg%20xmlns='

Well, let’s not go overboard with copy-paste…

##### Step Four: Release the Workshop Item

Once you’re done, click *Upload* > *Workshop Upload*. Fill out all the information, and click *Upload*. It will upload it to Steam and then give you a Workshop ID. Any time you want to update your workshop item, pull up this same window and click the *Update Workshop* tab. Then type in the Workshop ID, fill out the information, and click *Update*.

![](data:image/svg+xml,%3Csvg%20xmlns='

##### Step Five: Get Noticed

If you plan on using Tabletop Simulator for anything other than rapid prototyping, it’s not enough to simply create a Tabletop Simulator demo. After you create the demo, you’ll need to go looking for people who will want to play your game. This can be tricky because not everybody has Tabletop Simulator and oftentimes people are not willing to spend the $19.99 to get it. Think about how you spread your message. Consider reaching out to people who like Tabletop Simulator and play-testing new games on Twitter or in Facebook groups.

#### Need More Help with Tabletop Simulator?

As you can imagine, with software as sophisticated as Tabletop Simulator, I’ve only been able to scratch the surface of its true abilities in this article. You can create incredibly complex board games with 3D models and Lua scripting. The possibilities are immense.

For that reason, if you need help with Tabletop Simulator, I recommend you check out Overboard Games. The guy behind this company runs the Pangea Games social media, and he’s become really, really talented with Tabletop Simulator. He and his team have even made demos for big publishers such as Stronghold Games, Garphill Games, and Portal Games. He’s worth your time!

#### Final Thoughts

There you have it! This is a quick and dirty guide on getting started in Tabletop Simulator. Once you understand the basics, you can learn more of the nuanced aspects of creating a demo. I’m just here to help you get started 🙂

|  |  |  |  |
| --- | --- | --- | --- |
|  |  |  |  |