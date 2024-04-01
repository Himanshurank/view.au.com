export const TAB_SLIDER = [
	{
		title: "INTRODUCTION",
		link: "introduction",
	},
	{
		title: "SUBURB TRENDS",
		link: "suburb-trend",
	},
	{
		title: "RECENTLY LISTED",
		link: "recently-listed",
	},
	{
		title: "YOUR NEIGHBOURS",
		link: "your-neighbours",
	},
	{
		title: "SCHOOLS NEARBY",
		link: "schools-nearby",
	},
	{
		title: "AGENTS",
		link: "agents",
	},
	{
		title: "STREETS",
		link: "streets",
	},
];

export const OCCUPATIONS_TITLES = ["Professional", "Managers", "Clerical", "Community and Personal Service", "Sales Workers"];

export const SUBURB_META_TAGS = [
	{ name: "viewport", content: "width=device-width, initial-scale=1" },
	{ name: "apple-mobile-web-app-capable", content: "yes" },
	{ name: "og:type", content: "website" },
	{ name: "author", content: "resi.uatz.view.com.au" },
	{ name: "og:site_name", content: "resi.uatz.view.com.au" },
	{ name: "theme-color", content: "#FFFFFF" },
	{ name: "og:title", content: "Richmond, VIC 3121 - Suburb Profile | view.com.au" },
	{ name: "twitter:title", content: "Richmond, VIC 3121 - Suburb Profile | view.com.au" },
	{ name: "description", content: "Richmond has thriving main streets Bridge Road and Swan Street. Browse through our property data, median prices and demographics of Richmond." },
	{ name: "og:description", content: "Richmond has thriving main streets Bridge Road and Swan Street. Browse through our property data, median prices and demographics of Richmond." },
	{ name: "twitter:description", content: "Richmond has thriving main streets Bridge Road and Swan Street. Browse through our property data, median prices and demographics of Richmond." },
	{ name: "twitter:card", content: "summary_large_image" },
	{ name: "twitter:site", content: "@ViewComAu" },
	{ name: "twitter:creator", content: "@ViewComAu" },
	{ name: "og:image", content: "https://resi.uatz.view.com.au/viewstatic/lancer/static/images/logo.png" },
	{ name: "twitter:image", content: "https://resi.uatz.view.com.au/viewstatic/lancer/static/images/logo.png" },
];

export const SUBURB_JSON_LD = [
	{
		"@context": "https://schema.org",
		"@type": "Organization",
		name: "resi.uatz.view.com.au",
		url: "https://resi.uatz.view.com.au/vic/richmond-3121/",
		logo: "https://resi.uatz.view.com.au/viewstatic/lancer/static/images/logo.png",
	},
	{
		"@context": "https://schema.org",
		"@type": "Residence",
		address: {
			"@type": "PostalAddress",
			streetAddress: "14 Capano Drive",
			addressLocality: "Richmond",
			addressRegion: "VIC",
			postalCode: "3121",
			addressCountry: "Australia",
		},
		url: "https://resi.uatz.view.com.au/vic/richmond-3121",
	},
	{
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Location Profiles",
				item: "https://resi.uatz.view.com.au/location/",
			},
			{
				"@type": "ListItem",
				position: 2,
				name: "VIC",
				item: "https://resi.uatz.view.com.au/vic/",
			},
			{
				"@type": "ListItem",
				position: 3,
				name: "Inner East",
				item: "https://resi.uatz.view.com.au/vic/richmond-3121",
			},
		],
	},
];
