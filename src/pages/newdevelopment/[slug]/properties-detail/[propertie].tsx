import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import HeroSection from "@/shared/components/HeroSection";
import Button from "@/shared/components/buttons/Button";
import BreadCrumb from "@/module/components/newDevelopment/BreadCrumb";
import PropertiesList from "@/module/components/newDevelopment/PropertiesList";
import PropertiesFeatures from "@/module/components/newDevelopment/PropertiesFeatures";
import PropertiesKeyInfo from "@/module/components/newDevelopment/PropertiesKeyInfo";
import PropertyDescription from "@/module/components/newDevelopment/PropertyDescription";
import PropertiesLocation from "@/module/components/newDevelopment/PropertiesLocation";
import PropertiesInsights from "@/module/components/newDevelopment/PropertiesInsights";
import fbIcon from "../../../../../public/assets/common/facebookLogo.svg";
import tweeterIcon from "../../../../../public/assets/common/tweeterLogo.svg";
import mailOpeIcon from "../../../../../public/assets/common/mail-border-open.svg";
import mailCloseIcon from "../../../../../public/assets/common/mail-fill-close.svg";
import bedIcon from "../../../../../public/assets/newdevelopment/bed.svg";
import bathIcon from "../../../../../public/assets/newdevelopment/bath.svg";
import parkingCarIcon from "../../../../../public/assets/newdevelopment/parking.svg";
import mapIcon from "../../../../../public/assets/newdevelopment/location.svg";
import homeSizeIcon from "../../../../../public/assets/newdevelopment/homesize.svg";

const PropertiesDetailPage = (props: any) => {
	const heroIcon = [fbIcon, tweeterIcon, mailCloseIcon];
	const imageUrl = props.property.galleries[0].url;

	const propertiesDisplayLocation = {
		location: `${props.property.displaySuite.address.thoroughfareNumber} ${props.property.displaySuite.address.thoroughfare}, ${props.property.displaySuite.address.area}, ${props.property.displaySuite.address.shortenState} ${props.property.displaySuite.address.postalCode}`,
		classification: props.property.classification,
		size: props.property.totalProperties,
	};
	const propertiesLocation = {
		location: `${props.property.address.thoroughfareNumber} ${props.property.address.thoroughfare}, ${props.property.address.area}, ${props.property.address.state} ${props.property.address.postalCode}`,
		title: props.property.title,
	};
	const locationDetail = [
		{ title: "Development Location", location: propertiesLocation.location },
		{ title: "Display Location", location: propertiesDisplayLocation.location },
		{ title: "Display Open Hours", location: "Not Available" },
	];
	const features = [
		{ icon: bathIcon, value: props.property.bathrooms },
		{ icon: bedIcon, value: props.property.bedrooms },
		{ icon: parkingCarIcon, value: props.property.carSpaces },
	];
	const insights = [{ title: `Meet the Neighbours near ${props.property.address.area}` }, { title: `${props.property.address.area} Suburb Trends` }];
	const keyInfo = [
		{ icon: mapIcon, alt: "map icon", title: "Display Location", value: propertiesDisplayLocation.location },
		{ icon: mapIcon, alt: "map icon", title: "Property Type", value: propertiesDisplayLocation.classification },
		{ icon: homeSizeIcon, alt: "home size icon", title: "Size", value: propertiesDisplayLocation.size },
	];

	return (
		<>
			<section className="px-4">
				<BreadCrumb />
			</section>

			<section className="mb-8 lg:flex lg:justify-between gap-4">
				<HeroSection sectionClasses="lg:w-3/5 lg:px-0" classes="mb-0 lg:mb-0 w-full" title={props.property.title} subTitle={`${props.property.address.thoroughfareNumber} ${props.property.address.thoroughfare}, ${props.property.address.area}, ${props.property.address.state} ${props.property.address.postalCode}`}>
					<div className="lg:flex lg:justify-between lg:items-center">
						<Button buttonType="button" classes="py-2 px-4 mt-8">
							<div className="flex gap-2">
								<Image src={mailOpeIcon} alt="mail" />
								Enquire Now
							</div>
						</Button>
						<div className="flex gap-2 ml-1 mt-4">
							{heroIcon.map((icon, i) => (
								<div key={i} className="w-8 h-8 flex justify-center items-center rounded-full bg-light-gray ">
									<a href="#" className="w-4 h-4">
										<Image src={icon} alt="icon" />
									</a>
								</div>
							))}
						</div>
					</div>
				</HeroSection>
				<div className="px-4 mt-4 lg:w-2/5 lg:h-auto lg:mt-0 lg:p-0">
					<div className="w-full h-44 lg:h-full relative overflow-hidden rounded-lg">
						<Image src={imageUrl} layout="fill" objectFit="cover" alt="properties image" />
						<button className=" text-black bg-white rounded-lg text-sm font-medium py-2 px-3 absolute top-3 right-3">8 Photos</button>
					</div>
				</div>
			</section>

			<section className="lg:flex">
				<article className="w-full lg:w-8/12">
					<section className="px-4 ">
						<div className="mb-2">
							<p className="font-medium text-18px">About {props.property.title}</p>
							<h2 className="font-medium mt-4 mb-2 text-18px lg:text-2xl">{`${props.property.address.thoroughfareNumber} ${props.property.address.thoroughfare}, ${props.property.address.area}, ${props.property.address.state} ${props.property.address.postalCode}`}</h2>
						</div>
						<p className="mb-2">From $13,000</p>
						<div className="flex mb-2 lg:mb-4">
							<PropertiesFeatures features={features} classes={"mb-4"} />
						</div>
						<div className="lg:flex border-b pb-8">
							<PropertiesKeyInfo keyInfo={keyInfo} />
						</div>

						<section className="mb-8 mt-6 lgc:mt-8 border-b pb-8 relative">
							<PropertyDescription description={props.property.description.textProfile} />
						</section>

						<section className="border-b pb-8 mb-8">
							<h2 className="text-18px font-bold mb-6 lg:mb-4">Features And Amenities Of {props.property.title}</h2>
							<div className="w-full h-40 rounded-xl overflow-hidden lg:h-360px">
								<iframe className="h-full w-full" src="https://www.youtube.com/embed/FF08ohAgQl4?si=pc6xCbIyX_w8si5M" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
							</div>
						</section>
					</section>

					<section className="px-4">
						<h2 className="text-18px font-bold mb-4">Off-The-Plan Residences For Sale At {props.property.title}</h2>
						<PropertiesList properties={props.property.properties} />
					</section>

					<section className="px-4">
						<h2 className="text-at-lg font-bold">Location Of {props.property.title}</h2>
						<PropertiesLocation locationDetail={locationDetail} />
					</section>

					<section className="px-4 ">
						<h2 className="text-18px font-bold pt-8">Insights on {props.property.address.area}</h2>
						<PropertiesInsights insights={insights} />
					</section>

					<section className="px-4 pt-12 ">
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
					</section>
				</article>
				<aside className="lg:w-4/12 left-0"></aside>
			</section>
		</>
	);
};

export const getServerSideProps = async () => {
	const response1 = await fetch("http://localhost:8000/developmentDetail");
	const developmentDetail = await response1.json();
	const response2 = await fetch("http://localhost:8000/suburbProfile");
	const suburbProfile = await response2.json();
	return {
		props: {
			property: developmentDetail,
			suburb: suburbProfile,
		},
	};
};

export default PropertiesDetailPage;
