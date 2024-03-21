import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import HeroSection from "@/shared/components/HeroSection";
import Button from "@/shared/components/buttons/Button";
import BreadCrumb from "@/shared/components/BreadCrumb";
import PropertiesList from "@/module/newDevelopment/components/PropertiesList";
import Accommodation from "@/shared/components/Accommodation";
import PropertiesDetails from "@/module/newDevelopment/components/PropertiesDetails";
import DropDown from "@/shared/components/DropDown";
import PropertiesLocation from "@/module/newDevelopment/components/PropertiesLocation";
import PropertiesInsights from "@/module/newDevelopment/components/PropertiesInsights";
import fbIcon from "../../../../../public/assets/common/facebookLogo.svg";
import tweeterIcon from "../../../../../public/assets/common/tweeterLogo.svg";
import mailOpeIcon from "../../../../../public/assets/common/mail-border-open.svg";
import mailCloseIcon from "../../../../../public/assets/common/mail-fill-close.svg";
import mapIcon from "../../../../../public/assets/newdevelopment/location.svg";
import homeSizeIcon from "../../../../../public/assets/newdevelopment/homesize.svg";
import mapImage from "../../../../../public/assets/map.png";

export const getServerSideProps = async (context: any) => {
	const params = context.params;
	if (params.slag !== "nsw-castle-hill-2154" && params.properties !== "grand-reve") {
		return {
			redirect: {
				destination: "/mobile",
				permanent: false,
			},
		};
	}
	const response = await fetch("http://localhost:8000/props");
	const props = await response.json();

	return {
		props: {
			property: props.developmentDetail,
			suburb: props.suburbProfile,
			breadcrumb: props.breadcrumb,
		},
	};
};

