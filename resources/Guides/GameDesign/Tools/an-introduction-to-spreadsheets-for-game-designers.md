# An Introduction to Spreadsheets for Game Designers

Source: https://bettermissions.acemlna.com/lt.php?s=4e19c639cd3fdb5a660d5ffda9189c07&i=572A643A16A8421

# The Ultimate Guide to Spreadsheets for Board Game Designers

[![Chris Backe's avatar](https://substackcdn.com/image/fetch/$s_!AcVW!,w_36,h_36,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F98eeac72-423b-4773-a21a-798773686c9f_3872x2592.jpeg)](https://substack.com/@entrogames)

[Chris Backe](https://substack.com/@entrogames)

Jan 20, 2022

Share

## Spreadsheets - a word that drives terror or delight into the heart of many a game designer.

I was a Business major in college, and it was a class on entrepreneurship where I got to be really comfortable in spreadsheets. While it took some time to find the best way to use them, the humble spreadsheet does a ton to keep you organized — and helps with balancing along the way.

## Dangit, Jim, I'm a game designer not a number cruncher!

[![](https://substackcdn.com/image/fetch/$s_!13K6!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc81b863a-52f5-4515-9329-78a6174c3790_160x160.gif)](https://substackcdn.com/image/fetch/$s_!13K6!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc81b863a-52f5-4515-9329-78a6174c3790_160x160.gif)

[via GIFER](https://gifer.com)

It's all good. By the time we're done with this article, you will learn:

* How board game designers use spreadsheets
* Some of the basic terms
* Learn how spreadsheets are organized
* See some real-world examples
* Learn about the formulas and functions possible

and more.

## How do board game designers use spreadsheets?

As they're most commonly used by designers, spreadsheets do four major things:

* Organize data
* Help with balance
* Make it easy to share data with collaborators, publishers, graphic designers, etc.
* Make it possible to import data into services like [Component.studio](https://Component.studio) or [Nandeck](https://www.nandeck.com/)

Getting good at spreadsheets means being able to wrangle the data in your game into a thing you can show someone else, do math to predict how things will turn out, and check for balancing issues before printing up more cards.

Spreadsheets can look really intimidating, especially if you get introduced to some of the more fanciful formulas too early ('*no, literally, I just changed one number and half the spreadsheet broke - GAHHH!).*I'm here to tell you that a spreadsheet is the easiest way to track, edit, and balance your game.

(One semi-important note: it doesn't matter whether you prefer Microsoft Excel, Open Office, Google Sheets or some other spreadsheet solution. These are tools and terms used in all of them. These screenshots were all taken in Google Sheets, which is free, online, backs up automatically, and lets you roll back to a previous version of a file easily. It's what I do 99% of my spreadsheet stuff in. Start at <https://docs.google.com/spreadsheets>.)

### The Basic Terms of a Spreadsheet

Just so we're all on the same sheet... or is that a *tab*...?

[![](https://substackcdn.com/image/fetch/$s_!eChX!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7a1e25bd-81fe-4440-99e6-db42f0059974_885x529.jpeg)](https://substackcdn.com/image/fetch/$s_!eChX!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7a1e25bd-81fe-4440-99e6-db42f0059974_885x529.jpeg)

* **Row**: stretch west to east. Click the gray box with the number on the left to select the entire row.
* **Column**: stretch north to south. Click the gray box with the letter at the top to select the entire column.
* **Cell:** the box where row and column meet. It's often named by the letter for the column and the number for the row (so A1, B5, C4, and so on).
* **Sheet:** one 'page' of the file. Create different sheets for different types of cards, different versions, etc.
* **Workbook:** the generic name for the full file of sheets. 'Sheet' and 'Workbook' are like 'Page' and 'Book'. In the picture above, the workbook has five sheets along the bottom edge.

One other thing to know is how spreadsheets refer to cells. If you're just talking about a specific cell, it's just the letter and the number without a space between them (so A1, B2, and so on). If talking about a *range* of cells, then you mention two cells, separated by a colon (so A1:C3). Think of these two cells as the upper left and lower right corners of a rectangle.

Not shown above:

* **Function**: a distinct calculation that a spreadsheet performs. These have names that must be referenced to summon their powers — we'll get to a few like SUM (adds cells up), COUNTIF (count something if something else is true), and AVERAGE (average specific numbers)
* **Formula:** a chance to let the computer do the math for you, based on the content of other cells. A formula always starts with an equals sign (=) to tell the spreadsheet to calculate the result for this cell. A formula can have one or more functions.

Finally, I've put the names of functions in ALL CAPS so they stand out a bit. That's not necessary to do, though — spreadsheets recognize them whatever case they're in.

### Real world example time!

Here's a screenshot of one of my games, Pirate Grannies:

[![](https://substackcdn.com/image/fetch/$s_!FNbR!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fce95d360-5890-4896-b1ff-4a9120ed605d_929x446.jpeg)](https://substackcdn.com/image/fetch/$s_!FNbR!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fce95d360-5890-4896-b1ff-4a9120ed605d_929x446.jpeg)

Without even explaining what the game is about, you can probably begin noting the important details:

* The top row explains what's in the column — all the better to help sort things.
* Each row holds info for one card.
* Each column shows a specific purpose.

There are a few formulas working behind the scenes to ensure things are balanced as I'd like, but this type of organization may be all you need a spreadsheet for.

This is where you may end up, but for now, let's back up.

### Moving around

Scrolling around the spreadsheet is obvious enough — what I'm talking about here is to help make light work of the formulas you'll want to use more than once.

[![](https://substackcdn.com/image/fetch/$s_!Q9ez!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ffb6a42ed-c384-45d5-8cba-ac835bf500bb_494x383.jpeg)](https://substackcdn.com/image/fetch/$s_!Q9ez!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ffb6a42ed-c384-45d5-8cba-ac835bf500bb_494x383.jpeg)

See that tiny box in the lower-right corner of the cell? If you hover your mouse over that little box, then click and drag it, the spreadsheet will take whatever's in that cell and copy it into the cells you drag into.

There's a catch, though — if there's a number or formula in that cell, the spreadsheet will change the cells referenced according to how it's dragged. This is a little hard to explain, so play with it and see for yourself.

## So, what do you want to do?

### See all the cards with similar features grouped together

The sort feature isn't a function, but it'll be your best friend once you get to know it.

In this example, I want to group the locations I'm using.

In Sheets, select all of  the columns you want to sort, then click Data > Sort Range:

[![](https://substackcdn.com/image/fetch/$s_!GEaG!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fbd6e854c-57cd-4f15-8912-1c56bca4ba13_539x330.jpeg)](https://substackcdn.com/image/fetch/$s_!GEaG!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fbd6e854c-57cd-4f15-8912-1c56bca4ba13_539x330.jpeg)

Check the 'Data has header row' to tell the spreadsheet to use that top row instead of 'Column A', 'Column B', etc.. Don't be intimidated by that A1 to I1000 — that's a spreadsheet's way of saying you chose all of the rows in columns A through I. Again, whatever range you select should all the data for all the cards you want to sort. It's also fine to copy this into another sheet — sort things one way in one sheet and another way in a second sheet.

Give that 'Add another sort column' button a click:

[![](https://substackcdn.com/image/fetch/$s_!2Uq5!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F29a799d5-011a-4154-9625-8515a976e792_542x407.jpeg)](https://substackcdn.com/image/fetch/$s_!2Uq5!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F29a799d5-011a-4154-9625-8515a976e792_542x407.jpeg)

Whatever the first 'Sort by' column is, Sheets will continue to the right by default. Setting it up this way will group all the rows with the same resource, then sort by the 'Where?'...

[![](https://substackcdn.com/image/fetch/$s_!n-v3!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F487e679c-666e-417d-bf13-19afd6330078_931x397.jpeg)](https://substackcdn.com/image/fetch/$s_!n-v3!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F487e679c-666e-417d-bf13-19afd6330078_931x397.jpeg)

Bam. Done. I can see I give out Energy at the Cannon and Officer's quarters twice, and most other places only once. If I'm trying to use each place the same number of times, I now know what I need to work on.

One ***crucial***part of the process is super easy to mess up here. **You want to select ALL of the columns that make up the data in a row / card.** If you don't, you'll sort part of the data, but leave other parts fixed in place, and stuff gets jumbled about. Undo is your friend in this case, but it's a pain in the butt to fix later on after you've made changes...

### Total something up

Use the SUM function, and reference the cells or range you want to total up.

For example, =sum(B1:B3) will total up the three numbers in B1, B2, and B3...

[![](https://substackcdn.com/image/fetch/$s_!UGHa!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5f5cd6ac-e249-4e48-b744-372980134093_486x170.jpeg)](https://substackcdn.com/image/fetch/$s_!UGHa!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5f5cd6ac-e249-4e48-b744-372980134093_486x170.jpeg)

Note that in Google Sheets, you should also see the result of your formula just above the equal sign.

You can also add each number and use standard mathematical symbols like +,-,\*, or . For example, =sum(B1+B2+B3)...

[![](https://substackcdn.com/image/fetch/$s_!7BwB!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F46a21c60-841e-46a2-b868-d0a123ce2be2_492x171.jpeg)](https://substackcdn.com/image/fetch/$s_!7BwB!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F46a21c60-841e-46a2-b868-d0a123ce2be2_492x171.jpeg)

This is also the easiest sort of formula to see the magic of spreadsheets — change one of the numbers in column B, and the sum in A2 will automagically update.

### How to count how many of each card I have

Sure, you could count these and then type a number into a cell... but that count goes out of date if you change something.

Let's look at the screenshot I shared earlier:

[![](https://substackcdn.com/image/fetch/$s_!ukxN!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F64d58e37-3b30-4779-8448-ea464a7a003e_929x446.jpeg)](https://substackcdn.com/image/fetch/$s_!ukxN!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F64d58e37-3b30-4779-8448-ea464a7a003e_929x446.jpeg)

Let's say I wanted to count the number of times I used 'Energy' as a resource in column B.

Elsewhere on the sheet, I'd have something like this (it's a few columns to the right of the screenshot above):

[![](https://substackcdn.com/image/fetch/$s_!j7e1!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F46eb2c24-cf09-4296-b446-dd40c0fe3e90_265x155.jpeg)](https://substackcdn.com/image/fetch/$s_!j7e1!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F46eb2c24-cf09-4296-b446-dd40c0fe3e90_265x155.jpeg)

On the left here, I have the five things I'm looking to count. On the right is my goal — how many times I want each resource to be used. This 'goal' number is just typed in. The 'count' column is where the magic happens:

[![](https://substackcdn.com/image/fetch/$s_!Rx4x!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd94070a0-9138-4570-b804-db7270569189_266x69.jpeg)](https://substackcdn.com/image/fetch/$s_!Rx4x!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd94070a0-9138-4570-b804-db7270569189_266x69.jpeg)

=COUNTIF(B:B,L38) is the formula here. Let's break this down.

* =COUNTIF: An equal sign always starts the formula, and 'COUNTIF' is the function I want to use. The details that function needs will go inside the following parentheses.
* (B:B, L38): This function needs two details, separated by a comma: the *range* of the area we want to count, and *what* exactly we want to count. In this case, 'B:B' is a fancy way of saying 'all of column B', while L38 refers to the cell with the thing I want to count. I could say "None" or "Food" or "Energy" instead (be sure to use double quotation marks), but this keeps it more flexible.

### A few other fun functions

=AVERAGE does exactly what you think it'll do: average a range of cells. Type it into a cell, then choose the range you want to average.

=AVERAGE.WEIGHTED is another one of those 'does what you think it'll do' sorts of formulas. You'll select two ranges to make this one work: the values first, then the weights.

**=RAND() gives you a** random number from 0 to 1 (so for example: 0.2683017912).

If you want to randomly assign a column of abilities you want to randomly assign to cards, create a new column next to it. Type **=RAND()** in one cell, then drag the formula down as far as needed. Select those two columns, then sort by the random number column. This is a unique sort of formula that will generate new random numbers every time a cell is changed or manipulated.

=ROUND and =ROUNDDOWN both round numbers from other calculations. =ROUND lets you choose how many places you want to round to, while =ROUNDDOWN will always round down.

### There's plenty more...

Spreadsheets have plenty of power underneath the hood, and you only need a tiny fraction of it to keep things organized. People have made entire games in Excel, done some crazy simulations, scripted stuff in VBA, experimented with PivotTables... After years of game design, I've never needed any of those. Play around with the deep end of the pool if you like — if you've become comfortable with the handful of functions talked about here, you're doing great.

## Use a spreadsheet to get organized

Keeping you organized is their first major benefit, and being able to share or import data is great. It's the second part I'll be doing a deeper dive into today.

### Basic setup

Everyone's sheets are going to look different for each game, naturally, but as a basic principle in my spreadsheets:

* Each *row* signifies one card or tile.
* Each *column* signifies one type or thing present on those cards or tile.
* The top row should be used for the name of the column. It makes it much easier to sort things that way as well.

I'll have columns for things like:

* the ID # (an internal tracking number that isn't on the card / tile itself)
* the name of the card
* the effect or power
* what type of card it is
* flavor text
* any yes/no type questions important to the game
* any numerical values present in the game (if the thing on the card costs 2 Wood to produce, I'll have a column for Wood and that card's entry would be 2)

Believe it or not, this may be all you need to do to keep things organized. If that's the case, don't worry about formulas or calculations.

Once the game's data is all in the spreadsheet, it's time for the fun to begin.

[Open this template worksheet now to follow along.](https://docs.google.com/spreadsheets/d/1Xag3NmEtqWoTaMEIbf_xvF8iTadQBeJEKdoByEQD8W4/edit?usp=sharing) (Start in the 'without cost' tab.)

For this post I'm going to be in Google Sheets, mainly because it's free and online. By all means feel free to use Microsoft Excel, OpenOffice Calc, or whichever program floats your boat. They all work basically the same way.

## Behold, the spreadsheet:

[![](https://substackcdn.com/image/fetch/$s_!vmmp!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ffb86911e-fc71-4a87-be96-662bba6689b7_1024x522.jpeg)](https://substackcdn.com/image/fetch/$s_!vmmp!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ffb86911e-fc71-4a87-be96-662bba6689b7_1024x522.jpeg)

For this example, I have a set of 20 cards, each with a Attack, a Defense, and some sort of Special effect. This isn't created with any specific game in mind, but it follows the same patterns I follow in a real-world game. The rest of the stuff is just here for tracking / internal use (like the ID number) or balancing.

Each row (columns A-L) represents one card. While there's other details that will be on the card (like art), only the details with a green background actually make it on the card. I'm highlighting this to mention one major fact: spreadsheets can contain *everything* related to a game's numbers, including how to derive what goes on the card.

## Assumptions and systems

Starting out, the numbers we're putting into the spreadsheet can be assumptions or guesses. Totally fine. As you gain experience, your sixth sense builds in that experience into these guesses. As you playtest, you'll confirm or refute those assumptions, then build a better model for the next playtest.

In short, this is a skill you can get better at.

## AV, DV, and SV?

Attack Value, Defense Value, and Special Value.

The easiest way I've found to balance something is to assign a value to each elements in a game. This value is assigned to the various elements of a game, and the total value is basically a rating of how good a card is, compared to other cards. More powerful actions are assigned a higher value. A card that deals more damage (or offers a higher defense) will usually have a higher value.

## Element \* weight = value

Alongside this value is a weight - a chance to buff or nerf specific types of elements. Give an element a higher weight to make it more valuable, or give it a lower weight to make it less valuable. In this example (and more for the sake of showing how things works), I've given Attack a weight of 0.5 (cell O1) and Defense a weight of 2 (cell O9).

In other words, whatever the attack number is on the card is multiplied by 0.5 to get the attack's value.

It's worth noting these weights are completely arbitrary - you might start with each weight being 1 if you wanted. This weighting is how you put your thumb on the scale - if you want to make defense feel more valuable without changing the number on the card, give defense a higher weight.

## How do I assign values to non-numerical things?

Things like the Special Value (or any text effect) becomes a judgement call. In this example, imagine you've written a bunch of special effects (this is column J where it just says 'text'). Whatever they are, imagine rating each one on a scale of some kind - could be 1 to 10, 1 to 5, or whatever.

The value given to each card could be as simple as your rating of that effect - 1 to 10, 1 to 5, or whatever. There's tons of ways to weight this, however. In this example, I'm using triangular scoring - a rating of 1 equals a value of 1, a rating of 2 equals a value of 3, a rating of 3 equals a value of 6, and so on. (If this isn't granular enough, the system can expand into decimals easily enough - a rating of 2.5 can equal a value of 4.5, for example).

Why would I use triangular scoring here? Perhaps some of these special effects might be more tactical in use, or only usable at specific times in the game. The more powerful ones are... more powerful, but maybe they can be used anytime. Right now, an effect rated a 4 would have a value of 10, while an effect rated a 1 would have a value of 1... but is the former 10 times more powerful than the latter? This is where playtesting comes in. Perhaps you discover an effect rated a 4 is about 7-8 times better... or 20 times better. Either way, change the weight and the rest of the puzzle begins to sort itself out.

## Calculate the cost

One big reason to create values like this is to establish a fair cost for a card. Have a look at column E, Total Value:

[![](https://substackcdn.com/image/fetch/$s_!ogvn!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F60de5a96-06d4-4aa4-a7ac-40bf572e098a_453x597.jpeg)](https://substackcdn.com/image/fetch/$s_!ogvn!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F60de5a96-06d4-4aa4-a7ac-40bf572e098a_453x597.jpeg)

This total value takes into account the Attack, Defense, and Special effects of the card, and this value can now be compared to other values generated the same way. All other things being equal, card #2 is about twice as a good as card #1, and card #20 is about 6.5 times better than card #1.

When trying to figure out the cost of something, the scale becomes important. Lots of board games manage to keep the cost of something to a one- or two-digit number for the sake of easy math and lower cognitive load.

So let's say I make the weakest card cost 1 and see where that takes me. To do that, I'd divide the total value of each card by... something... and get a cost. If I want 3.5 to be divided by something to get 1...?

Yeah, exactly. 3.5:

[![](https://substackcdn.com/image/fetch/$s_!9DeR!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F369c8921-83d7-4c09-b5df-12c028cc660e_496x599.jpeg)](https://substackcdn.com/image/fetch/$s_!9DeR!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F369c8921-83d7-4c09-b5df-12c028cc660e_496x599.jpeg)

Hmm. That didn't go as planned. It's going to be really hard to ask someone to pay 6.428571429 of something...

## Or did it?

Rounding, baby!

In a spreadsheet, the easiest way to do this is to decrease the decimal places to automatically round those results:

[![](https://substackcdn.com/image/fetch/$s_!Y736!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2dd79662-329d-4a1d-bfbc-48adf5580d23_353x662.jpeg)](https://substackcdn.com/image/fetch/$s_!Y736!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2dd79662-329d-4a1d-bfbc-48adf5580d23_353x662.jpeg)

Alright - this is better. You can round all the way down to 0 decimals if you just want to see the whole number.

One important note: just because this is the *calculated*cost doesn't mean it has to become the cost that goes on the card. There's some room for massaging the data here for any number of reasons. This is what I'll be using column B for - the actual cost that goes on the card (in this example, at least) is separated from the mathematical formulas and calculations. Why?

## The art of balancing means tweaking things to make fun.

Being perfectly balanced isn't (usually) my goal. Fun is why we play. This is a pretty simple example, and your game might have many reasons to tilt the balance one way or another. Should a card *feel* more expensive (or cheaper) for any reason? This is where that can be factored in - but again, based on the data you've created.

To finish out the example, let's manually type some numbers in column C ***based on***the data thus far (compare the calculated cost in column D to the typed cost in column C):

[![](https://substackcdn.com/image/fetch/$s_!PgPQ!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F983645ed-5c7b-48c4-9b3f-57b1b0398e39_914x600.jpeg)](https://substackcdn.com/image/fetch/$s_!PgPQ!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F983645ed-5c7b-48c4-9b3f-57b1b0398e39_914x600.jpeg)

Lots to look at here, I know. Balancing is an art, it's a work-in-progress, and it's rarely if ever perfect. It doesn't replace playtesting, but spending some time on balancing can make a lot of other things fall into place.

One goal here is *internal consistency*, and this is where your judgement as a designer can override all the hard data / numbers that have been put into place. If people expect numerical patterns, they might wonder what's going on if those patterns are interrupted.

In general, I've just rounded the numbers, with a few notes along the way:

* Card #4 has a cost of 5 - after seeing costs of 1, 2, and 3 on cards #1, #2, and #3, why the jump? It's the triangular value behind the special effect, and an assumption that a level-4 special effect is that much better.
* Cards #5 and #6 have the same value and cost, but they're derived in different ways. If these were both available at the same time, the player would get to choose between a card with a higher attack or a better special power. If these were weighted differently, they could end up having very different costs.
* Card #11 gives you a level-3 special effect (but pretty much nothing else) for only a cost of 2... Is that a fair price? Someone might just buy it for the special effect, knowing the other stuff on the card won't help much. Will people still buy it? **This is why we playtest.**
* Card #20 is the very best card in the game, yet rounds to 6. Because it packs such a punch and may be very difficult to beat, I bumped the price up by 1. Anyone evaluating this card now has to ask whether it's worth it to save up the 7 needed, or they might dismiss it for being too expensive.

Alright, so within this group of 20 cards, I'd be prepared to call this reasonably balanced and ready to playtest these assumptions. If the assumptions change, the weights might change, the values might change, and the costs might change. One playtest will reveal some cards as overpowered or underpowered, too cheap or too expensive, and so on. It's all part of the cycle.

## One more thing to note...

Look towards the right of the spreadsheet, columns N, O, and P:

[![](https://substackcdn.com/image/fetch/$s_!uvWP!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8570ce2e-7d6d-4b6d-ad07-850a6844c90d_404x594.jpeg)](https://substackcdn.com/image/fetch/$s_!uvWP!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8570ce2e-7d6d-4b6d-ad07-850a6844c90d_404x594.jpeg)

Call this a force of habit. As part of balancing, I want to know at a glance whether the various amounts are being used the 'correct' number of times. What's 'correct' may vary according to your interests - maybe you want a bell curve, or a long tail. Maybe you want each amount to be used the same amount of times. The 'COUNT' column is counted automatically using the COUNTIF function - tell the spreadsheet where to look (RANGE) and what you want to count (CRITERION). As you update the spreadsheet, this function counts matching things in the background.

I often add a 'GOAL' column just right of the 'COUNT' column, and the goal is just typed in. As I'm balancing, my sense of what the goal should be might change, but in general, I'm balancing towards that goal, or changing the goal to match the balance I'm happy with.

## Get some personalized help with your spreadsheet

Whether you've building your first spreadsheet or want to get into some advanced topics, you can book a consultation to make it work for you and your game:

[Let's chat one-on-one](https://entrogames.com/consulting)

[Share](https://entrogames.substack.com/p/the-ultimate-guide-to-spreadsheets-for-board-game-designers?utm_source=substack&utm_medium=email&utm_content=share&action=share)

Share

PreviousNext