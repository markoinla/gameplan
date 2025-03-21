/** @type {import('tailwindcss').Config} */
module.exports = {
  // Define content sources - all HTML templates and JavaScript files
  content: [
    "./app/templates/**/*.html",
    "./app/static/js/**/*.js",
  ],
  // Enable dark mode by default
  darkMode: 'class',
  theme: {
    extend: {
      // We can extend the default theme here later if needed
    },
  },
  // Include DaisyUI as a plugin
  plugins: [
    require('daisyui')
  ],
  // DaisyUI configuration
  daisyui: {
    themes: ["dark", "light"], // Set dark as the first theme (default)
  }
}
