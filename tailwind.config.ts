import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-image": "url('/products_bg.svg')"
      },
      gridTemplateRows: {
        'layout': 'auto 1fr auto',
      },
      fontFamily:{
        poppins:'var(--poppins)',
        inter:'var(--inter)'
      }
    },
  },
  plugins: [],
};
export default config;
