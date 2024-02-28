import ApplicationBtns from "@/shared/components/ApplicationBtns";
import React from "react";

const MobileBanner = () => {
	return (
		<div className="p-6 md:px-16 md:py-12 bg-banner-lightblue rounded-xl mb-16 lg:mb-8">
			<h1 className="text-44px font-golos font-bold leading-52px mr-2 break-words lg:leading-82px lg:text-74px">Explore properties wherever and whenever you like.</h1>
			<p className="text-sm font-normal font-dmSans mt-4 lg:text-lg">Available on iOS and Android, the view.com.au app helps you keep on top of your property search with the latest real estate listings for sale, rent, recently sold, as well as unlisted properties.</p>
			<div className="flex gap-4 mt-6 lg:mt-12">
				<ApplicationBtns />
			</div>
		</div>
	);
};

export default MobileBanner;
