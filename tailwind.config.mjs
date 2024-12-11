/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A8A', // Deep Blue
          light: '#3B82F6',   // Light Blue
          pale: '#E0F2FE',    // Pale Blue
        },
        content: {
          DEFAULT: '#1F2937', // Dark Gray
          medium: '#6B7280',  // Medium Gray
          light: '#D1D5DB',   // Light Gray
        }
      },
    },
  },
  plugins: [],
}