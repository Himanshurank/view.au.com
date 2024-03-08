import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import HeroSection from "@/shared/components/HeroSection";
import Button from "@/shared/components/buttons/Button";
import fbIcon from "../../../../../public/assets/common/facebookLogo.svg";
import tweeterIcon from "../../../../../public/assets/common/tweeterLogo.svg";
import mailOpeIcon from "../../../../../public/assets/common/mail-border-open.svg";
import mailCloseIcon from "../../../../../public/assets/common/mail-fill-close.svg";
import castleHill from "../../../../../public/assets/newdevelopment/Castle_Hill.jpg";
import BreadCrumb from "@/module/components/newDevelopment/BreadCrumb";
import PropertiesList from "@/module/components/newDevelopment/PropertiesList";
import PropertiesFeatures from "@/module/components/newDevelopment/PropertiesFeatures";
import PropertiesKeyInfo from "@/module/components/newDevelopment/PropertiesKeyInfo";
import PropertyDescription from "@/module/components/newDevelopment/PropertyDescription";
import PropertiesLocation from "@/module/components/newDevelopment/PropertiesLocation";
import PropertiesInsights from "@/module/components/newDevelopment/PropertiesInsights";

const PropertiesDetailPage = (props: any) => {
	const heroIcon = [fbIcon, tweeterIcon, mailCloseIcon];
	const imageUrl = props.galleries[0].url;
	const propertiesDisplayLocationProps = {
		location: `${props.displaySuite.address.thoroughfareNumber} ${props.displaySuite.address.thoroughfare}, ${props.displaySuite.address.area}, ${props.displaySuite.address.shortenState} ${props.displaySuite.address.postalCode}`,
		classification: props.classification,
		size: props.totalProperties,
	};
	const propertiesLocation = {
		location: `${props.address.thoroughfareNumber} ${props.address.thoroughfare}, ${props.address.area}, ${props.address.state} ${props.address.postalCode}`,
		title: props.title,
	};

	return (
		<>
			<section className="px-4">
				<BreadCrumb />
			</section>

			<section className="mb-8 lg:flex lg:justify-between lg:pr-4">
				<HeroSection sectionClasses="w-full" classes="mb-0 lg:mb-0 w-full" title={props.title} subTitle={`${props.address.thoroughfareNumber} ${props.address.thoroughfare}, ${props.address.area}, ${props.address.state} ${props.address.postalCode}`}>
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
							<p className="font-medium text-18px">About {props.title}</p>
							<h2 className="font-medium mt-4 mb-2 text-18px lg:text-2xl">{`${props.address.thoroughfareNumber} ${props.address.thoroughfare}, ${props.address.area}, ${props.address.state} ${props.address.postalCode}`}</h2>
						</div>
						<div className="flex mb-2 lg:mb-4">
							<PropertiesFeatures property={props} classes={"mb-4"} />
						</div>
						<div className="lg:flex border-b pb-8">
							<PropertiesKeyInfo props={propertiesDisplayLocationProps} />
						</div>

						<section className="mb-8 mt-6 lgc:mt-8 border-b pb-8 relative">
							<PropertyDescription description={props.description.textProfile} />
						</section>

						<section className="border-b pb-8 mb-8">
							<h3 className="text-18px font-bold mb-6 lg:mb-4">Features And Amenities Of {props.title}</h3>
							<div className="w-full h-40 rounded-xl overflow-hidden lg:h-360px">
								<iframe className="h-full w-full" src="https://www.youtube.com/embed/FF08ohAgQl4?si=pc6xCbIyX_w8si5M" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
							</div>
						</section>
					</section>

					<section className="px-4">
						<h2 className="text-18px font-bold mb-4">Off-The-Plan Residences For Sale At {props.title}</h2>
						<PropertiesList properties={props.properties} />
					</section>

					<section className="px-4 border-b">
						<h2 className="text-at-lg font-bold">Location Of {props.title}</h2>
						<PropertiesLocation location={propertiesLocation} displayLocation={propertiesDisplayLocationProps} />
					</section>

					<section className="px-4 border-b">
						<PropertiesInsights area={props.address.area} />
					</section>

					<section className="px-4 pt-12">
						<div className="flex rounded-lg border overflow-hidden">
							<div className="h-full w-[90px]">
								<Image src={castleHill} alt="castle Hill" />
							</div>
							<div className="p-4 w-full flex justify-between items-center">
								<div>
									<h4 className="text-sm font-bold">VIEW {props.address.area} Suburb Profile</h4>
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
	const response = await fetch("http://localhost:8000/developmentDetail");
	const resData = await response.json();
	return {
		props: resData,
	};
};

export default PropertiesDetailPage;
