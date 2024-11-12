module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
          extend: {
          
            fontFamily: {
              libreBodoni: ['"Libre Bodoni"', 'serif'],
              Rye: ['"Rye"','sans']
            },
            fontSize: {
              '39px': '39px',
              '50px': '50px',
              '25px':'25px',
              '20px': '20px',
            },
            weight: {
              '700': '700',
            },
            lineHeight: {
              '65.8px': '65.8px',
              '93.75px' : '93.75px'
            },
            letterSpacing: {
              tight: '0.025em',
            },
      
      colors: {
        customBrown: "#A29875",
        myBrown: "#787054",
        customBlack: "#000000",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
