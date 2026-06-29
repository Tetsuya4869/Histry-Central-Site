import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Text',
          'SF Pro Display',
          'Hiragino Sans',
          'Hiragino Kaku Gothic ProN',
          'Noto Sans JP',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      borderRadius: {
        ios: '18px',
        'ios-lg': '24px',
      },
      colors: {
        ios: {
          bg: 'var(--ios-bg)',
          card: 'var(--ios-card)',
          'card-2': 'var(--ios-card-2)',
          text: 'var(--ios-text)',
          'text-2': 'var(--ios-text-2)',
          'text-3': 'var(--ios-text-3)',
          separator: 'var(--ios-separator)',
          blue: '#0A84FF',
          'blue-light': '#007AFF',
        },
      },
      boxShadow: {
        ios: '0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.06)',
        'ios-lg': '0 4px 16px rgba(0,0,0,0.10), 0 16px 48px rgba(0,0,0,0.10)',
      },
      backdropBlur: {
        ios: '20px',
      },
    },
  },
  plugins: [],
};

export default config;
