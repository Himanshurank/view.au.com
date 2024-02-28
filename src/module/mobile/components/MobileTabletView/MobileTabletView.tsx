import React from "react";
import Image from "next/image";
import mobileAppImg from "../../../../../public/assets/mobileViewPage.png";
import tabletAppImg from "../../../../../public/assets/tabletViewPage.png";
import TitleSubTitleComposition from "@/shared/components/TitleSubTitleomposition/TitleSubTitleComposition";
import ApplicationBtns from "@/shared/components/ApplicationBtns";

const MobileTabletView = () => {
	return (
		<>
			<div className="mb-16 lg:mb-4 lg:flex lg:items-center lg:h-500">
				<div className="flex flex-col items-center lg:items-start lg:w-1/2 lg:pl-17 lg:pr-8">
					<TitleSubTitleComposition head="Save and track." tagLine="Shortlist your favorite properties to keep track of upcoming open for inspections and auction. Login with your view.com.au account to sync your saved properties between your computer and mobile devices." />
					<div className="flex gap-4 mb-8 px-6 lg:px-0">
						<ApplicationBtns />
					</div>
				</div>
				<div className="px-17 lg:w-1/2 lg:pr-17 lg:text-right">
					<Image src={mobileAppImg} alt="mobile view" />
				</div>
			</div>
			<div className="mb-2 lg:flex lg:flex-row-reverse lg:justify-between lg:items-center lg:h-500 lg:mb-9">
				<div className="flex flex-col items-center w-full lg:items-start lg:w-44% lgc:pr-17 lgc:pl-112px ">
					<TitleSubTitleComposition
						head="Search, plan and research properties."
						tagLine="Search any property in Australia, get price data and suburb information, plus points of interest.
					"
					/>
					<div className="flex gap-4 w-full px-6 lg:px-0">
						<ApplicationBtns />
					</div>
				</div>
				<div className="text-right px-6 mt-6 lg:mt-0 lg:px-0 ">
					<div className="flex justify-end  lgc:pl-17">
						<Image src={tabletAppImg} alt="tablet view" />
					</div>
				</div>
			</div>
		</>
	);
};

export default MobileTabletView;
