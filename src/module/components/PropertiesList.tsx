import Image from "next/image";
import React from "react";
import noImage from "../../../public/assets/common/no-image.png";
import bedIcon from "../../../public/assets/newdevelopment/bed.svg";
import bathIcon from "../../../public/assets/newdevelopment/bath.svg";
import parkingCarIcon from "../../../public/assets/newdevelopment/parking.svg";

const PropertiesList = (props: any) => {
	return (
		<div className="border-b border-at-light-500 pb-8 my-8 w-full">
			<ul>
				{props.properties.map((property: any) => (
					<li key={property.id} className="border flex p-4 rounded-lg mb-4 shadow-sm">
						<div className="w-20 h-20 overflow-hidden relative rounded-lg">{property.files.thumbnail ? <Image src={property.files.thumbnail[0].url} layout="fill" objectFit="cover" alt={property.files.thumbnail.type} /> : <Image src={noImage} layout="fill" objectFit="cover" alt="no i,age" />}</div>
						<div className="w-auto ml-4 flex flex-col justify-between">
							<p className="text-18px font-bold ">{property.title}</p>
							<p className="text-base font-normal text-light-black">{property.priceDisplay === "Contact for price" ? "Under Offer" : property.priceDisplay}</p>
							<div className="flex text-light-black gap-3 text-sm">
								{property.bedrooms && (
									<div className="flex gap-2 pr-2 justify-between items-center border-r">
										<Image src={bedIcon} alt="Bed icon" />
										<p>{property.bedrooms}</p>
									</div>
								)}
								{property.bathrooms && (
									<div className="flex gap-2 pr-2 justify-between items-center border-r">
										<Image src={bathIcon} alt="Bed icon" />
										<p>{property.bathrooms}</p>
									</div>
								)}
								{property.carSpaces && (
									<div className="flex gap-2 pr-2 justify-between items-center border-r">
										<Image src={parkingCarIcon} alt="Bed icon" />
										<p>{property.carSpaces}</p>
									</div>
								)}
								<p className="flex gap-2 justify-between items-center">{property.discr}</p>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PropertiesList;
