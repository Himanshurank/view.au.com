import Image from "next/image";
import React from "react";
import bedIcon from "../../../../public/assets/newdevelopment/bed.svg";
import bathIcon from "../../../../public/assets/newdevelopment/bath.svg";
import parkingCarIcon from "../../../../public/assets/newdevelopment/parking.svg";

interface featureProps {
	name: string;
	value: string;
}

const iconMap = {
	bathroom: bathIcon as string,
	bedroom: bedIcon as string,
	parkingCar: parkingCarIcon as string,
};

const PropertiesFeature = (props: any) => {
	const features = [
		{ icon: bathIcon, value: props.property.bedrooms },
		{ icon: bedIcon, value: props.property.bathrooms },
		{ icon: parkingCarIcon, value: props.property.carSpaces },
	];

	return (
		<>
			{features.map((feature, i) => (
				<div key={i} className="flex gap-2 pr-2 justify-between items-center border-r">
					<Image src={feature.icon} alt="Bed icon" />
					<p>{feature.value}</p>
				</div>
			))}
		</>
	);
};

export default PropertiesFeature;
