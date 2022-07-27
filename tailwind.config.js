/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Pro:['Source Code Pro', 'monospace']
       
      },
      colors:{
        "yellow": "#FFFF50",

      },
      backgroundImage: {
        'hero-pattern': "url('/images/blackTable.jpg')",
     
  },
  plugins: [],
}
}
}