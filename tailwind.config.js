/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Quét tất cả các tệp JS, JSX, TS, TSX trong thư mục src
  ],
  theme: {
    extend: {
      fontFamily: {
        body:"Metal Mania, sans-serif",
        sans:"Metal Mania, serif",
        heading:"Metal Mania,serif",
      },
      colors: {
        primary: {
          50:'#7AD1DD',
          100:'#5FCCDB',
          200:'#44CADC',
          300:'#2AC9DE',
          400:'#1AC2D9',
          500:'#11B7CD',
          600:'#09ADC3',
          700:'#0E99AC',
          800:'#128797',
          900:'#147885'},
        neutral: {
          50:'#F0BBDD',
          100:'#ED9BCF',
          200:'#EC7CC3',
          300:'#ED5DB8',
          400:'#F13EAF',
          500:'#F71FA7',
          600:'#FF00A1',
          700:'#E00890',
          800:'#C50E82',
          900:'#AD1374'},
      },
    },
  },
  plugins: [],
}