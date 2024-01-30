/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
    //   't':'946px'
    //   // 'tablet': '640px',
    //   // // => @media (min-width: 640px) { ... }

    //   // 'laptop': '1024px',
    //   // // => @media (min-width: 1024px) { ... }

    //   // 'desktop': '1280px',
    //   // // => @media (min-width: 1280px) { ... }
    'lg':'900px',
    'vs':'600px'
    }
    
  },
  plugins: [],
}

