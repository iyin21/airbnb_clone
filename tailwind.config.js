/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      black:{
        10:"#000000",
        20:"#717171",
      }, 
      white:"#ffffff",
      neutral:"#C6B8B8",
      red:"#FC3C60"
    },
    fontSize: {
      "sm":["10px", "12px"],
      "2sm":["12px", "14px"],
      "3sm":["13px", "15px"],
      "md":["14px", "17px"],
      "2md":["16px","19px"],
      "xl":["19px","21px"],
    },
    extend: {},
  },
  plugins: [],
}
