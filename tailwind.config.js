/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      fontSize: {
         xs: "0.75rem", // 12px
         sm: "0.875rem", // 14px
         base: "1rem", // 16px
         lg: "1.125rem", // 18px
         xl: "1.25rem", // 20px
         "2xl": "1.5rem", // 24px
         "3xl": "1.875rem", // 30px
         "4xl": "2.25rem", // 36px
         "5xl": "3rem", // 48px
         "6xl": "3.75rem", // 60px
         "7xl": "4.5rem", // 72px
         "8xl": "6rem", // 96px
         "9xl": "8rem", // 128px
      },
      extend: {
         fontFamily: {
            body: ["Source Code Pro"],
         },
         colors: {
            primary: {
               "strong-blue": "#011627",
               "shadow-green": "#1E2D3D",
               "light-grey": "#607B96",
               "light-green": "#43D9AD",
               purple: "#4D5BCE",
               orange: "#E99287",
            },
         },
      },
   },
   plugins: [],
};
