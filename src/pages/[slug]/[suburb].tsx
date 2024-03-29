import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { IoMdArrowRoundForward } from "react-icons/io";
import BreadCrumb from "@/shared/components/BreadCrumb";
import HeroSection from "@/shared/components/HeroSection";
import mapImg from "../../../public/assets/map.png";
import graph1 from "../../../public/assets/suburb/graph1.png";
import accountIcon from "../../../public/assets/suburb/account.svg";
import buildingIcon from "../../../public/assets/suburb/building.svg";
import userIcon from "../../../public/assets/suburb/users.svg";
import starsIcon from "../../../public/assets/suburb/stars.svg";
import chartImg from "../../../public/assets/suburb/chart.png";
import coreLogicIcon from "../../../public/assets/suburb/code-logic-icon.svg";
import TabSlider from "@/shared/components/TabSlider";
import DropDown from "@/shared/components/DropDown";
import StatisticsCard from "@/shared/components/StatisticsCard";
import Caption from "@/shared/components/Caption";
import HouseholdChart from "@/shared/components/HouseholdChart";
import SchoolInfoCard from "@/shared/components/SchoolInfoCard";
import { OCCUPATIONS_TITLES } from "@/module/suburb/suburb.constants";
import { IStreet, ISuburbListing } from "@/module/suburb/suburb.interface";
import AgencyCardDropDown from "@/module/suburb/components/AgencyCardDropDown";
import SuburbPropertyCard from "@/module/suburb/components/SuburbPropertyCard";

export const getServerSideProps = async (context: any) => {
	const params = context.resolvedUrl;

	if (params != "/vic/richmond-3121") {
		return {
			redirect: {
				destination: "/mobile",
				permanent: false,
			},
		};
	}
	const response = await fetch("http://localhost:7000");
	const props = await response.json();
	return {
		props: props,
	};
};

