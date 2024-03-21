import React from "react";
import Image from "next/image";
import BreadCrumb from "@/shared/components/BreadCrumb";
import HeroSection from "@/shared/components/HeroSection";
import mapImg from "../../../public/assets/map.png";

const SuburbProfilePage = () => {
	return (
		<>
			<HeroSection title="Richmond" subTitle="An inner-city oasis, Richmond is loved by young and old for its heritage, location and community feel">
				{<BreadCrumb />}
			</HeroSection>
			<div className="lg:w-2/5 lg:h-auto lg:mt-0 lg:p-0 my-4">
				<div className="w-full h-44 lg:h-full relative overflow-hidden rounded-lg ">
					<Image src={mapImg} layout="fill" objectFit="cover" alt="properties image" />
				</div>
			</div>
		</>
	);
};

export default SuburbProfilePage;