const PropertiesDetailPage = (props: any) => {
	const SOCIALICON = [fbIcon, tweeterIcon, mailCloseIcon];

	const PROPERTY_DISPLAY_LOCATION = {
		location: `${props.property.displaySuite.address.thoroughfareNumber} ${props.property.displaySuite.address.thoroughfare}, ${props.property.displaySuite.address.area}, ${props.property.displaySuite.address.shortenState} ${props.property.displaySuite.address.postalCode}`,
		classification: props.property.classification,
		size: props.property.totalProperties,
	};
	const PROPERTY_DEVELOPMENT_LOCATION = {
		location: `${props.property.address.thoroughfareNumber} ${props.property.address.thoroughfare}, ${props.property.address.area}, ${props.property.address.state} ${props.property.address.postalCode}`,
		title: props.property.title,
	};
	const LOCATION_DETAILS = [
		{ title: "Development Location", location: PROPERTY_DEVELOPMENT_LOCATION.location },
		{ title: "Display Location", location: PROPERTY_DISPLAY_LOCATION.location },
		{ title: "Display Open Hours", location: "Not Available" },
	];
	const PROPERTY_FEATURES = {
		bathrooms: props.property.bathrooms,
		bedrooms: props.property.bedrooms,
		carSpaces: props.property.carSpaces,
	};
	const SUBURB_INSIGHT = [{ title: `Meet the Neighbours near ${props.property.address.area}` }, { title: `${props.property.address.area} Suburb Trends` }];
	const KEY_INFO = [
		{ icon: mapIcon, alt: "map icon", title: "Display Location", value: PROPERTY_DISPLAY_LOCATION.location },
		{ icon: mapIcon, alt: "map icon", title: "Property Type", value: PROPERTY_DISPLAY_LOCATION.classification },
		{ icon: homeSizeIcon, alt: "home size icon", title: "Size", value: PROPERTY_DISPLAY_LOCATION.size },
	];

	const renderHeroSection = () => {
		return (
			<div className="lg:flex lg:justify-between lg:items-center">
				<Button buttonType="button" className="py-2 px-4 mt-8">
					<div className="flex gap-2">
						<Image src={mailOpeIcon} alt="mail" />
						Enquire Now
					</div>
				</Button>
				<div className="flex gap-2 ml-1 mt-4">
					{SOCIALICON.map((icon, i) => (
						<div key={i} className="w-8 h-8 flex justify-center items-center rounded-full bg-light-gray ">
							<a href="#" className="w-4 h-4">
								<Image src={icon} alt="icon" />
							</a>
						</div>
					))}
				</div>
			</div>
		);
	};

	const renderDescription = () => {
		return (
			<>
				<p className="font-medium text-18px">About {props.property.title}</p>
				<h2 className="font-medium mt-4 mb-2 text-18px lg:text-2xl">{`${PROPERTY_DEVELOPMENT_LOCATION.location}`}</h2>
				<p className="mb-2">From $13,000</p>

				<Accommodation features={PROPERTY_FEATURES} className="mb-2 text-lg lg:mb-4 -ml-2" />

				<div className="lg:flex border-b pb-8">
					{KEY_INFO.map((info, i) => (
						<PropertiesDetails key={i} info={info} className={`${i === 0 && "lg:pl-0"} ${KEY_INFO.length - 1 !== i && "lg:border-r"}`} />
					))}
				</div>
				<DropDown className="mb-8 mt-6 lg:mt-8 pb-8" description={props.property.description.textProfile} globalStyle={true} defaultHeight={"200px"} shadow={true} />
				<div className="border-b pb-8 mb-8">
					<h2 className="text-18px font-bold mb-6 lg:mb-4">Features And Amenities Of {props.property.title}</h2>
					<div className="w-full h-40 rounded-xl overflow-hidden lg:h-360px">
						<iframe className="h-full w-full" src="https://www.youtube.com/embed/FF08ohAgQl4?si=pc6xCbIyX_w8si5M" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
					</div>
				</div>
			</>
		);
	};

	const renderProperties = () => {
		return (
			<>
				<h2 className="text-18px font-bold mb-4">Off-The-Plan Residences For Sale At {props.title}</h2>
				<ul className="border-b border-at-light-500 pb-8 my-8 w-full">
					{props.property.properties.map((property: any) => (
						<PropertiesList key={property.id} property={property} />
					))}
				</ul>
			</>
		);
	};

	const renderLocationDetail = () => {
		return (
			<>
				<h2 className="text-at-lg font-bold">Location Of {props.property.title}</h2>
				<div className="border-b">
					<div className="h-200px mt-8 mb-4 rounded-xl overflow-hidden relative ">
						<Image src={mapImage} objectFit="cover" layout="responsive" alt="map image" />
					</div>
					{LOCATION_DETAILS.map((location) => (
						<PropertiesLocation key={location.title} locationDetail={location} />
					))}
					<Button buttonType="button" className="w-full py-2 mb-4 lg:mb-8">
						Request a private appointment
					</Button>
				</div>
			</>
		);
	};

	return (
		<>
			<section className="px-4 lg:px-0 mt-3">
				<BreadCrumb breadCrumb={props.breadcrumb} />
			</section>

			<section className="mb-8 lg:flex lg:justify-between gap-4 mt-6">
				<HeroSection className="px-4 mb-0 lg:mb-0 w-full lg:w-3/5" title={props.property.title} subTitle={`${props.property.address.thoroughfareNumber} ${props.property.address.thoroughfare}, ${props.property.address.area}, ${props.property.address.state} ${props.property.address.postalCode}`}>
					{renderHeroSection()}
				</HeroSection>
				<div className="lg:w-2/5">
					<div className="px-4 mt-4 w-full h-44 lg:h-full relative overflow-hidden rounded-lg lg:mt-0 lg:p-0">
						<Image src={props.property.galleries[0].url} layout="fill" objectFit="cover" alt="properties image" />
						<button className=" text-black bg-white rounded-lg text-sm font-medium py-2 px-3 absolute top-3 right-3">8 Photos</button>
					</div>
				</div>
			</section>

			<section className="lg:flex">
				<article className="w-full lg:w-8/12">
					{renderDescription()}

					{renderProperties()}

					{renderLocationDetail()}

					<PropertiesInsights insights={SUBURB_INSIGHT} area={props.property.address.area} />

					<div className="pt-12">
						<div className="flex rounded-lg border overflow-hidden cursor-pointer">
							<div className="h-99px w-[90px] lg:w-[190px] relative">
								<Image src={`https://resi.uatz.view.com.au/viewstatic/images/listing/200-min/${props.suburb.fileName}`} objectFit="cover" layout="fill" alt="castle Hill" />
							</div>
							<div className="p-4 flex flex-1 items-center">
								<div className="w-full">
									<h4 className="text-sm font-bold">VIEW {props.property.address.area} Suburb Profile</h4>
									<p className="text-sm font-normal mt-1">Find out latest median prices and market data</p>
								</div>
								<IoIosArrowForward />
							</div>
						</div>
					</div>
				</article>
				<aside className="lg:w-4/12 left-0"></aside>
			</section>
		</>
	);
};

export default PropertiesDetailPage;
