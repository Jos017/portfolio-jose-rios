/** @type {import('tailwindcss').Config} */
import { getPattern } from './src/utils/tailwindPatternsHandler';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
  safelist: [
    {
      pattern: getPattern('max-w'),
    },
  ],
  theme: {
    extend: {
      colors: {
        'primary-darker': '#3568D4',
        'primary-main': '#3E7BFA',
        'primary-lighter': '#6698FA',
        'primary-subtle': '#CCDDFF',
        'dark-0': '#1C1C28',
        'dark-1': '#28293D',
        'dark-2': '#555770',
        'dark-3': '#8F90A6',
        'dark-4': '#C7C9D9',
        'dark-elevation-1': '#2A2B40',
        'dark-elevation-2': '#2C2D42',
        'dark-elevation-3': '#2D2E45',
        'dark-elevation-4': '#2F3047',
        'dark-elevation-5': '#30324A',
        'dark-elevation-6': '#32334D',
        'light-0': '#E4E4EB',
        'light-1': '#EBEBF0',
        'light-2': '#F2F2F5',
        'light-3': '#FAFAFC',
        'light-4': '#FFFFFF',
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      dropShadow: {
        'dark-1': '0px 1px 2px rgba(0, 0, 0, 0.32)',
        'dark-2': '0px 2px 4px rgba(0, 0, 0, 0.32)',
        'dark-3': '0px 4px 8px rgba(0, 0, 0, 0.32)',
        'dark-4': '0px 8px 16px rgba(0, 0, 0, 0.32)',
        'dark-5': '0px 16px 24px rgba(0, 0, 0, 0.32)',
        'dark-6': '0px 20px 32px rgba(0, 0, 0, 0.32)',
      },
      fontSize: {
        'heading-1': ['2.5rem', { lineHeight: '3.375rem', fontWeight: 700 }],
        'heading-2': ['2rem', { lineHeight: '2.75rem', fontWeight: 700 }],
        'heading-3': ['1.75rem', { lineHeight: '2.375rem', fontWeight: 700 }],
        'heading-4': ['1.5rem', { lineHeight: '2rem', fontWeight: 700 }],
        'heading-5': ['1.25rem', { lineHeight: '1.75rem', fontWeight: 700 }],
        'heading-6': ['1rem', { lineHeight: '1.375rem', fontWeight: 700 }],
        'body-1': ['1rem', { lineHeight: '1.5rem' }],
        'body-2': ['0.875rem', { lineHeight: '1.5rem' }],
        lead: ['0.875rem', { lineHeight: '1.5rem', fontWeight: 700 }],
        quote: ['1.25rem', { lineHeight: '1.75rem', fontWeight: 600 }],
        capitalized: [
          '0.875rem',
          { lineHeight: 'auto', letterSpacing: '0.125rem' },
        ],
        small: ['0.75rem', { lineHeight: 'auto' }],
        tiny: ['0.625rem', { lineHeight: 'auto', fontWeight: 600 }],
      },
    },
  },
};
