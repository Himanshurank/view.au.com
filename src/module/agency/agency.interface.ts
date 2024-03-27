export interface ILocation {
	lon: number;
	lat: number;
}

export interface IBreadcrumb {
	displayName?: string;
	name?: string;
	urlPath: string;
}

export interface IAgent {
	_id: string;
	id: number;
	firstName: string;
	lastName: string;
	agentPhotoFileName: string;
	position: string;
	isWebHidden: boolean;
	url: string;
}

export interface IListing {
	propertyTypes: string[];
	carparks: number;
	city: string;
	unitNumber: string | null;
	isPriceHidden: boolean;
	heroImageUrl: string;
	streetName: string;
	suburbName: string;
	rank: string;
	id: number;
	state: string;
	imageUrlSlug: string;
	priceText: string;
	saleMethod: string;
	streetNumber: string;
	postcode: string;
	isStreetHidden: boolean;
	soldAt: string;
	bathrooms: number;
	bedrooms: number;
	primaryPropertyType: string;
	isSoldPriceHidden: boolean;
	streetAddress: string;
	gnafId: string;
	region: string;
	status: string;
	_id: string;
	isListing: boolean;
	listingDetailLink: string;
}

export interface IListings {
	total: number;
	sold: IListing[];
	sales: IListing[];
	rent: IListing[];
}

export interface IUrlData {
	agencyId: number;
	agencySlug: string;
	saleMethod: string;
}

export interface IData {
	id: number;
	name: string;
	description: string;
	website: string;
	address: string;
	suburbName: string;
	postcode: string;
	phone: string;
	numberOfSoldListings: number;
	numberOfBuyListings: number;
	numberOfRentListings: number;
	averageDaysOnMarket: number;
	averageLeasedDaysOnMarket: number;
	averageLeasedPrice: number;
	brandColour: string;
	brandContrastColour: string;
	logoFileName: string;
	facebook: string;
	instagram: string;
	twitter: string;
	linkedin: string;
	youtube?: string;
	blogUrl: string;
	videoUrl: string;
	blogRssFeed?: string;
	hideAddress: boolean;
	hideInFindAnAgent: boolean;
	slug: string;
	location: ILocation;
	_id: string;
	averageSoldPrice: number;
	numberOfLeasedListings: number;
	agents: IAgent[];
	staticMapUrl: string;
	breadcrumbs: IBreadcrumb[];
	listings: IListings;
	urlData: IUrlData;
	detectedIp: string;
	__N_SSP: boolean;
}

export interface IAgencyProps {
	data: IData;
}
