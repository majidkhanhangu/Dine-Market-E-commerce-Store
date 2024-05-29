/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {

    extend: {
      
      fontFamily : {
        sore: "sora"
        
      },
      colors:{
        lora: "#e1edff",
        backee:"#ffece3",
        haze:"#0062f5",
        lazy:"#d6d6d8",
        butonbg:"#474747",
        boom:"#212121",
        bannbg:"#efe1c7",
        baneebg:"#d7d7d9",
        icone:"#f1f1f1",
        hene:"#666",
        bene:"#888",
        jene:"#212121",
        saze:"#f1f1f1",
      },
      fontSize:{
        mazy: "17px",
        fazy:"19px",
        nazy:"1rem",
        jazy:"16px",
        femlee:"15px"


      },
      borderRadius : {
        momo:"10px"
      }
    },
  },
  plugins: [],
}

