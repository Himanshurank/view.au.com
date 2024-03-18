import Image from "next/image";
import React from "react";
import bathIcon from "../../../../public/assets/newdevelopment/bath.svg";
import bedIcon from "../../../../public/assets/newdevelopment/bed.svg";
import parkingCarIcon from "../../../../public/assets/newdevelopment/parking.svg";

const PropertyDisplaySection = (props: any) => {
	return props.properties.map((property: any) => (
		<div key={property.id} className="border rounded-xl overflow-hidden shadow-sm cursor-pointer">
			<div className="h-48 min-h-192 rounded-t-at-regular overflow-hidden relative">
				<Image layout="fill" objectFit="cover" src={`https://resi.uatz.view.com.au/viewstatic/images/listing/1-bedroom-apartment-in-east-melbourne-vic-3002/400-w/${property.heroImageUrl}`} alt={`${property.unitNumber ? property.unitNumber + "/" : ""}${property.streetNumber} ${property.streetName}, ${property.suburbName}`} />
			</div>
			<div className="p-4">
				<p className="text-base font-bold mr-2 mb-1.5">{property.priceFrom ? `$${property.priceFrom}` : "Contact Agent"}</p>
				<p className="text-sm font-normal text-at-dark-700 mb-1.5">{`${property.unitNumber ? property.unitNumber + "/" : ""}${property.streetNumber} ${property.streetName}, ${property.suburbName.charAt(0).toUpperCase() + property.suburbName.slice(1).toLowerCase()}`}</p>
				<div className="flex text-light-black  text-sm items-center">
					{property.bedrooms && (
						<div className={`flex gap-2 justify-between items-center pr-2 ${property.bathrooms && "border-r"} `}>
							<Image src={bedIcon} alt="Bed icon" />
							<p>{property.bedrooms}</p>
						</div>
					)}
					{property.bathrooms && (
						<div className={`flex gap-2 justify-between items-center px-2 ${property.carparks && "border-r"}`}>
							<Image src={bathIcon} alt="Bath icon" />
							<p>{property.bathrooms}</p>
						</div>
					)}
					{property.carparks !== 0 && (
						<div className={`flex gap-2 justify-between items-center px-2`}>
							<Image src={parkingCarIcon} alt="parking icon" />
							<p>{property.carparks}</p>
						</div>
					)}
					<p className="pl-2">{property.discr}</p>
				</div>
			</div>
		</div>
	));
};

export default PropertyDisplaySection;
