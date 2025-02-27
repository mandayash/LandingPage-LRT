import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		fontFamily: {
			sans: [
				'var(--font-sf-pro)'
			],
			poppins: [
				'var(--font-poppins)'
			]
		},
  		colors: {
  			primary: {
				DEFAULT: '#CF0000',
				dark: '#B2000F',
				light: '#FFFFFF',
			},
			secondary: '#828282',
			gray: {
				100: '#FFFFFF',
				200: '#F4F4F4',
				300: '#EAEAEA',
				400: '#828282',
				500: '#303030'
			},
			success: '#69AF1D',
			warning: '#008ED1',
			error: '#FFA500',
			info: '#D64017'
  		}
  	}
  },
  plugins: [
	require("tailwindcss-animate")
	// require("@tailwindcss/typography")
  	],

}

export default config
