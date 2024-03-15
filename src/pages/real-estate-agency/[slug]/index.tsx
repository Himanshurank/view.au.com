import Image from "next/image";
import React from "react";
import webIcon from "../../../../public/assets/common/web.svg";
import fbIcon from "../../../../public/assets/common/facebookLogo.svg";
import instaLogo from "../../../../public/assets/common/instagramLogo.svg";
import mailOpeIcon from "../../../../public/assets/common/mail-border-open.svg";
import linkedinIcon from "../../../../public/assets/common/linkdinLogo.svg";
import callIcon from "../../../../public/assets/common/callIcon.svg";
import bathIcon from "../../../../public/assets/newdevelopment/bath.svg";
import bedIcon from "../../../../public/assets/newdevelopment/bed.svg";
import parkingCarIcon from "../../../../public/assets/newdevelopment/parking.svg";
import mapImg from "../../../../public/assets/map.png";
import HeroSection from "@/shared/components/HeroSection";
import Button from "@/shared/components/buttons/Button";
import BreadCrumb from "@/shared/components/BreadCrumb";
import AgencyPerformance from "@/module/agency/components/AgencyPerformance";
import DescriptionDropDown from "@/shared/components/DescriptionDropDown";

const AgencyPage = (props: any) => {
	const SOCIALICON = [fbIcon, instaLogo, linkedinIcon];

	const SALES_PERFORMANCE = [
		{
			value: `$${Math.round(props.data.averageSoldPrice)}`.replace(/(.{4})/, "$1,"),
			name: "Median sold price",
		},
		{
			value: props.data.averageDaysOnMarket,
			name: "Median days advertised",
		},
		{
			value: props.data.numberOfSoldListings,
			name: "Properties sold",
		},
		{
			value: props.data.numberOfBuyListings,
			name: "Properties for sale",
		},
	];
	const RENT_PERFORMANCE = [
		{
			value: `$${Math.round(props.data.averageLeasedPrice)}pw`,
			name: "Median leased price",
		},
		{
			value: props.data.averageLeasedDaysOnMarket,
			name: "Median days advertised",
		},
		{
			value: props.data.numberOfLeasedListings,
			name: "Properties leased",
		},
		{
			value: props.data.numberOfRentListings,
			name: "Properties for rent",
		},
	];

	return (
		<>
			<section className="px-4 lg:px-0 lg:mb-4">
				<BreadCrumb breadCrumb={props.data.breadcrumbs} />
			</section>

			<section className="px-4 lg:px-0 mb-8 lg:flex lg:justify-between gap-4">
				<HeroSection title={props.data.name} classes="md:pt-16 pt-12 mb-4 relative" subTitle={props.data.address}>
					<div className="absolute w-full -ml-6 lg:-ml-16 top-0 flex items-center justify-center bg-[#010037] rounded-t-xl py-2">
						<div className="h-6 w-28 relative">
							<Image src="https://resi.uatz.view.com.au/viewstatic/images/listing/120-w/821e197e770543fc96928b0d8d9aa349.jpg" layout="fill" alt="agency logo" />
						</div>
					</div>
					<span className="flex mt-4 gap-1">
						<Image src={webIcon} alt="web icon" />
						<a className="text-primary-blue text-sm underline" href="#">
							http://www.bigginscott.com.au
						</a>
					</span>
					<div className="lg:flex lg:justify-between lg:items-center">
						<div className="space-x-3 mt-6">
							<Button buttonType="button" classes="py-2 px-4">
								<div className="flex gap-2 font-medium text-sm">
									<Image src={mailOpeIcon} alt="mail" />
									Email us
								</div>
							</Button>
							<Button buttonType="button" classes="py-2 px-4 bg-white border hover:bg-light-gray hover:border-b-gray">
								<div className="flex gap-2 text-black text-sm font-medium">
									<Image src={callIcon} alt="call" />
									Call us
								</div>
							</Button>
						</div>
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
				</HeroSection>
				<div className="lg:w-2/5 lg:h-auto lg:mt-0 lg:p-0">
					<div className="w-full h-58 lg:h-full relative overflow-hidden rounded-lg ">
						<Image src={mapImg} layout="fill" objectFit="cover" alt="properties image" />
					</div>
				</div>
			</section>

			<section className="px-4 lg:px-0 border-b pb-8">
				<h4 className="text-18px font-bold">Market Performance</h4>
				<p className="text-sm font-normal mt-3 md:text-base">{`In the last 12 months ${props.data.name} has sold ${props.data.numberOfSoldListings} properties and leased ${props.data.numberOfLeasedListings} properties on resi.uatz.view.com.au`}</p>
				<AgencyPerformance title="Sales Performance" performance={SALES_PERFORMANCE} />
				<AgencyPerformance title="Rent Performance" performance={RENT_PERFORMANCE} />

				<div className="flex flex-1 justify-evenly items-center h-[88px] bg-light-gray rounded-xl mt-8">
					<div className="w-1/3 h-full flex flex-col gap-0.5 justify-center items-center relative">
						<p className="text-20px font-bold">{props.data.numberOfSoldListings}</p>
						<p className="text-sm font-normal">Sold</p>
						<span className="h-1 w-16 bg-primary-blue rounded-t-full absolute bottom-0"></span>
					</div>
					<span className="h-14 w-1px bg-slate-200"></span>
					<div className="w-1/3 h-full flex flex-col gap-0.5 justify-center items-center relative">
						<p className="text-20px font-bold">{props.data.numberOfBuyListings}</p>
						<p className="text-sm font-normal">For Sale</p>
						<span className="h-1 w-16 bg-primary-blue rounded-t-full absolute bottom-0"></span>
					</div>
					<span className="h-14 w-1px bg-slate-200"></span>
					<div className="w-1/3 h-full flex flex-col gap-0.5 justify-center items-center relative">
						<p className="text-20px font-bold">{props.data.numberOfRentListings}</p>
						<p className="text-sm font-normal">For Rent</p>
						<span className="h-1 w-16 bg-primary-blue rounded-t-full absolute bottom-0"></span>
					</div>
				</div>

				<h4 className="text-at-lg font-bold mt-8 mb-6">Sold listing in the past 12 months</h4>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
					{props.data.listings.data.map((property: any) => (
						<div key={property.id} className="border rounded-xl overflow-hidden shadow-sm">
							<div className="h-48 min-h-192 rounded-t-at-regular overflow-hidden relative">
								<Image layout="fill" objectFit="cover" src={`https://resi.uatz.view.com.au/viewstatic/images/listing/1-bedroom-apartment-in-east-melbourne-vic-3002/400-w/${property.heroImageUrl}`} alt={`${property.unitNumber}/${property.streetNumber} ${property.streetName}, ${property.suburbName}`} />
							</div>
							<div className="p-4">
								<p className="text-base font-bold mr-2 mb-1.5">{property.priceFrom ? `$${property.priceFrom}` : "Contact Agent"}</p>
								<p className="text-sm font-normal text-at-dark-700 mb-1.5">{`${property.unitNumber}/${property.streetNumber} ${property.streetName}, ${property.suburbName.charAt(0).toUpperCase() + property.suburbName.slice(1).toLowerCase()}`}</p>
								<div className="flex text-light-black  text-sm items-center">
									{property.bedrooms && (
										<div className={`flex gap-2 justify-between items-center pr-2 ${property.bathrooms && "border-r"} `}>
											<Image src={bedIcon} alt="Bed icon" />
											<p>{property.bedrooms}</p>
										</div>
									)}
									{property.bathrooms && (
										<div className={`flex gap-2 justify-between items-center px-2 ${property.carparks && "border-r"}`}>
											<Image src={bathIcon} alt="Bath icon" />
											<p>{property.bathrooms}</p>
										</div>
									)}
									{property.carparks !== 0 && (
										<div className={`flex gap-2 justify-between items-center px-2`}>
											<Image src={parkingCarIcon} alt="parking icon" />
											<p>{property.carparks}</p>
										</div>
									)}
									<p className="pl-2">{property.discr}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="px-4 lg:px-0">
				<h4 className="text-18px font-bold mt-8">About Our agency</h4>
				<DescriptionDropDown classes="mb-8 mt-4 pb-8" description={props.data.description} globalStyle={false} />
			</section>

			<section className="px-4 lg:px-0">
				<h4 className="text-18px font-bold">{`Our People (${props.data.agents.length})`}</h4>
				<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
					{props.data.agents.map((agent: any) => (
						<div key={agent.id} className="p-6 pt-8 shadow-sm border rounded-lg flex flex-col items-center">
							{agent.agentPhotoFileName ? (
								<div className="w-24 h-24 relative rounded-full overflow-hidden">
									<Image src={`https://resi.uatz.view.com.au/viewstatic/images/listing/120-w/${agent.agentPhotoFileName}`} objectFit="contain" layout="fill" alt="agent photo" />
								</div>
							) : (
								<div className="w-24 h-24 bg-light-gray rounded-full flex justify-center items-center">
									<span className="text-44px font-medium text-primary-black">{agent.firstName.charAt(0)}</span>
								</div>
							)}
							<p className="text-sm font-bold pt-2">
								{agent.firstName} {agent.lastName}
							</p>
							<p className="text-center text-xs font-normal text-light-black pt-2">{agent.position}</p>
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export default AgencyPage;

export const getServerSideProps = async () => {
	const response = await fetch("http://localhost:9000/props");
	const props = await response.json();
	return {
		props: props,
	};
};
