export interface Publisher {
  id: string;
  slug: string;
  name: string;
  country: string;
  website: string;
  acceptingSubmissions: boolean;
  catalogSize: "Small (1-10)" | "Medium (11-50)" | "Large (50+)";
  categories: string[];
  interestedIn: string;
  representativeGames: string[];
  contact: {
    preferred: "Email" | "Form" | "Agent";
    info: string;
  };
  social: {
    bgg?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
  conventions: string[];
  description: string; // SEO description
}

export const publishers: Publisher[] = [
  {
    id: "1",
    slug: "25th-century-games",
    name: "25th Century Games",
    country: "USA",
    website: "https://www.25thcenturygames.com",
    acceptingSubmissions: true,
    catalogSize: "Medium (11-50)",
    categories: ["Euro", "Party", "Family"],
    interestedIn: "We are looking for easy to learn but hard to master games. Family friendly themes are a plus.",
    representativeGames: ["Ra", "Space Explorers", "Ghosts of Christmas"],
    contact: {
      preferred: "Form",
      info: "https://www.25thcenturygames.com/submissions",
    },
    social: {
      bgg: "https://boardgamegeek.com/boardgamepublisher/28620/25th-century-games",
      facebook: "https://www.facebook.com/25thCenturyGames",
    },
    conventions: ["Gen Con", "Origins", "PAX Unplugged"],
    description: "25th Century Games is a US-based publisher known for high-quality family and strategy games. They are actively looking for new submissions."
  },
  {
    id: "2",
    slug: "stonemaier-games",
    name: "Stonemaier Games",
    country: "USA",
    website: "https://stonemaiergames.com",
    acceptingSubmissions: true,
    catalogSize: "Large (50+)",
    categories: ["Strategy", "Euro"],
    interestedIn: "Medium-heavy strategy games with high production value and solitary modes.",
    representativeGames: ["Wingspan", "Scythe", "Viticulture"],
    contact: {
      preferred: "Form",
      info: "https://stonemaiergames.com/about/submission-guidelines/",
    },
    social: {
      bgg: "https://boardgamegeek.com/boardgamepublisher/23202/stonemaier-games",
    },
    conventions: ["Gen Con", "Spiel Essen"],
    description: "Creator of Wingspan and Scythe. Stonemaier Games is a industry leader in component quality and transparent communication."
  }
];
