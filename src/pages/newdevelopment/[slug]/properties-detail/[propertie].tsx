"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import HeroSection from "@/shared/components/HeroSection";
import BreadCrumb from "@/module/components/BreadCrumb";
import Button from "@/shared/components/buttons/Button";
import PropertiesList from "@/module/components/PropertiesList";
import fbIcon from "../../../../../public/assets/common/facebookLogo.svg";
import tweeterIcon from "../../../../../public/assets/common/tweeterLogo.svg";
import mailOpeIcon from "../../../../../public/assets/common/mail-border-open.svg";
import mailCloseIcon from "../../../../../public/assets/common/mail-fill-close.svg";
import bedIcon from "../../../../../public/assets/newdevelopment/bed.svg";
import bathIcon from "../../../../../public/assets/newdevelopment/bath.svg";
import parkingCarIcon from "../../../../../public/assets/newdevelopment/parking.svg";
import mapIcon from "../../../../../public/assets/newdevelopment/location.svg";
import homeSizeIcon from "../../../../../public/assets/newdevelopment/homesize.svg";
import mapImage from "../../../../../public/assets/newdevelopment/map.png";
import castleHill from "../../../../../public/assets/newdevelopment/Castle_Hill.jpg";

const PropertiesDetailPage = (props: any) => {
	const [isShowDescription, setIsShowDescription] = useState(false);
	const [height, setHeight] = useState<string>("");
	const scrollHeightRef = useRef<any>();

	const heroIcon = [fbIcon, tweeterIcon, mailCloseIcon];
	const imageUrl = props.galleries[0].url;

	const onShowDescription = () => {
		setIsShowDescription(!isShowDescription);
	};

	useEffect(() => {
		let newHeight: string = "";
		if (scrollHeightRef.current) {
			newHeight = isShowDescription ? `${scrollHeightRef.current.scrollHeight}px` : "0px";
		}
		setHeight(newHeight);
	}, [isShowDescription]);

	return (
		<>
			<section className="px-4">
				<BreadCrumb />
			</section>

			<section className="mb-8 lg:flex lg:justify-between">
				<HeroSection classes="mb-0 lg:mb-0" title={props.title} subTitle={`${props.address.thoroughfareNumber} ${props.address.thoroughfare}, ${props.address.area}, ${props.address.state} ${props.address.postalCode}`}>
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
							<div className="flex items-center gap-2 pr-2 border-r">
								<Image src={bedIcon} alt="Bed icon" />
								<p>{props.bedrooms}</p>
							</div>
							<div className="flex items-center gap-2 px-2 border-r">
								<Image src={bathIcon} alt="Bath icon" />
								<p>{props.bathrooms}</p>
							</div>
							<div className="flex items-center gap-2 pl-2">
								<Image src={parkingCarIcon} alt="parking icon" />
								<p>{props.carSpaces}</p>
							</div>
						</div>
						<div className="lg:flex border-b pb-8">
							<div className="mb-2 lg:border-r lg:pr-6">
								<div className="flex gap-2 mb-1 items-center">
									<Image src={mapIcon} alt="map icon" />
									<p className="text-sm font-normal text-light-black">Display Location</p>
								</div>
								<p>{`${props.displaySuite.address.thoroughfareNumber} ${props.displaySuite.address.thoroughfare}, ${props.displaySuite.address.area}, ${props.displaySuite.address.shortenState} ${props.displaySuite.address.postalCode}`}</p>
							</div>
							<div className="mb-2 lg:border-r lg:px-6">
								<div className="flex gap-2 mb-1 items-center">
									<Image src={mapIcon} alt="map icon" />
									<p className="text-sm font-normal text-light-black">Property Type</p>
								</div>
								<p>{props.classification}</p>
							</div>
							<div className="mb-2 lg:pl-6">
								<div className="flex gap-2 mb-1 items-center">
									<Image src={homeSizeIcon} alt="home size icon" />
									<p className="text-sm font-normal text-light-black">Size</p>
								</div>
								<p>{props.totalProperties}</p>
							</div>
						</div>

						<section className="mb-8 mt-6 lgc:mt-8 border-b pb-8 relative">
							<div ref={scrollHeightRef} className="overflow-hidden transition-all duration-500 ease-in-out " style={{ height: isShowDescription ? `${height}` : "200px" }}>
								<div className="property-description" dangerouslySetInnerHTML={{ __html: props.description.textProfile }} />
							</div>
							<button className={`flex items-center gap-2 text-primary-blue mt-2 ${!isShowDescription ? "property-description-read-more" : ""}`} onClick={onShowDescription}>
								Read Less{" "}
								<span className={isShowDescription ? "rotate-180" : ""}>
									<IoIosArrowDown />
								</span>
							</button>
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
						<div className="h-200px mt-8 mb-4 rounded-xl overflow-hidden relative ">
							<Image src={mapImage} objectFit="cover" layout="responsive" alt="map image" />
						</div>
						<div className="mb-4">
							<h6 className="text-sm font-bold">Development Location</h6>
							<p className="text-xs font-normal">{`${props.address.thoroughfareNumber} ${props.address.thoroughfare}, ${props.address.area}, ${props.address.state} ${props.address.postalCode}`}</p>
						</div>
						<div className="mb-4">
							<h6 className="text-sm font-bold">Display Location</h6>
							<p className="text-xs font-normal">{`${props.displaySuite.address.thoroughfareNumber} ${props.displaySuite.address.thoroughfare}, ${props.displaySuite.address.area}, ${props.displaySuite.address.shortenState} ${props.displaySuite.address.postalCode}`}</p>
						</div>
						<div className="mb-4">
							<h6 className="text-sm font-bold">Display Open Hours</h6>
							<p className="text-xs font-normal">Not Available</p>
						</div>
						<Button buttonType="button" classes="w-full py-2 mb-4 lg:mb-8">
							Request a private appointment
						</Button>
					</section>

					<section className="px-4 border-b">
						<h3 className="text-18px font-bold pt-8">Insights on {props.address.area}</h3>
						<ul className="flex flex-col gap-3 my-10 w-full">
							<li className="p-4 border rounded-lg cursor-pointer flex justify-between items-center shadow-sm">
								<h3 className="text-base font-bold">Meet the Neighbours near {props.address.area}</h3>
								<IoIosArrowDown />
							</li>
							<li className="p-4 border rounded-lg cursor-pointer flex justify-between items-center shadow-sm">
								<h3 className="text-base font-bold">{props.address.area} Suburb Trends</h3>
								<IoIosArrowDown />
							</li>
						</ul>
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
