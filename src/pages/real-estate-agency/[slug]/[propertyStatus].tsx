import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import webIcon from "../../../../public/assets/common/web.svg";
import fbIcon from "../../../../public/assets/common/facebookLogo.svg";
import instaLogo from "../../../../public/assets/common/instagramLogo.svg";
import mailOpeIcon from "../../../../public/assets/common/mail-border-open.svg";
import linkedinIcon from "../../../../public/assets/common/linkdinLogo.svg";
import callIcon from "../../../../public/assets/common/callIcon.svg";
import mapImg from "../../../../public/assets/map.png";
import HeroSection from "@/shared/components/HeroSection";
import Button from "@/shared/components/buttons/Button";
import BreadCrumb from "@/shared/components/BreadCrumb";
import AgencyPerformance from "@/module/agency/components/AgencyPerformance";
import DropDown from "@/shared/components/DropDown";
import PropertyCard from "@/shared/components/PropertyCard";
import { IAgencyProps } from "@/module/agency/agency.interface";
import Head from "next/head";
import { META_TAGS } from "@/module/agency/agency.constants";

export const getServerSideProps = async (context: any) => {
	const { slag, propertyStatus } = context.params;

	if (slag !== "biggin-scott-richmond-4326" && propertyStatus !== "sales" && propertyStatus !== "rent") {
		return {
			redirect: {
				destination: "/mobile",
				permanent: false,
			},
		};
	}
	const response = await fetch("http://localhost:9000");
	const props = await response.json();
	return {
		props: props,
	};
};

