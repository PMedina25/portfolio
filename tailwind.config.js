/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: '#ef6d58', 
        dark: '#28293e',
        yellow: '#f7cc47',
        blue: '#8082a5',
        purple: '#f550f8',
        'light-gray': '#ffffffa3',
        'light-blue': '#dfe0e9',
        'dark-blue': '#32334c',
        'dark-accent': '#391400',
      }
    },
  },
  plugins: [
    function({ addBase, theme }) {
      addBase({
        'h1': { 'fontSize': theme('fontSize.6xl'), 'fontWeight': theme('fontWeight.extrabold'), 'lineHeight': '1.11' },
        'h2': { 'fontSize': theme('fontSize.4xl'), 'fontWeight': theme('fontWeight.extrabold') },
        'h3': { 'fontSize': theme('fontSize.2xl'), 'fontWeight': theme('fontWeight.extrabold') },
        'h4': { 'fontSize': theme('fontSize.lg'), 'fontWeight': theme('fontWeight.bold') },
        'h5': { 'fontSize': theme('fontSize.text-base'), 'fontWeight': theme('fontWeight.normal') },
        
        [`@media (min-width: ${theme('screens.md')})`]: {
          'h1': { 'fontSize': theme('fontSize.7xl') },
          'h2': { 'fontSize': theme('fontSize.6xl') },
          'h3': { 'fontSize': theme('fontSize.4xl') },
          'h4': { 'fontSize': theme('fontSize.2xl') },
          'h5': { 'fontSize': theme('fontSize.text-base') },
      }})
    }
  ],
}

