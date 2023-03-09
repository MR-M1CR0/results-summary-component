/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        hanken: "'Hanken Grotesk', 'sans-serif'",
      },
      colors: {
        'primary-red': 'hsl(0, 100%, 67%)',
        'primary-yellow': 'hsl(39, 100%, 56%)',
        'primary-teal': 'hsl(166, 100%, 37%)',
        'primary-blue': 'hsl(234, 85%, 45%)',
        'gradient-slate': 'hsl(252, 100%, 67%)',
        'gradient-royal': 'hsl(241, 81%, 54%)',
        'gradient-violet': 'hsla(256, 72%, 46%, 1)',
        'gradient-persian': 'hsla(241, 72%, 46%, 0)',
        'neutral-white': 'hsl(0, 0%, 100%)',
        'neutral-pale': 'hsl(221, 100%, 96%)',
        'neutral-lavender': 'hsl(241, 100%, 89%)',
        'neutral-gray': 'hsl(224, 30%, 27%)',
      },
    },
  },
  plugins: [],
};
