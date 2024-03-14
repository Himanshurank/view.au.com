import Button from "@/shared/components/buttons/Button";
import Image from "next/image";
import React from "react";
import mapImage from "../../../../public/assets/newdevelopment/map.png";

const PropertiesLocation = (props: any) => {
	return (
		<section>
			<h2 className="text-at-lg font-bold">Location Of {props.title}</h2>
			<div className="border-b">
				<div className="h-200px mt-8 mb-4 rounded-xl overflow-hidden relative ">
					<Image src={mapImage} objectFit="cover" layout="responsive" alt="map image" />
				</div>
				{props.locationDetail.map((detail: any) => (
					<div key={detail.title} className="mb-4">
						<h6 className="text-sm font-bold">{detail.title}</h6>
						<p className="text-xs font-normal">{detail.location}</p>
					</div>
				))}
				<Button buttonType="button" classes="w-full py-2 mb-4 lg:mb-8">
					Request a private appointment
				</Button>
			</div>
		</section>
	);
};

export default PropertiesLocation;
