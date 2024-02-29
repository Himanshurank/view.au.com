import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			width: {
				"1200px": "1200px",
				"295px": "295px",
				"44%": "44%",
			},
			maxWidth: {
				"1200px": "1200px",
			},
			height: {
				"64px": "64px",
				"500px": "500px",
				"198px": "198px",
			},
			backgroundColor: {
				"primary-blue": "#0073CF",
				"hover-light-gray": "#f6f6f6",
				"btn-hover-blue": "#0464b0",
				"banner-lightblue": "#E8F4FD",
				"primary-black": "#333333",
			},
			textColor: {
				"primary-blue": "#0073CF",
				"primary-black": "#333333",
				gray: "rgb(51,51,51)",
				"light-black": "#666666",
			},
			borderColor: {
				"primary-black": "#333333",
			},
			fontSize: {
				"74px": "74px",
				"44px": "44px",
			},
			lineHeight: {
				"82px": "82px",
				"52px": "52px",
			},
			padding: {
				"17": "75px",
				"112px": "112px",
			},
			screens: {
				lgc: "1200px",
			},
			fontFamily: {
				golos: ["Golos Text", "sans-serif"],
				dmSans: ["DM Sans", "sans-serif"],
			},
		},
	},
	plugins: [],
};
export default config;
