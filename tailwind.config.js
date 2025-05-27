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
        heading:"Merriweather, serif",
      },
      colors: {
        primary: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
          950: '#082F49',
        },
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
        sidebarBg: '#1E293B', // Màu nền sidebar tối
        sidebarText: '#CBD5E1', // Màu chữ xám nhạt cho sidebar
        sidebarHoverBg: '#334155', // Màu nền khi hover
        sidebarActiveBg: '#0EA5E9', // Màu nền khi active (màu primary-500)
        sidebarActiveText: '#FFFFFF', // Màu chữ khi active
        accentRed: '#EF4444', // Màu đỏ cho logo nhịp tim
        formBg: 'rgba(30, 41, 59, 0.9)', // slate-800 với opacity 90%
      },
    },
  },
  plugins: [],
}