const renderSuburbTrend = (props: any) => {
	return (
		<section id="suburb-trend" className="mt-8 border-b">
			<h2 className="text-2xl font-bold">Suburb Trends</h2>
			<div className="flex gap-2 mt-4">
				<button className="text-primary-black hover:text-primary-blue text-[14px] border-2 hover:border-primary-blue px-4 py-1.5 rounded-lg font-medium">HOUSE</button>
				<button className="text-primary-black hover:text-primary-blue text-[14px] hover:border-primary-blue border-2 px-4 py-1.5 rounded-lg font-medium">UNIT</button>
			</div>
			<div className="border rounded-xl mt-4 mb-8">
				<div className="h-48 py-5 border-b px-1 md:px-9 relative">
					<Image src={graph1} alt="graph 1" layout="fill" />
				</div>
				<div className="flex justify-center items-center">
					<div className="w-1/2 border-r p-4 relative">
						<p className="text-center font-bold">{`$${Math.round(props.suburbDetail.SuburbTrends.LocalityTrendsHouse.LatestMedianPrice)}`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</p>
						<p className="text-center text-sm text-light-black">Median sale price</p>
						<div className="w-1/4 h-1 bg-primary-blue rounded-t-full absolute bottom-0 left-1/3"></div>
					</div>
					<div className="w-1/2 p-4">
						<p className="text-center font-bold">{`$${Math.round(props.suburbDetail.SuburbTrends.LocalityTrendsHouse.LatestMedianLease)}`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</p>
						<p className="text-center text-sm text-light-black">Median rental price</p>
					</div>
				</div>
			</div>
		</section>
	);
};

const renderProperties = (props: any, sale: () => void, rent: () => void, method: any) => {
	return (
		<section id="recently-listed" className="w-full border-b">
			<div>
				<div className="flex justify-between mt-8">
					<h2 className="text-2xl font-bold">Houses For Sale And Rent in Richmond</h2>
					<button className=" items-center gap-2 text-primary-blue text-sm hidden lg:flex">
						See More <IoMdArrowRoundForward />
					</button>
				</div>
				<div className="flex gap-2 mt-8">
					<button onClick={sale} className={`${method.sale ? "border-primary-blue text-primary-blue" : "text-primary-black "} border-2 hover:text-primary-blue  text-[14px]  hover:border-primary-blue  px-4 py-1.5 rounded-lg font-medium`}>
						Sale
					</button>
					<button onClick={rent} className={`${method.rent ? "border-primary-blue text-primary-blue" : "text-primary-black "} border-2 hover:text-primary-blue  text-[14px]  hover:border-primary-blue  px-4 py-1.5 rounded-lg font-medium`}>
						Rent
					</button>
				</div>
			</div>
			<div className="flex gap-2 md:grid md:grid-cols-4 md:gap-3 w-full overflow-x-auto mt-4">
				{method.sale && (
					<>
						{props.suburbDetail.listings.sale.map((property: ISuburbListing, i: number) => (
							<SuburbPropertyCard key={i} property={property} />
						))}
					</>
				)}
				{method.rent && (
					<>
						{props.suburbDetail.listings.lease.map((property: ISuburbListing, i: number) => (
							<SuburbPropertyCard key={i} property={property} />
						))}
					</>
				)}
			</div>
			<button className="w-full shadow-sm rounded-lg p-3 flex justify-center items-center gap-2 md:hidden border-2 text-primary-black font-medium mt-4 cursor-pointer mb-6">
				See More <IoMdArrowRoundForward />
			</button>
		</section>
	);
};

const renderCharts = () => {
	return (
		<div className="md:flex gap-3 md:mt-4">
			<div>
				<h4 className="mb-1 mt-3 text-base font-bold md:text-lg ">For Age rangers</h4>
				<Caption className="md:my-4 md:text-sm" imgUrl={starsIcon} title={"Most people in this area are 19-30 years of age"} />
				<div className="p-3 mt-4 border rounded-lg">
					<Image src={chartImg} alt="chart" objectFit="cover" />
				</div>
			</div>
			<div>
				<h4 className="mb-1 mt-3 text-base font-bold md:text-lg ">Occupancy</h4>
				<Caption className="md:my-4 md:text-sm" imgUrl={starsIcon} title={"Most people in this area are Renting"} />
				<div className="p-3 mt-4 border rounded-lg">
					<Image src={chartImg} alt="chart" objectFit="cover" />
				</div>
			</div>
			<div>
				<h4 className="mb-1 mt-3 text-base font-bold md:text-lg ">Income</h4>
				<Caption className="md:my-4 md:text-sm" imgUrl={starsIcon} title={"Most people in this area have an income range of $78-$130K."} />
				<div className="p-3 mt-4 border rounded-lg md:-mt-1">
					<Image src={chartImg} alt="chart" objectFit="cover" />
				</div>
			</div>
		</div>
	);
};

const renderNeighbours = (households: any, suburb: any) => {
	return (
		<section id="your-neighbours" className="mt-6 border-b">
			<h2 className="text-2xl font-bold my-6">Neighbours in Richmond</h2>
			<div className="flex flex-col gap-4 md:flex-row">
				{suburb.map((suburbStatic: any, i: number) => (
					<StatisticsCard key={i} textColor={suburbStatic.textColor} bgColor={suburbStatic.bgColor} imgUrl={suburbStatic.image} title={suburbStatic.title} subTitle={suburbStatic.subTitle} description={suburbStatic.description} />
				))}
			</div>

			{renderCharts()}
			<div className="md:flex gap-4 lg:mt-3">
				<div className="w-full">
					<h4 className="mb-1 mt-4 md:mt-0 text-base font-bold md:text-lg ">Occupations</h4>
					<Caption className="md:text-sm" imgUrl={starsIcon} title={"Professional occupations are prevalent in this area."} />
					<div className="p-4 mt-3 md:h-64 border rounded-lg">
						{OCCUPATIONS_TITLES.map((title, i) => (
							<div key={i} className="flex gap-2 mt-2">
								<p className="w-9 h-9 flex justify-center items-center bg-light-gray rounded-md text-light-black">{i + 1}</p>
								<p className="h-9 w-full px-3 flex items-center bg-light-gray rounded-md font-bold">{title}</p>
							</div>
						))}
					</div>
				</div>
				<div className="w-full">
					<h4 className="mb-1 mt-8 md:mt-0 text-base font-bold md:text-lg ">Households</h4>
					<Caption className="md:text-sm" imgUrl={starsIcon} title={"The majority of households in this area are Childless Couples"} />
					<div className="p-4 border rounded-lg mt-4 md:mt-3 md:h-64">
						{households.map((chart: any) => (
							<HouseholdChart key={chart.color} title={chart.title} color={chart.color} value={chart.value} />
						))}
					</div>
				</div>
			</div>
			<button className="px-4 py-1 border font-medium shadow-sm text-black hover:border-b-gray hover:bg-light-gray w-full rounded-lg flex items-center justify-center gap-2 my-5">
				Property & Estimate info
				<IoMdArrowRoundForward />
			</button>

			<div className="flex justify-center items-center gap-2 mb-8">
				<p className="text-xs text-light-black ">Powered by </p>
				<Image src={coreLogicIcon} alt="core logic icon" />
			</div>
		</section>
	);
};

const renderSchools = (props: any) => {
	return (
		<section id="schools-nearby" className="border-b">
			<div className="flex justify-between items-center my-8 md:mb-4">
				<h2 className="text-2xl font-bold ">Schools in {props.suburbDetail.Suburb}</h2>
				<button className=" items-center gap-2 text-primary-blue text-sm hidden lg:flex">
					See More <IoMdArrowRoundForward />
				</button>
			</div>
			<div className="space-x-2">
				<button className="text-primary-black hover:text-primary-blue text-[14px] border-2 hover:border-primary-blue px-4 py-1.5 rounded-lg font-medium">All</button>
				<button className="text-primary-black hover:text-primary-blue text-[14px] border-2 hover:border-primary-blue px-4 py-1.5 rounded-lg font-medium">Primary</button>
				<button className="text-primary-black hover:text-primary-blue text-[14px] border-2 hover:border-primary-blue px-4 py-1.5 rounded-lg font-medium">Secondary</button>
			</div>
			<div className="flex gap-2 md:grid md:grid-cols-2 md:gap-3 w-full overflow-x-auto mt-4">
				{props.suburbDetail.Schools.map((school: any) => (
					<SchoolInfoCard key={school.full_name} title={school.full_name} schoolLevel={school.school_level} schoolType={school.type} schoolGender={school.gender} />
				))}
			</div>
			<div className="relative w-full h-305px rounded-lg mt-4 overflow-hidden">
				<Image src={mapImg} alt="map img" layout="fill" objectFit="cover" />
			</div>
			<button className="md:hidden px-4 py-3 border font-medium shadow-sm text-sm text-black hover:border-b-gray hover:bg-light-gray w-full rounded-lg flex items-center justify-center gap-2 my-5">
				See more on the Good School Guide <IoMdArrowRoundForward />
			</button>

			<p className="text-center text-sm text-light-black mb-8 md:mt-4">
				Powered by <span className="font-bold">The Good School Guide</span>
			</p>
		</section>
	);
};

function SuburbProfilePage(props: any) {
	const [saleMethod, setSaleMethod] = useState({ sale: true, rent: false });
	const HOUSEHOLD_CHART = [
		{
			title: "Childless Couples",
			value: props.suburbDetail.PocketInsights.AreaStatistics.Households.ChildlessCouples,
			color: "#0073CF",
		},
		{
			title: "Couples with Children",
			value: props.suburbDetail.PocketInsights.AreaStatistics.Households.CoupleswithChildren,
			color: "#333333",
		},
		{
			title: "Single Parents",
			value: props.suburbDetail.PocketInsights.AreaStatistics.Households.SingleParents,
			color: "#666666",
		},
		{
			title: "Other",
			value: props.suburbDetail.PocketInsights.AreaStatistics.Households.Other,
			color: "#999999",
		},
	];
	const SUBURB_STATISTICS = [
		{
			image: accountIcon,
			title: `${props.suburbDetail.PocketInsights.AreaStatistics.Percentage19To30}%`,
			subTitle: "of people in this area are",
			description: "aged 19 - 30",
			bgColor: "#e9f5fe",
			textColor: "primary-blue",
		},
		{
			image: buildingIcon,
			title: `${Math.round(props.suburbDetail.PocketInsights.AreaStatistics.Occupancy.Renting)}%`,
			subTitle: "of people in this area are",
			description: "renting",
			bgColor: "#f1e9fe",
			textColor: "primary-lavender",
		},
		{
			image: userIcon,
			title: `${Math.round(props.suburbDetail.PocketInsights.AreaStatistics.Households.ChildlessCouples)}%`,
			subTitle: "of people in this area are",
			description: "childless couples",
			bgColor: "#ebf6ec",
			textColor: "primary-green",
		},
	];

	const onSale = () => {
		setSaleMethod({ sale: true, rent: false });
	};
	const onRent = () => {
		setSaleMethod({ sale: false, rent: true });
	};

	return (
		<>
			<Head>
				<meta name="gfdjnhnhgo" content="gnreikegbhdfyui" />
			</Head>

			<section className="mb-4 lg:mb-0 mt-5 lg:flex lg:justify-between gap-4">
				<HeroSection className="relative lg:w-2/3" titleClassName="mt-8" title="Richmond" subTitle={props.suburbDetail.profile.headline}>
					<ul className="flex absolute top-0 my-4 text-light-black">
						{props.suburbDetail.breadCrumbs.map((crumb: any, i: any) => (
							<BreadCrumb key={i} breadCrumb={crumb} className={`${i !== 0 && "pl-2"} my-6`} showArrow={true} />
						))}
					</ul>
				</HeroSection>
				<div className="mt-4 lg:w-2/5 lg:h-auto lg:mt-0 lg:p-0">
					<div className="w-full h-44 lg:h-[356px] relative overflow-hidden rounded-lg ">
						<Image src={mapImg} layout="fill" objectFit="cover" alt="properties image" />
					</div>
				</div>
			</section>

			<div id="slider" className="bg-white w-full flex overflow-scroll md:overflow-hidden border-b sticky top-15 z-10">
				<TabSlider />
			</div>

			<section id="introduction">
				<div className="md:hidden">
					<DropDown className="mt-4" globalStyle={false} shadow={true} description={props.suburbDetail.profile.description} defaultHeight="200px" shadowBottomValue={"bottom-8"} />
				</div>
				<div className="columns-1 lg:columns-2 mt-8 hidden md:block">
					<div className="text-base font-normal whitespace-pre-line mb-4 leading-7" dangerouslySetInnerHTML={{ __html: props.suburbDetail.profile.description }} />
				</div>
			</section>

			{renderSuburbTrend(props)}

			{renderProperties(props, onSale, onRent, saleMethod)}

			{renderNeighbours(HOUSEHOLD_CHART, SUBURB_STATISTICS)}

			{renderSchools(props)}

			<section id="agents" className="pb-10 border-b">
				<AgencyCardDropDown title={props.suburbDetail.Suburb} agencies={props.suburbDetail.agencies} />
			</section>

			<section id="streets">
				<h2 className="text-2xl font-bold mt-8">Street in {props.suburbDetail.Suburb}</h2>
				<div className="grid grid-cols-2 md:grid-cols-6 ">
					{props.suburbDetail.streets.map((street: IStreet) => (
						<a className="underline hover:text-primary-blue mt-3 text-sm" href="#" key={street._id}>
							{street.streetName}
						</a>
					))}
				</div>
			</section>
		</>
	);
}

export default SuburbProfilePage;
