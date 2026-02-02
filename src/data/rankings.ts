export interface RankingGame {
  rank: number;
  name: string;
  description: string;
  imageUrl?: string;
}

export interface Ranking {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  year: string;
  category: string;
  author: string;
  date: string;
  introduction: string;
  games: RankingGame[];
  honorableMentions?: string[];
  relatedLinks?: {
    text: string;
    url: string;
  }[];
}

export const rankings: Ranking[] = [
  {
    slug: "best-family-board-games-2025",
    title: "Best Family Board Games of 2025",
    metaTitle: "Best Family Board Games of 2025: Top New Releases & Favorites",
    metaDescription: "Discover the best family board games of 2025, from new releases to instant classics. Perfect for game nights with kids and adults ages 8+.",
    year: "2025",
    category: "Family Games",
    author: "The Tabletop Family",
    date: "2025-12-15",
    introduction: `As this year comes to a close, we're sharing our list of the best board games of 2025 along with the best "new to us" games that became instant favorites in our home. These are the titles that stood out the most this year, from brand new releases to older gems that brought unexpected laughter, strategy, and connection to our table.

Family Games are a category of board games that play well with players ages 8-10+, have simple easy-to-learn rules, and take around 60 minutes or less to play. One of the most common misconceptions is that the age indicates they're not for adults. On the contrary, these games can be enjoyed by both adult-only groups and mixed age groups of both kids and adults.`,
    games: [
      {
        rank: 1,
        name: "Mythical Dice",
        description: "Mythical Dice blends trick-taking with exciting dice rolls to create fun, swingy moments every hand. The bidding adds just enough tension to keep everyone leaning forward. Then the dice hit the table and all bets are off… literally. It feels fast, fresh, and just unpredictable enough to keep families shouting for more."
      },
      {
        rank: 2,
        name: "Hobbit: There and Back Again",
        description: "This might be the best retelling of The Hobbit ever brought to the table. The dry-erase adventure book is packed with distinct roll-and-write challenges that perfectly capture the journey. Each chapter feels like a new puzzle, a new risk, and a new moment from the beloved story. It's an epic family adventure that still plays quickly and stays wonderfully accessible."
      },
      {
        rank: 3,
        name: "Mythical Dice",
        description: "Mythical Dice blends trick-taking with exciting dice rolls to create fun, swingy moments every hand. The bidding adds just enough tension to keep everyone leaning forward. Then the dice hit the table and all bets are off… literally. It feels fast, fresh, and just unpredictable enough to keep families shouting for more."
      },
      {
        rank: 4,
        name: "Gardlings",
        description: "Gardlings combines the satisfying bag-building of Quacks with the tile-placement charm of Carcassonne. Each round becomes a lively race to grab points before anyone else can. The mix of luck, strategy, and quick decisions gives it broad family appeal. It's an exciting hybrid that feels both familiar and refreshingly new."
      },
      {
        rank: 5,
        name: "The Lord of The Rings: The Fellowship of The Ring Trick-Taking Game",
        description: "This cooperative trick-taking game brilliantly captures the story of the Fellowship in a way both LOTR fans and card-game lovers will appreciate. Every hand feels like a shared challenge against looming danger. Working together to stay alive creates great table tension. Our top cooperative game of 2025."
      },
      {
        rank: 6,
        name: "Flip 7",
        description: "Flip 7 is a push-your-luck showdown where the table gleefully roots for someone to bust. The race to 200 points keeps the tension high and the decisions spicy. Every flip feels like a gamble, and every victory feels earned. It's the kind of game that makes the whole family chant 'One more card!'"
      },
      {
        rank: 7,
        name: "Lord of the Rings: Fate of the Fellowship",
        description: "Fate of the Fellowship brings the entire Lord of the Rings saga to life in under 90 minutes, without losing the epic storytelling. You'll feel the weight of every choice as the fellowship's fate rests in your hands. Dramatic moments unfold naturally through the gameplay."
      },
      {
        rank: 8,
        name: "Pergola",
        description: "Pergola wraps a cozy theme around a tight, rewarding puzzle where nearly every action scores points. The challenge is figuring out the most efficient way to use what you have right now. It feels warm and inviting, yet purely strategic at its core. Families who love gentle brain-burners will be instantly charmed."
      },
      {
        rank: 9,
        name: "Hot Streak",
        description: "Hot Streak delivers loud, hilarious family moments as you bet on mascots who might sprint to glory… or trip right before the finish line. It's chaotic, silly, and absolutely delightful in the best way. Every round ends in laughter, groans, and immediate demands for a rematch."
      },
      {
        rank: 10,
        name: "Finspan",
        description: "Finspan takes the spirit of Wingspan and gives it a fresh aquatic identity all its own. The engine-building feels satisfying, while the fish theme adds a charming twist. Card management offers numerous meaningful choices without bogging down the game. Perfect for families who love a strategy challenge that still flows smoothly."
      },
      {
        rank: 11,
        name: "Bonsai",
        description: "Bonsai is a serene puzzle that invites players to grow their own tiny tree. It's quiet, thoughtful, and surprisingly rewarding. Every tile added feels like crafting a miniature work of art. As your tree comes together, there's a real sense of pride and anticipation."
      },
      {
        rank: 12,
        name: "Positano",
        description: "Positano is a relaxing, beautiful game that feels like a sunny vacation on the Italian coast. But beneath the calm vibe lies a surprisingly cutthroat world of property management and clever timing. Every choice affects the landscape and the competition. It's both scenic and strategic in exactly the right amounts."
      },
      {
        rank: 13,
        name: "Star Wars Super Teams",
        description: "This game is a lively, family-friendly race where you're trying to get your squad's ships across the finish line. The twist? Sometimes you must move the other team's ships, creating delicious 'Do I really have to do this?' moments. It's fast, thematic, and a perfect team game for mixed ages."
      },
      {
        rank: 14,
        name: "Jungo",
        description: "Jungo is a fantastic alternative to Scout that offers the same 'don't rearrange your hand' thrill, but with rules the whole family can learn in minutes. Turns move fast, combos feel great, and it encourages lots of clever card timing. It's snappy, addictive, and endlessly replayable."
      }
    ],
    relatedLinks: [
      {
        text: "Best Board Games for Kids of 2025",
        url: "/rankings/best-board-games-for-kids-2025"
      },
      {
        text: "Best Two Player Games of 2025",
        url: "/rankings/best-two-player-games-2025"
      }
    ]
  },
  {
    slug: "best-two-player-games-2025",
    title: "Best Two Player Games of 2025",
    metaTitle: "Best Two Player Board Games of 2025 - Top Picks for Couples",
    metaDescription: "Discover the best two player board games of 2025. Perfect for date nights, competitive duels, and quality time with your favorite player two.",
    year: "2025",
    category: "Two Player Games",
    author: "The Tabletop Family",
    date: "2025-12-10",
    introduction: `I love a two player board game — they're perfect for a fun, playful, competitive game between you and your spouse, your kids, or just your favorite player number two. There were a bunch of great two player board games that released this year, so much so that they deserved their own Best of the Year list!`,
    games: [
      {
        rank: 1,
        name: "Toy Battle",
        description: "Toy Battle combines incredible war-like tactical gameplay with a fun toy theme that feels whimsical and nostalgic all at once. It manages to be both cute and cunning as players go head to head to take control of their opponent's base. Each toy has a unique power and you'll utilize them to the best of your ability. The game comes with multiple maps to add variety and challenge. Our most played board game this year!"
      },
      {
        rank: 2,
        name: "The Architects of Amytis",
        description: "The Architects of Amytis blends drafting and city building into a smooth head-to-head puzzle full of clever decisions. The hidden tic-tac-toe bonus system adds a surprising layer of strategic sneakiness. Every round feels like a tense dance between planning your own build and trying to disrupt your opponent. It's elegant, smart, and incredibly satisfying."
      },
      {
        rank: 3,
        name: "Duel for Cardia",
        description: "Duel for Cardia feels like War got a glow-up! Bigger combos, smarter decisions, and tons of unique setups. Each battle is punchy and exciting with great tension and variety. You're constantly reading your opponent and timing your strongest plays. It's quick, clever, and deliciously competitive."
      },
      {
        rank: 4,
        name: "Solstis",
        description: "Solstis is a cozy drafting and tile placement duel that feels calm at first until the spite drafting begins. The choices are simple but surprisingly impactful, leading to those fun 'I can't believe you took that!' moments. It strikes a lovely balance between relaxed puzzling and sharp competitive play. Perfect for date nights."
      },
      {
        rank: 5,
        name: "Garden Rush",
        description: "Garden Rush is a fast, scrappy tile placement draft where you're trying to complete shape patterns in your garden while timing their drafting properly. The tiles gradually move down the line requiring strategic timing that makes the game so fun! Games fly by, yet still pack in real tactical depth. A perfect 'let's play again' experience."
      },
      {
        rank: 6,
        name: "Zenith",
        description: "Zenith is a clever head-to-head puzzle where every choice feels tight and meaningful in this tug-of-war engine builder. It builds beautifully toward big 'aha!' moments that make the final reveal incredibly satisfying. The rules stay breezy, but the decisions hit that perfect medium weight sweet spot. Sharp, clean, and endlessly replayable."
      },
      {
        rank: 7,
        name: "Agent Avenue",
        description: "Agent Avenue is your new favorite 'I split, you choose' showdown where deception and timing rule the table. Every decision feels like reenacting the Princess Bride cup scene—'Is the best card face-up… or face down?' The tension is palpable, and the laughs come naturally. Simple rules, clever gameplay, and loads of personality."
      },
      {
        rank: 8,
        name: "Tag Team",
        description: "Tag Team captures the thrill of classic fighting games in a fast, card-driven format perfect for two. You can mix and match fighters to create unique tag-team combos, giving the game tons of variety. Turns are snappy and full of big swings. It's flashy, fun, and brimming with energy."
      },
      {
        rank: 9,
        name: "Everdell Duo",
        description: "Everdell Duo takes the beloved woodland charm of Everdell and distills it into a tight, focused two-player experience. Every decision matters, making the tension between players feel rich and rewarding. You'll constantly be weighing short-term gains against long-term plans. It's warm, thematic, and beautifully competitive."
      },
      {
        rank: 10,
        name: "Spirits of the Wild: Awakening",
        description: "Spirits of the Wild: Awakening leans into its relaxing, tactile heart—drawing stones from the bag, placing them onto your animal boards, and watching your tableau slowly come to life. The refreshed 2025 version adds new spirit animals, fresh powers, and expanded ways to score. It's a lovely two-player retreat that feels calm in the hands and quietly satisfying on the table."
      }
    ],
    honorableMentions: [
      "Orapa Mine by Playte Games",
      "Mind Bug by nerdlab-games",
      "Mythicals by Repos Games"
    ],
    relatedLinks: [
      {
        text: "Best Family Board Games of 2025",
        url: "/rankings/best-family-board-games-2025"
      },
      {
        text: "Best Board Games for Kids of 2025",
        url: "/rankings/best-board-games-for-kids-2025"
      }
    ]
  },
  {
    slug: "best-board-games-for-kids-2025",
    title: "Best Board Games for Kids of 2025",
    metaTitle: "Best Board Games for Kids 2025 - Ages 4-8 Top Picks",
    metaDescription: "The best board games for kids ages 4-8 in 2025. Easy to learn, fun to play, and perfect for family game nights. Tested and loved by real families.",
    year: "2025",
    category: "Kids Games",
    author: "The Tabletop Family",
    date: "2025-12-08",
    introduction: `Looking for the best board games for kids in 2025? This list highlights the kids' games that truly stood out this year. Games that held attention, were easy to learn, and were played again and again.

Most of the games on this list are new releases from 2025 with a few titles that were new to our family this year but quickly became favorites. When choosing games for this list, we think specifically about which games really resonated with our kids aged 8 and younger while still being enjoyable for the older members of our family.

Kid Games are intended for players between 4-8 years of age, have simple easy-to-learn rules, take around 15-30 minutes or less to play, and are designed so kids can play independently with only minor help from adults.`,
    games: [
      {
        rank: 1,
        name: "Mr. Postmouse's Picnic",
        description: "The #1 kids game of 2025! A delightful cooperative adventure that combines storytelling with strategic planning. Kids work together to help Mr. Postmouse deliver invitations while navigating obstacles and making clever choices. The charming theme and engaging gameplay make it perfect for young players."
      },
      {
        rank: 2,
        name: "Super Meow",
        description: "Super Meow is an adorable gateway deck-builder where kids race to power up their tiny starter decks and be the first to assemble their superhero cat. Each turn is simple and fast, keeping the focus on playful choices. The cheerful art and lighthearted pacing make it an easy, inviting introduction to deck-building. Ages 6+"
      },
      {
        rank: 3,
        name: "Mooki Island",
        description: "Mooki Island blends set collection with a simple drafting system, creating fun moments where kids must remember what others took. The choices are small but meaningful, giving young players a sense of clever accomplishment. It's competitive, playful, and perfect for families. The perfect game for your youngest players to play independently. Ages 4+"
      },
      {
        rank: 4,
        name: "MicroMacro Kids: Crazy City Park",
        description: "Our most anticipated kids' game of the year didn't disappoint. MicroMacro Kids brings all the seek-and-find mystery fun of the original series but with 100% less murder, making it 100% kid-friendly. Kids will love solving clues, tracing paths, and uncovering clever little details on the big map. Ages 7-8+"
      },
      {
        rank: 5,
        name: "Splendor Kids",
        description: "Splendor Kids transforms the classic engine-builder into an easy, streamlined version for young players. Kids will grasp the win conditions right away, making it satisfying from the very first play. As they get more comfortable, the advanced rules let you scale difficulty at the perfect pace. Ages 6+"
      },
      {
        rank: 6,
        name: "Foxy",
        description: "Foxy takes the idea of a classic memory game and gives it a smart twist where everyone stays equally involved. Instead of simply finding pairs, kids have to watch, predict, and make thoughtful choices. There's no lucking out because someone flipped your perfect tile for you. It's fast, fair, and a huge step up from standard memory games. Ages 6+"
      },
      {
        rank: 7,
        name: "Ziggurat",
        description: "Ziggurat is a tense cooperative legacy campaign where you and your teammate climb an ancient temple filled with secrets, danger, and story moments that unfold over six sessions. Each chapter permanently changes the game. With only six chapters, it is the perfect first legacy game for families with younger kids. Ages 6+"
      },
      {
        rank: 8,
        name: "Mmm!",
        description: "Mmm! is a cooperative dice game where kids work together as mischievous mice stealing snacks before the cat catches them. The tension ramps up just enough to keep everyone invested without ever feeling stressful. Teamwork is key, and kids love cheering each other on. It's charming, replayable, and a challenge to win. Ages 5+"
      },
      {
        rank: 9,
        name: "The Sandcastles of Burgundy",
        description: "The Sandcastles of Burgundy takes the incredibly popular strategy board game for adults and reimagines it for children. Created by the same designer, this Feld for Kids game packs hidden depth into an adorable theme. Kids are presented with simple yet impactful choices, memory challenges, and a lovely step into modern strategy gaming. Ages 5+"
      }
    ],
    relatedLinks: [
      {
        text: "Best Family Board Games of 2025",
        url: "/rankings/best-family-board-games-2025"
      },
      {
        text: "Best Two Player Games of 2025",
        url: "/rankings/best-two-player-games-2025"
      }
    ]
  }
];
