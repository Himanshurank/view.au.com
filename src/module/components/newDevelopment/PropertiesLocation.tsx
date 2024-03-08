import Button from "@/shared/components/buttons/Button";
import Image from "next/image";
import React from "react";
import mapImage from "../../../../public/assets/newdevelopment/map.png";

const PropertiesLocation = (props: any) => {
	return (
		<>
			<div className="h-200px mt-8 mb-4 rounded-xl overflow-hidden relative ">
				<Image src={mapImage} objectFit="cover" layout="responsive" alt="map image" />
			</div>
			<div className="mb-4">
				<h6 className="text-sm font-bold">Development Location</h6>
				<p className="text-xs font-normal">{props.location.location}</p>
			</div>
			<div className="mb-4">
				<h6 className="text-sm font-bold">Display Location</h6>
				<p className="text-xs font-normal">{props.displayLocation.location}</p>
			</div>
			<div className="mb-4">
				<h6 className="text-sm font-bold">Display Open Hours</h6>
				<p className="text-xs font-normal">Not Available</p>
			</div>
			<Button buttonType="button" classes="w-full py-2 mb-4 lg:mb-8">
				Request a private appointment
			</Button>
		</>
	);
};

export default PropertiesLocation;
