import Image from "next/image";
import React from "react";
import bathIcon from "../../../../public/assets/newdevelopment/bath.svg";
import bedIcon from "../../../../public/assets/newdevelopment/bed.svg";
import parkingCarIcon from "../../../../public/assets/newdevelopment/parking.svg";

interface IProps {
	className?: string;
	property: ISuburbListing;
}
import { ISuburbListing } from "../suburb.interface";

const SuburbPropertyCard = (props: IProps) => {
	return (
		<div className={`border rounded-lg w-full mb-8 shadow-md ${props.className}`}>
			<div className="h-48 min-h-192 w-72 md:w-full rounded-t-lg overflow-hidden relative">
				<Image layout="fill" objectFit="cover" src={`https://resi.uatz.view.com.au/viewstatic/images/listing/400-w/${props.property.image}`} alt={props.property.address} />
			</div>
			<div className="p-4">
				<p className="text-sm font-bold mr-2 mb-1.5">{props.property.price ? `${props.property.price}` : "Contact Agent"}</p>
				<p className="text-sm  font-normal text-at-dark-700 mb-1.5 whitespace-nowrap text-ellipsis truncate">{props.property.address}</p>
				<div className="flex text-light-black  text-sm items-center">
					{(props.property.bed || props.property.bed) && (
						<div className={`flex gap-2 justify-between items-center pr-2 ${(props.property.bath || props.property.bath) && "border-r"} `}>
							<Image src={bedIcon} alt="Bed icon" />
							<p>{props.property.bed ? props.property.bed : props.property.bed}</p>
						</div>
					)}
					{(props.property.bath || props.property.bath) && (
						<div className={`flex gap-2 justify-between items-center px-2 ${(props.property.car || props.property.car) && "border-r"}`}>
							<Image src={bathIcon} alt="Bath icon" />
							<p>{props.property.bath ? props.property.bath : props.property.bath}</p>
						</div>
					)}
					{props.property.car !== 0 && props.property.car !== 0 && (
						<div className={`flex gap-2 justify-between items-center px-2`}>
							<Image src={parkingCarIcon} alt="parking icon" />
							<p>{props.property.car ? props.property.car : props.property.car}</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default SuburbPropertyCard;
