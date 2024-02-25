import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			width: {
				"1200px": "1200px",
				"295px": "295px",
			},
			maxWidth: {
				"1200px": "1200px",
			},
			height: {
				"64px": "64px",
			},
			backgroundColor: {
				"primary-blue": "#0073CF",
				"hover-light-gray": "#f6f6f6",
				"btn-hover-blue": "#0464b0",
				"banner-lightblue": "#E8F4FD",
			},
			textColor: {
				"primary-black": "#333333",
				"light-black": "#666666",
			},
			borderColor: {
				"primary-black": "#333333",
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
