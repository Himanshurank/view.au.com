import Image from "next/image";
import React from "react";
import { IAgency } from "@/module/suburb/suburb.interface";

interface IProps {
	agency: IAgency;
}

const AgencyCard = (props: IProps) => {
	return (
		<div className="border rounded-lg max-w-7xl h-full shadow-md">
			<div className="w-72 h-119px flex justify-center items-center relative rounded-t-lg border-b" style={{ backgroundColor: ` #${props.agency.brandColour} ` }}>
				<Image src={`https://resi.uatz.view.com.au/viewstatic/images/listing/200-w/${props.agency.image}`} alt="agency img" layout="fill" objectFit="scale-down" />
			</div>
			<div className="p-4">
				<p className="text-base font-bold mb-2 whitespace-nowrap text-ellipsis truncate">{props.agency.name}</p>
				<p className="text-sm font-normal text-light-black mb-3 ">{props.agency.streetName}</p>
				<div className="flex justify-between items-center px-2">
					<p className="text-xs font-normal flex items-center gap-2">
						Sold <span className="font-bold text-sm text-light-black">{props.agency.numberOfSoldListings}</span>
					</p>
					<span className="text-sm font-normal w-px h-4 bg-slate-200"></span>
					<p className="text-xs font-normal flex items-center gap-2">
						For Sale <span className="font-bold text-sm text-light-black">{props.agency.numberOfBuyListings}</span>
					</p>
					<span className="text-sm font-normal w-px h-4 bg-slate-200"></span>
					<p className="text-xs font-normal flex items-center gap-2">
						For Rent <span className="font-bold text-sm text-light-black">{props.agency.numberOfRentListings}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default AgencyCard;
