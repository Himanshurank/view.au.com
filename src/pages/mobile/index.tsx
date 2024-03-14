import React from "react";
import HeroSection from "@/shared/components/HeroSection";
import ApplicationsButtons from "@/shared/components/buttons/ApplicationsButtons";
import mobileAppImg from "../../../public/assets/mobile/mobileViewPage.png";
import Image from "next/image";
import tabletAppImg from "../../../public/assets/mobile/tabletViewPage.png";
import Information from "@/shared/components/information/Information";

const MobilePage: React.FC = () => {
	return (
		<>
			<HeroSection classes="mb-8" title="Explore properties wherever and whenever you like." subTitle="Available on iOS and Android, the view.com.au app helps you keep on top of your property search with the latest real estate listings for sale, rent, recently sold, as well as unlisted properties." subTitleClasses="lg:text-lg">
				<div className="flex gap-4 mt-6 lg:mt-12">
					<ApplicationsButtons />
				</div>
			</HeroSection>
			<section className="my-16 px-4 lg:mb-1 lg:flex lg:items-center lg:h-500 lg:mt-10">
				<div className="flex flex-col items-center lg:items-start lg:w-1/2 lg:pl-17 lg:pr-8">
					<Information title="Save and track." subTitle="Shortlist your favorite properties to keep track of upcoming open for inspections and auction. Login with your view.com.au account to sync your saved properties between your computer and mobile devices." />
					<div className="flex gap-4 w-full mb-8 px-6 lg:px-0">
						<ApplicationsButtons />
					</div>
				</div>
				<div className="px-17 lg:w-1/2 lg:pr-17 lg:text-right">
					<Image src={mobileAppImg} alt="mobile view" />
				</div>
			</section>
			<section className="mb-2 lg:flex lg:flex-row-reverse lg:justify-between lg:items-center lg:h-500 lg:mb-9">
				<div className="flex flex-col items-center w-full lg:items-start lg:w-44% lgc:pr-17 lgc:pl-112px ">
					<Information title="Search, plan and research properties." subTitle="Search any property in Australia, get price data and suburb information, plus points of interest." />
					<div className="flex gap-4 w-full px-10 lg:px-0">
						<ApplicationsButtons />
					</div>
				</div>
				<div className="text-right px-10 mt-6 lg:mt-0 lg:px-0 ">
					<div className="flex justify-end  lgc:pl-17">
						<Image src={tabletAppImg} alt="tablet view" />
					</div>
				</div>
			</section>
		</>
	);
};

export default MobilePage;
