export interface IDevelopmentDetail {
	title: string;
	status: string;
	projectStatus: string | null;
	featuredWeight: number;
	discr: string;
	updatedAt: string;
	totalProperties: number;
	classification: string;
	showcaseHeaders: IShowcaseHeaders;
	projectTypes: string;
	priceSearch: string;
	priceDisplay: number;
	bedrooms: string;
	bathrooms: string;
	carSpaces: string;
	studyroom: string;
	private_pool: string;
	address: IAddress;
	properties: IProperties[];
	image: string;
	files: IFile;
	galleries: IGallery[];
	amenities: never[];
	slug: ISlug;
	articles: IArticles[];
	displaySuite: IDisplaySuite;
	description: IDescription;
	details: IDetails;
	notes: INotes[];
	locationMapImgURL: string;
}

export interface ISuburbProfile {
	id: number;
	suburbName: string;
	postcode: string;
	state: string;
	description: string | null;
	fileName: string;
}

export interface IBreadcrumbs {
	length?: number;
	breadcrumb: IBreadcrumbItem[];
}

export interface IBreadcrumbItem {
	"@type"?: string;
	item?: string;
	urlPath?: string;
	position?: number;
	name?: string;
	displayName?: string;
}

interface INotes {
	content: string;
	createdAt: string;
	user: IUser;
}

interface IUser {
	id: string;
	email: string;
	username: string;
	firstName: string;
	lastName: string;
	createdAt: string;
	updatedAt: string;
}

interface IDetails {
	items: number;
	levels: number | null;
	completionDate: string;
	bedroomOptions: string[] | null;
	stampDuty: string | null;
	corporateFees: string | null;
	phone: string;
	email: string[];
	enquiryConfig: IEnquiryConfig;
}

interface IEnquiryConfig {
	show_related: string;
	video_enquiry: string;
	append_subject: string;
	general_enquiry: string;
	all_fields_required: string;
	hide_optional_fields: string;
	display_brochure_thumbnail: string;
}

interface IDescription {
	textListing: string;
	textProfile: string;
	textTransactional: string | null;
}

interface IDisplaySuite {
	address: IDisplaySuiteAddress;
	inspection: never[];
}

interface IDisplaySuiteAddress {
	id: string;
	latitude: string;
	longitude: string;
	country: string;
	state: string;
	shortenState: string;
	area: string;
	thoroughfare: string;
	thoroughfareNumber: string;
	postalCode: string;
	region: string | null;
	buildingName: string | null;
	slug: string;
	updatedAt: string;
}

interface IArticles {
	id: string;
	title: string;
	shortTitle: string | null;
	listingText: string;
	articleText: string;
	status: string;
	enableAudio: boolean;
	readTime: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	publishedAtDatetime: string;
	category: ICategory;
	slug: IArticlesSlug;
	image: IGallery[];
	files: IArticlesFiles;
}

interface IArticlesFiles {
	image: IArticlesImage[];
	hero: IArticlesImage[];
	featuredThumbnail: IArticlesImage[];
	thumbnail: IArticlesImage[];
}

interface IArticlesImage {
	id: string;
	type: string;
	location: string;
	name: string;
	textAlternative: string | null;
	size: number;
	url: string;
	position: number;
	createdAt: string;
	updatedAt: string;
}

interface IArticlesSlug {
	id: string;
	name: string;
	pageTitle: string | null;
	createdAt: string;
	updatedAt: string;
}

interface ICategory {
	id: string;
	name: string;
	slug: string;
}

interface ISlug {
	id: string;
	name: string;
	pageTitle: string | null;
	createdAt: string;
	updatedAt: string;
}

interface IGallery {
	url: string;
	altTag: string;
}

interface IFile {
	featuredThumbnail: IFeaturedThumbnail[];
	video: IFeaturedThumbnail[];
	thumbnail: IFeaturedThumbnail[];
	brochureThumbnail: IFeaturedThumbnail[];
}

interface IFeaturedThumbnail {
	id: string;
	type: string;
	location: string;
	name: string;
	textAlternative: string | null;
	size: number;
	url: string;
	position: number;
	createdAt: string;
	updatedAt: string;
}

interface IProperties {
	id: string;
	title: string;
	priceDisplay: string;
	price: string;
	priceFrom: string;
	priceTo: string;
	bedrooms: string;
	bathrooms: string;
	carSpaces: string;
	livingAreas: string | null;
	discr: string;
	frontage: number | null;
	depth: number | null;
	levels: number | null;
	aspect: string | null;
	areaTotal: number | null;
	areaExternal: number | null;
	areaInternal: number | null;
	createdAt: string;
	useFloorPlan: number;
	isHidden: number;
	files: IFiles;
	studyroom: string;
	private_pool: string;
	enquire_only: number;
	slug: string;
	unit_number: string;
	isUnitNumberHidden: number;
	description: IDescription;
}

interface IDescription {
	textListing: string;
	textProfile: string;
	textTransactional: string | null;
}

interface IFiles {
	listType: IListType[];
}

interface IListType {
	id: string;
	type: string;
	location: string;
	name: string;
	textAlternative: string;
	size: number;
	url: string;
	position: number;
	createdAt: string;
	updatedAt: string;
}

interface IAddress {
	id: string;
	latitude: string;
	longitude: string;
	country: string;
	state: string;
	shortenState: string;
	area: string;
	thoroughfare: string;
	thoroughfareNumber: string;
	postalCode: string;
	region: string | null;
	buildingName: string | null;
	slug: string;
	updatedAt: string;
}

interface IShowcaseHeaders {
	faq: null;
	about: null;
	articles: null;
	location: null;
	childListing: null;
	suburbInsights: null;
	supplierInsights: null;
	featuresAmenities: null;
}
