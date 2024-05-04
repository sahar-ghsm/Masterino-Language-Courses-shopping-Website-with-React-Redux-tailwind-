module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionProperty: {
        'max-height': 'max-height',
      },
      fontFamily: {
        sans: 'Inter',
      },
      colors: {
        sahar: '#dfd',
      },
    },
  },
  plugins: [],
};
