export interface GuideMetadata {
  slug: string;
  category: string;
  title: string;
  description: string;
  readingTime: string;
}

export interface Guide extends GuideMetadata {
  content: string;
}

// Category display names and descriptions
export const categoryInfo: Record<string, { name: string; description: string; icon: string }> = {
  'Career': {
    name: 'Career',
    description: 'Build your career in the board game industry',
    icon: '💼'
  },
  'Community': {
    name: 'Community',
    description: 'Build and engage your gaming community',
    icon: '👥'
  },
  'Crowdfunding': {
    name: 'Crowdfunding',
    description: 'Launch successful Kickstarter campaigns',
    icon: '💰'
  },
  'GameDesign': {
    name: 'Game Design',
    description: 'Master the art of game design',
    icon: '🎲'
  },
  'General': {
    name: 'General',
    description: 'General board game resources',
    icon: '📖'
  },
  'Inspiration': {
    name: 'Inspiration',
    description: 'Find inspiration for your next game',
    icon: '💡'
  },
  'Productivity': {
    name: 'Productivity',
    description: 'Boost your productivity as a creator',
    icon: '⚡'
  },
  'Publishing': {
    name: 'Publishing',
    description: 'Navigate the world of game publishing',
    icon: '📚'
  }
};
