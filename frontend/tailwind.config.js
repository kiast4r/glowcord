module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dreamPink: "#FF69B4", 
        hibiscusRed: "#FF3E6C",
        surfBlue: "#00AEEF",  
        tropicalTeal: "#4DEEEA",
        sunshineYellow: "#FFE600",
        gyaruTan: "#FFF0D4"
      },
      fontFamily: {
        bubblegum: ["'Fredoka'", "cursive", "sans-serif"]
      },
      boxShadow: {
        sticker: "4px 4px 0px 0px #000000",
        insetSticker: "inset 3px 3px 0px rgba(0,0,0,0.15)"
      }
    },
  },
  plugins: [],
}
