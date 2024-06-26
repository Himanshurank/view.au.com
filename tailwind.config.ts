import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			width: {
				"1px": "1px",
				"295px": "295px",
				"1200px": "1200px",
				"38%": "38%",
				"44%": "44%",
			},
			maxWidth: {
				"1200px": "1200px",
			},
			height: {
				"64px": "64px",
				"72px": "72px",
				"99px": "99px",
				"119px": "119px",
				"198px": "198px",
				"200px": "200px",
				"305px": "305px",
				"360px": "360px",
				"446px": "446px",
				"500px": "500px",
				"58": "14.5rem",
			},
			backgroundColor: {
				"primary-blue": "#0073CF",
				"light-gray": "#f6f6f6",
				"btn-hover-blue": "#0464b0",
				"banner-lightblue": "#E8F4FD",
				"primary-black": "#333333",
			},
			textColor: {
				"primary-blue": "#0073CF",
				"primary-black": "#333333",
				gray: "rgb(51,51,51)",
				"light-black": "#666666",
				"primary-lavender": "#6f23ec",
				"primary-green": "#2ea140",
			},
			borderColor: {
				"primary-black": "#333333",
				"b-gray": "#999999",
				"primary-blue": "#0073CF",
				"light-black": "#666666",
			},
			fontSize: {
				"18px": "18px",
				"20px": "20px",
				"44px": "44px",
				"74px": "74px",
			},
			lineHeight: {
				"82px": "82px",
				"52px": "52px",
			},
			padding: {
				"17": "75px",
				"112px": "112px",
			},
			inset: {
				"15": "60px",
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
