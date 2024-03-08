import Image from "next/image";
import React from "react";
import bedIcon from "../../../../public/assets/newdevelopment/bed.svg";
import bathIcon from "../../../../public/assets/newdevelopment/bath.svg";
import parkingCarIcon from "../../../../public/assets/newdevelopment/parking.svg";

const PropertiesFeatures = (props: any) => {
	return (
		<>
			{props.property.bedrooms && (
				<div className="flex gap-2 pr-2 justify-between items-center border-r">
					<Image src={bedIcon} alt="Bed icon" />
					<p>{props.property.bedrooms}</p>
				</div>
			)}
			{props.property.bathrooms && (
				<div className="flex gap-2 pr-2 justify-between items-center border-r">
					<Image src={bathIcon} alt="Bed icon" />
					<p>{props.property.bathrooms}</p>
				</div>
			)}
			{props.property.carSpaces && (
				<div className="flex gap-2 pr-2 justify-between items-center border-r">
					<Image src={parkingCarIcon} alt="Bed icon" />
					<p>{props.property.carSpaces}</p>
				</div>
			)}
		</>
	);
};

export default PropertiesFeatures;
