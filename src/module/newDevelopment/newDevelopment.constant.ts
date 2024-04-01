export const NEW_DEVELOPMENT_META_TAGS = [
	{ name: "viewport", content: "width=device-width, initial-scale=1" },
	{ name: "apple-mobile-web-app-capable", content: "yes" },
	{ name: "og:type", content: "website" },
	{ name: "author", content: "resi.uatz.view.com.au" },
	{ name: "og:site_name", content: "resi.uatz.view.com.au" },
	{ name: "theme-color", content: "#FFFFFF" },
	{ name: "og:title", content: "6 - 18 Garthowen Crescent, Castle Hill | Apartments, Penthouses, Studio for Sale | New South Wales - resi.uatz.view.com.au" },
	{ name: "twitter:title", content: "6 - 18 Garthowen Crescent, Castle Hill | Apartments, Penthouses, Studio for Sale | New South Wales - resi.uatz.view.com.aufile | view.com.au" },
	{ name: "description", content: "Grand Reve is located on 6 - 18 Garthowen Crescent, Castle Hill, NSW 2154. Pricing and Photos available for this New Development by Grand Reve. Visit the site for more details! " },
	{ name: "og:description", content: "Grand Reve is located on 6 - 18 Garthowen Crescent, Castle Hill, NSW 2154. Pricing and Photos available for this New Development by Grand Reve. Visit the site for more details! " },
	{ name: "twitter:description", content: "Grand Reve is located on 6 - 18 Garthowen Crescent, Castle Hill, NSW 2154. Pricing and Photos available for this New Development by Grand Reve. Visit the site for more details! " },
	{ name: "twitter:card", content: "summary_large_image" },
	{ name: "twitter:site", content: "@ViewComAu" },
	{ name: "twitter:creator", content: "@ViewComAu" },
	{ name: "og:image", content: "https://resi.uatz.view.com.au/viewstatic/lancer/static/images/logo.png" },
	{ name: "twitter:image", content: "https://resi.uatz.view.com.au/viewstatic/lancer/static/images/logo.png" },
];

export const NEW_DEVELOPMENT_LD_JSON = [
	{
		"@context": "https://schema.org",
		"@type": "Organization",
		name: "resi.uatz.view.com.au",
		url: "https://resi.uatz.view.com.au/new-developments/nsw-castle-hill-2154/development-details/grand-reve/",
		logo: "https://resi.uatz.view.com.au/viewstatic/lancer/static/images/logo.png",
	},
	{
		"@context": "https://schema.org",
		"@type": "Residence",
		address: {
			"@type": "PostalAddress",
			streetAddress: "6 - 18 Garthowen Crescent",
			addressLocality: "Castle Hill",
			addressRegion: "NSW",
			postalCode: "2154",
			addressCountry: "Australia",
		},
		url: "https://resi.uatz.view.com.au/new-developments/nsw-castle-hill-2154/development-details/grand-reve/",
	},
	{
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				item: "https://view.com.au/for-sale/",
				position: 1,
				name: "New Development",
			},
			{
				"@type": "ListItem",
				item: "https://view.com.au/for-sale/vic/",
				position: 2,
				name: "VIC",
			},
			{
				"@type": "ListItem",
				item: "https://view.com.au/for-sale/vic/in-inner-east/",
				position: 3,
				name: "Inner East",
			},
			{
				"@type": "ListItem",
				item: "https://view.com.au/for-sale/vic/in-inner-east/richmond",
				position: 4,
				name: "Richmond",
			},
		],
	},
];
