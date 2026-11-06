/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ithe tumche custom colors add kara
        pink: {
          rich: "#ff2d75",
          glow: "#ff5e95",
        },
        black: {
          deep: "#0a0a0a",
          card: "#111111",
        }
      },
    },
  },
  plugins: [],
}





// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         // Portfolio sathi professional colors
//         navy: '#0a192f',
//         lightNavy: '#112240',
//         teal: '#64ffda',
//         slate: '#8892b0',
//       }
//     },
//   },
//   plugins: [],
// }