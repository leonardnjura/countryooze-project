module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // Ensure these match with .storybook/preview.js
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    fontFamily: {
      sans: ['Arial', 'sans-serif'],
      serif: ['Garamond', 'serif'],
      mono: [
        // 'Courier New',
        'Monaco',
        'Menlo',
        'SFMono-Regular',
        'Consolas',
        'Liberation Mono',
        'monospace',
        'ui-monospace',
      ],
    },
    extend: {
      colors: {
        blue: {
          500: '#1a73e8',
        },
      },
      spacing: {
        128: '32rem',
        144: '36rem',
        160: '40rem',
        176: '44rem',
        192: '48rem',
      },
    },
  },
  plugins: [],
};
