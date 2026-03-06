// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         "linkedin-blue": "#0072b1",
//         "linkedin-blue-dark": "#004182",
//         "linkedin-blue-light": "#378fe9",
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//       fontFamily: {
//         sans: ["Inter", "system-ui", "sans-serif"],
//       },
//     },
//   },
//   plugins: [],
// };

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#92400e',
          50: '#fdf8f4',
          100: '#faebd7',
          200: '#f5d0a9',
          300: '#e8a96b',
          400: '#d47c3a',
          500: '#b45309',
          600: '#92400e',
          700: '#78350f',
          800: '#5c2709',
          900: '#3d1a06',
        },
        secondary: {
          DEFAULT: '#b45309',
          50: '#fdf6ee',
          100: '#fae8cc',
          200: '#f5cc8a',
          300: '#eca84a',
          400: '#d97706',
          500: '#b45309',
          600: '#92400e',
          700: '#78350f',
          800: '#5c2709',
          900: '#3d1a06',
        },
        accent: {
          DEFAULT: '#d97706',
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.05)',
        'medium': '0 4px 25px rgba(0, 0, 0, 0.08)',
        'strong': '0 10px 40px rgba(0, 0, 0, 0.12)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}