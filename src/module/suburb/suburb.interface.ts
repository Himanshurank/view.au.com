export interface ISuburbDetailProps {
	IsBot: boolean;
	Suburb: string;
	PostCode: string;
	LocalityPid: number;
	State: string;
	SuburbTrends: ISuburbTrends;
	PocketInsights: IPocketInsights;
	SuburbMapImgUrl: string;
	Schools: ISchool[];
	SchoolMapImgUrl: string;
	Disclaimers: IDisclaimer;
	suburbId: number;
	profile: IProfile;
	streets: IStreets;
	listings: ISuburbListings;
	agencies: IAgencies;
	city: string;
	region: string;
	breadCrumbs: IBreadCrumb[];
}

interface IBreadCrumb {
	displayName: string;
	urlPath: string;
}

export interface IAgency {
	id: number;
	agencyUrl: string;
	brandColour: string;
	image: string;
	name: string;
	streetName: string;
	suburb: string;
	numberOfSoldListings: number;
	numberOfBuyListings: number;
	numberOfRentListings: number;
}

interface IAgencies {
	agencies: IAgency[];
}

export interface ISuburbListing {
	address: string;
	image: string;
	price: string;
	bed: number;
	bath: number;
	car: number;
	listingUrl: string;
	streetName: string;
}

export interface ISuburbListings {
	sale: ISuburbListing[];
	lease: ISuburbListing[];
}

export interface IStreet {
	streetSlug: string;
	streetName: string;
	numberOfProperties: number;
	_id: string;
}

interface IStreets {
	streets: IStreet[];
}

interface Image {
	sequence: number;
	fileName: string;
}

interface IProfile {
	suburbId: number;
	images: Image[];
	metaTitle: string;
	description: string;
	headline: string;
	metaDescription: string;
}

interface IDisclaimer {
	category: string;
	key: string;
	content: string;
}

interface ISchool {
	full_name: string;
	year_level: string;
	school_level: string;
	type: string;
	religion: string;
	gender: string;
	suburb: string;
	postcode: number;
	state: string;
	latitude: string;
	longitude: string;
	total_enrolment: number;
	grade6_fees: number | null;
	y12_fees: number | null;
	is_client: number;
	catchment: string | null;
	link: string;
}

interface IPocketInsights {
	Suburb: string;
	DisplayNoWagesText: boolean;
	AreaStatistics: IAreaStatistics;
	Wages: IWagesAndMortgage;
	MortgageRepayments: IWagesAndMortgage;
	Title: string;
	Subtitle: string;
}
interface ISuburbTrends {
	Title: string;
	LocalityTrendsHouse: ILocalityTrendsHouse;
}

interface ILocalityTrendsHouse {
	LatestMedianPrice: string;
	LatestMedianLease: string;
}
interface LocalityTrendsUnit {
	LatestMedianPrice: string;
	LatestMedianLease: string;
	MedianSalePrice: IMedianSalePrice;
	MedianRentalPrice: IMedianRentalPrice;
}

interface IMedianSalePrice {
	Labels: string[];
	SortLabels: string[];
	Series: string[];
}

interface IMedianRentalPrice {
	Labels: string[];
	SortLabels: string[];
	Series: string[];
}

interface IHouseholds {
	ChildlessCouples: number;
	CouplesWithChildren: number;
	SingleParents: number;
	Other: number;
}

interface IOccupancy {
	OwnsOutright: number;
	Purchaser: number;
	Renting: number;
	Other: number;
	NotStated: number;
}

interface IAreaStatistics {
	OccupationTypeFirst: string;
	OccupationTypeSecond: string;
	OccupationTypeThird: string;
	OccupationTypeFourth: string;
	OccupationTypeFifth: string;
	PercentageUnder19: string;
	Percentage19To30: string;
	Percentage31To40: string;
	Percentage41To50: string;
	PercentageAbove50: string;
	Households: IHouseholds;
	Occupancy: IOccupancy;
}

interface IWagesAndMortgage {
	Labels: string[];
	SuburbValues: ISuburbValues;
}

interface ISuburbValues {
	Name: string;
	Values: number[];
}
