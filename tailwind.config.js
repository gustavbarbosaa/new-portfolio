module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.ts',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        righteous: ['Righteous', 'cursive'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
