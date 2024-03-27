import Image from "next/image";
import bathIcon from "../../../public/assets/newdevelopment/bath.svg";
import bedIcon from "../../../public/assets/newdevelopment/bed.svg";
import parkingCarIcon from "../../../public/assets/newdevelopment/parking.svg";
import { IListing } from "@/module/agency/interface/interface";

interface IProps {
	property: IListing;
}

const PropertyCard = (props: IProps) => {
	return (
		<div className="border rounded-xl overflow-hidden shadow-sm cursor-pointer">
			<div className="h-48 min-h-192 rounded-t-at-regular overflow-hidden relative">
				<Image layout="fill" objectFit="cover" src={`https://resi.uatz.view.com.au/viewstatic/images/listing/${props.property.imageUrlSlug}/400-w/${props.property.heroImageUrl.split("/")[2]}`} alt={`${props.property.unitNumber ? props.property.unitNumber + "/" : ""}${props.property.streetNumber} ${props.property.streetName}, ${props.property.suburbName}`} />
			</div>
			<div className="p-4">
				<p className="text-base font-bold mr-2 mb-1.5">{props.property.priceText ? `${props.property.priceText}` : "Contact Agent"}</p>
				<p className="text-sm font-normal text-at-dark-700 mb-1.5">{`${props.property.unitNumber ? props.property.unitNumber + "/" : ""}${props.property.streetNumber} ${props.property.streetName}, ${props.property.suburbName.charAt(0).toUpperCase() + props.property.suburbName.slice(1).toLowerCase()}`}</p>
				<div className="flex text-light-black  text-sm items-center">
					{props.property.bedrooms && (
						<div className={`flex gap-2 justify-between items-center pr-2 ${props.property.bathrooms && "border-r"} `}>
							<Image src={bedIcon} alt="Bed icon" />
							<p>{props.property.bedrooms}</p>
						</div>
					)}
					{props.property.bathrooms && (
						<div className={`flex gap-2 justify-between items-center px-2 ${props.property.carparks && "border-r"}`}>
							<Image src={bathIcon} alt="Bath icon" />
							<p>{props.property.bathrooms}</p>
						</div>
					)}
					{props.property.carparks !== 0 && (
						<div className={`flex gap-2 justify-between items-center px-2`}>
							<Image src={parkingCarIcon} alt="parking icon" />
							<p>{props.property.carparks}</p>
						</div>
					)}
					{/* <p className="pl-2">{props.property.discr}</p> */}
				</div>
			</div>
		</div>
	);
};

export default PropertyCard;
