import { IBreadcrumbItem } from "../newDevelopment/newDevelopment.interface";

export interface ISuburbProps {
	suburbDetail: ISuburbDetailProps;
}

export interface ISaleMethod {
	sale: boolean;
	rent: boolean;
}

export interface IHouseholdStatistic {
	title: string;
	value: number;
	color: string;
}

export interface ISuburb {
	image: string;
	title: string;
	subTitle: string;
	description: string;
	bgColor: string;
	textColor: string;
}

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
	Disclaimers: IDisclaimers;
	suburbId: number;
	profile: IProfile;
	streets: IStreet[];
	listings: IListings;
	agencies: IAgency[];
	breadCrumbs: IBreadcrumbItem[];
	city: string;
	region: string;
	profileType: string;
	isBot: boolean;
	locationSlug: string;
	isMobile: boolean;
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

interface IListings {
	sale: ISuburbListing[];
	lease: ISuburbListing[];
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
export interface IStreet {
	streetSlug: string;
	streetName: string;
	numberOfProperties: number;
	_id: string;
}

interface IProfile {
	suburbId: number;
	images: ImageData[];
	metaTitle: string;
	description: string;
	headline: string;
	metaDescription: string;
}

interface ImageData {
	sequence: number;
	fileName: string;
}
interface IDisclaimers {
	clCopyright_au: IDisclaimer;
	clData_anz: IDisclaimer;
	abs_au: IDisclaimer;
	state_au: IDisclaimer;
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
	catchment: any; // Assuming catchment can be of any type
	link: string;
}

interface IWages {
	Labels: string[];
	SuburbValues: ISuburbValues;
}

interface ISuburbValues {
	Name: string;
	Values: number[];
}
interface ISuburbTrends {
	title: string;
	LocalityTrendsHouse: ILocalityTrends;
	LocalityTrendsUnit: ILocalityTrends;
}

interface ILocalityTrends {
	LatestMedianPrice: string;
	LatestMedianLease: string;
	MedianSalePrice: IMedianPrice;
	MedianRentalPrice: IMedianPrice;
}

interface IMedianPrice {
	Labels: string[];
	SortLabels: string[];
	Series: string[];
}

interface IPocketInsights {
	Suburb: string;
	DisplayNoWagesText: boolean;
	AreaStatistics: IAreaStatistics;
	Wages: IWages;
	MortgageRepayments: IWages;
	Title: string;
	Subtitle: string;
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
	Households: IHouseholdStatistics;
	Occupancy: IOccupancyStatistics;
}
interface IHouseholdStatistics {
	ChildlessCouples: number;
	CoupleswithChildren: number;
	SingleParents: number;
	Other: number;
}
interface IOccupancyStatistics {
	"Owns Outright": number;
	Purchaser: number;
	Renting: number;
	Other: number;
	"Not Stated": number;
}
