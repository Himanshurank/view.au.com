import Button from "@/shared/components/buttons/Button";
import Image from "next/image";
import React from "react";
import mapImage from "../../../../public/assets/newdevelopment/map.png";

const PropertiesLocation = (props: any) => {
	const locationDetail = [
		{ title: "Development Location", location: props.location.location },
		{ title: "Display Location", location: props.displayLocation.location },
		{ title: "Display Open Hours", location: "Not Available" },
	];
	return (
		<>
			<div className="h-200px mt-8 mb-4 rounded-xl overflow-hidden relative ">
				<Image src={mapImage} objectFit="cover" layout="responsive" alt="map image" />
			</div>
			{locationDetail.map((detail) => (
				<div key={detail.title} className="mb-4">
					<h6 className="text-sm font-bold">{detail.title}</h6>
					<p className="text-xs font-normal">{detail.location}</p>
				</div>
			))}
			<Button buttonType="button" classes="w-full py-2 mb-4 lg:mb-8">
				Request a private appointment
			</Button>
		</>
	);
};

export default PropertiesLocation;
