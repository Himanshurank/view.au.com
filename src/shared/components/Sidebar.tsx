import React from "react";
import newDevSvg from "../../../public/assets/common/NewDevlopment.svg";
import estimateSvg from "../../../public/assets/common/PriceEstimate.svg";
import agentSvg from "../../../public/assets/common/FindAgent.svg";
import auctionSvg from "../../../public/assets/common/AuctionResult.svg";
import locationSvg from "../../../public/assets/common/LocationProfile.svg";
import adviceSvg from "../../../public/assets/common/Advice.svg";
import newsSvg from "../../../public/assets/common/News.svg";
import homeLoanSvg from "../../../public/assets/common/HomeLoans.svg";
import conveyancingSvg from "../../../public/assets/common/Conveyancing.svg";
import aboutSvg from "../../../public/assets/common/AboutUs.svg";
import Image from "next/image";

const Sidebar = () => {
	interface SidebarList {
		img: string;
		title: string;
	}

	const headerList: SidebarList[] = [
		{ img: newDevSvg, title: "New Development" },
		{ img: estimateSvg, title: "Price Estimate" },
		{ img: agentSvg, title: "Find Agent" },
		{ img: auctionSvg, title: "Auction Results" },
		{ img: locationSvg, title: "Location Profile" },
		{ img: adviceSvg, title: "Advice" },
		{ img: newsSvg, title: "News" },
		{ img: homeLoanSvg, title: "Home Loans" },
		{ img: conveyancingSvg, title: "Conveyancing" },
		{ img: aboutSvg, title: "About Us" },
		{ img: aboutSvg, title: "Sitemap" },
	];

	const renderSidebarList = (start: number, end: number, array: SidebarList[]) => {
		return array.splice(start, end).map((list, i) => (
			<li key={i} className="py-2 px-3">
				<div className="flex items-center gap-3 relative cursor-pointer font-medium text-base py-1">
					<span className="flex justify-center items-center">
						<Image src={list.img} alt="new development logo" />
					</span>
					{list.title}
				</div>
			</li>
		));
	};
	return (
		<div className="leftSideAni w-full h-dvh fixed top-0 left-0 bg-white pt-12 lgc:hidden overflow-scroll z-20">
			<ul>
				<li className="px-5 py-3 font-medium text-2xl text-black">Buy</li>
				<li className="px-5 py-3 font-medium text-2xl text-black">Rent</li>
				<li className="px-5 py-3 font-medium text-2xl text-black">Sold</li>
			</ul>
			<ul className="pb-8">
				{renderSidebarList(0, 2, headerList)}
				<hr className="my-4" />
				{renderSidebarList(0, 9, headerList)}
			</ul>
		</div>
	);
};

export default Sidebar;