const AgencyPropertiesPage = (props: IAgencyProps) => {
	const listingSectionRef = useRef<HTMLDivElement | any>();
	const router = useRouter();
	const saleMethod: any = router.query.propertyStatus;

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
	const PROPERTY_NAVIGATION = [
		{ numberOfListing: props.data.numberOfSoldListings, title: "Sold", href: "http://localhost:3000/real-estate-agency/biggin-scott-richmond-4326" },
		{ numberOfListing: props.data.numberOfBuyListings, title: "For Sale", href: "http://localhost:3000/real-estate-agency/biggin-scott-richmond-4326/sales", method: saleMethod },
		{ numberOfListing: props.data.numberOfRentListings, title: "For Rent", href: "http://localhost:3000/real-estate-agency/biggin-scott-richmond-4326/rent", method: saleMethod },
	];

	useEffect(() => {
		let elm = listingSectionRef.current;
		if (elm) {
			elm.scrollIntoView({ behavior: "smooth" });
		}
	}, []);

	const renderHeroSection = () => {
		return (
			<>
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
						<Button buttonType="button" className="py-2 px-4">
							<div className="flex gap-2 font-medium text-sm">
								<Image src={mailOpeIcon} alt="mail" />
								Email us
							</div>
						</Button>
						<Button buttonType="button" className="py-2 px-4 bg-white border hover:bg-light-gray hover:border-b-gray">
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
			</>
		);
	};

	const renderMarketPerformance = () => {
		return (
			<>
				<h4 className="text-18px font-bold">Market Performance</h4>
				<p className="text-sm font-normal mt-3 md:text-base">{`In the last 12 months ${props.data.name} has sold ${props.data.numberOfSoldListings} properties and leased ${props.data.numberOfLeasedListings} properties on resi.uatz.view.com.au`}</p>
				<div className="px-6 py-4 mt-6 w-full flex flex-col gap-2 bg-light-gray rounded-lg">
					<p className="text-sm font-bold">Sales Performance</p>
					<div className="w-full flex flex-col lg:flex-row">
						{SALES_PERFORMANCE.map((performance, i) => (
							<AgencyPerformance key={i} performance={performance} className={`${SALES_PERFORMANCE.length - 1 !== i && "border-b lg:border-b-0 lg:border-r"} ${i !== 0 && "lg:px-4"}`} valueClassName={`${i !== 0 && "mt-4 lg:mt-0"}`} />
						))}
					</div>
				</div>
				<div className="px-6 py-4 mt-6 w-full flex flex-col gap-2 bg-light-gray rounded-lg">
					<p className="text-sm font-bold">Rent Performance</p>
					<div className="w-full flex flex-col lg:flex-row">
						{RENT_PERFORMANCE.map((performance, i) => (
							<AgencyPerformance key={i} performance={performance} className={`${RENT_PERFORMANCE.length - 1 !== i && "border-b lg:border-b-0 lg:border-r"} ${i !== 0 && "lg:px-4"}`} valueClassName={`${i !== 0 && "mt-4 lg:mt-0"}`} />
						))}
					</div>
				</div>
			</>
		);
	};

	const renderProperties = () => {
		if (saleMethod === "sales") {
			return props.data.listings.sales.map((property: any) => <PropertyCard key={property.id} property={property} />);
		} else {
			return props.data.listings.rent.map((property: any) => <PropertyCard key={property.id} property={property} />);
		}
	};

	const renderAgent = () => {
		return (
			<section>
				<h4 className="text-18px font-bold">{`Our People (${props.data.agents.length})`}</h4>
				<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
					{props.data.agents.map((agent: any) => (
						<div key={agent.id} className="p-6 pt-8 shadow-sm border rounded-lg flex flex-col items-center cursor-pointer ">
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
		);
	};

	return (
		<>
			<Head>
				{META_TAGS.map((tag, i) => (
					<meta key={i} name={tag.name} content={tag.content} />
				))}
				<link rel="canonical" href={`https://resi.uatz.view.com.au/real-estate-agency/${router.query.slug}`}></link>
			</Head>
			<section className="lg:mb-4 lg:mt-4">
				<ul className="flex items-center gap-3 pb-4 overflow-x-auto text-light-black ">
					{props.data.breadcrumbs.map((crumb: any, i: number) => (
						<BreadCrumb key={i} className={props.data.breadcrumbs.length - 1 === i ? "text-black w-full" : ""} breadCrumb={crumb} showArrow={props.data.breadcrumbs.length - 1 !== i ? true : false} />
					))}
				</ul>
			</section>

			<section className="mb-8 lg:flex lg:justify-between gap-4">
				<HeroSection className="lg:w-3/5 md:pt-20 pt-12 mb-4 relative lg:mb-0" subTitleClassName="lg:text-base mt-5" title={props.data.name} subTitle={props.data.address}>
					{renderHeroSection()}
				</HeroSection>
				<div className="lg:w-2/5 lg:h-auto lg:mt-0 lg:p-0">
					<div className="w-full h-58 lg:h-full relative overflow-hidden rounded-lg ">
						<Image src={mapImg} layout="fill" objectFit="cover" alt="properties image" />
					</div>
				</div>
			</section>

			<section className=" border-b pb-8">
				{renderMarketPerformance()}

				<div ref={listingSectionRef} className="h-12 border-b"></div>
				<div className="flex flex-1 justify-evenly items-center h-[88px] bg-light-gray rounded-xl mt-8">
					{PROPERTY_NAVIGATION.map((navigation, i) => (
						<>
							<a key={i} href={navigation.href} className="w-1/3 h-full relative flex flex-col gap-0.5 justify-center items-center ">
								<p className="text-20px font-bold text-primary-blue">{navigation.numberOfListing}</p>
								<p className="text-sm font-bold">{navigation.title}</p>
								{((navigation.method === "sales" && i === 1) || (navigation.method === "rent" && i === 2)) && <span className="h-1 w-16 bg-primary-blue rounded-t-full absolute bottom-0"></span>}
							</a>
							{i !== PROPERTY_NAVIGATION.length - 1 && <span className="h-14 w-1px bg-slate-200"></span>}
						</>
					))}
				</div>
				<h4 className="text-at-lg font-bold mt-8 mb-6">Sold listing in the past 12 months</h4>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">{renderProperties()}</div>
			</section>

			<section>
				<h4 className="text-18px font-bold mt-8">About Our agency</h4>
				<DropDown className="mb-8 mt-4 pb-8 border-b" description={props.data.description} globalStyle={false} shadow={true} defaultHeight="200px" shadowBottomValue="bottom-14" />
			</section>

			{renderAgent()}
		</>
	);
};

export default AgencyPropertiesPage;
