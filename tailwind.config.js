/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      keyframes: {
        tada: {
          '0%': { transform: 'scale(1)' },
          '10%, 20%': { transform: 'scale(0.9) rotate(-3deg)' },
          '30%, 50%, 70%': { transform: 'scale(1.1) rotate(3deg)' },
          '40%, 60%': { transform: 'scale(1.1) rotate(-3deg)' },
          '80%': { transform: 'scale(1) rotate(0)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        tada: 'tada 1s ease-in-out infinite',
      },
    },
    colors : {
      TaupeBrown: '#6E4C41', //header footer and more 
      white : '#ffff',
      BrandyPunch : '#D4902A', //use on hover
      gray : '#A9A9A9' 
    }
  },
  plugins: [],
}

