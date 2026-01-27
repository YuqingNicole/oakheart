// Oakheart Design System Theme
export const theme = {
  colors: {
    // Primary
    oakDeep: '#1B4332',
    oakForest: '#2D5A45',
    oakSage: '#52796F',

    // Accent
    goldWarm: '#D4A373',
    goldLight: '#E9C89B',
    goldPale: '#FAF3E8',

    // Neutrals
    cream: '#FEFCF8',
    charcoal: '#1C1C1C',
    graphite: '#3D3D3D',
    stone: '#6B6B6B',
    mist: '#F5F5F3',

    // Semantic
    error: '#DC2626',
    errorBg: '#FEF2F2',
    success: '#16A34A',
    successBg: '#F0FDF4',
  },

  fonts: {
    display: "'Fraunces', Georgia, serif",
    body: "'Source Sans 3', -apple-system, sans-serif",
  },

  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2.5rem',
    xl: '4rem',
    '2xl': '6rem',
  },

  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '100px',
  },

  shadows: {
    sm: '0 4px 12px rgba(0, 0, 0, 0.08)',
    md: '0 12px 32px rgba(27, 67, 50, 0.1)',
    lg: '0 20px 60px rgba(27, 67, 50, 0.12)',
    xl: '0 24px 80px rgba(0, 0, 0, 0.15)',
  },

  transitions: {
    fast: '0.2s ease-out',
    base: '0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    slow: '0.5s cubic-bezier(0.16, 1, 0.3, 1)',
  },
} as const;

export type Theme = typeof theme;
