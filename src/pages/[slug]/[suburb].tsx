import React from "react";
import Image from "next/image";
import Head from "next/head";
import BreadCrumb from "@/shared/components/BreadCrumb";
import HeroSection from "@/shared/components/HeroSection";
import mapImg from "../../../public/assets/map.png";
import TabSlider from "@/shared/components/TabSlider";
import DropDown from "@/shared/components/DropDown";

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

const TAB_SLIDER = ["INTRODUCTION", "SUBURB TRENDS", "RECENTLY LISTED", "YOUR NEIGHBOURS", "SCHOOLS NEARBY", "AGENTS", "STREETS"];

const SuburbProfilePage = (props: any) => {
	return (
		<>
			<Head>
				<meta name="gfdjnhnhgo" content="gnreikegbhdfyui" />
			</Head>
			<HeroSection className="relative pt-10" title="Richmond" subTitle={props.suburbDetail.profile.headline}>
				<ul className="flex absolute top-0 my-4 text-light-black">
					{props.suburbDetail.breadCrumbs.map((crumb: any, i: any) => (
						<BreadCrumb key={i} breadCrumb={crumb} className={`${i !== 0 && "pl-2"}`} showArrow={true} />
					))}
				</ul>
			</HeroSection>
			<div className="mt-4 lg:w-2/5 lg:h-auto lg:mt-0 lg:p-0">
				<div className="w-full h-58 lg:h-full relative overflow-hidden rounded-lg ">
					<Image src={mapImg} layout="fill" objectFit="cover" alt="properties image" />
				</div>
			</div>
			<div className="flex overflow-scroll md:overflow-auto mt-4">
				{TAB_SLIDER.map((tab, i) => (
					<TabSlider key={i} tabs={tab} />
				))}
			</div>
			<div>
				<DropDown className="mt-4" globalStyle={false} shadow={true} description={props.suburbDetail.profile.description} defaultHeight="200px" shadowBottomValue={"bottom-8"} />
			</div>
			<section className="mt-8 ">
				<h2 className="text-2xl font-bold">Suburb Trends</h2>
				<div className="flex gap-2">
					<button className="text-primary-black hover:text-primary-blue text-[14px] border-2 hover:border-primary-blue px-4 py-1.5 rounded-lg font-medium">HOUSE</button>
					<button className="text-primary-black hover:text-primary-blue text-[14px] hover:border-primary-blue border-2 px-4 py-1.5 rounded-lg font-medium">UNIT</button>
				</div>
				<div>
					<div></div>
				</div>
			</section>
		</>
	);
};

export default SuburbProfilePage;
