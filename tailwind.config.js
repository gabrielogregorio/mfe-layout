const { ID_PROJECT_TO_TAILWIND_CONFIG } = require('./config');

module.exports = {
  content: ['./index.html', './src/**/*.{jsx,tsx}'],
  darkMode: 'class',
  mode: 'jit',
  important: `#${ID_PROJECT_TO_TAILWIND_CONFIG}`,
  plugins: [],
};
