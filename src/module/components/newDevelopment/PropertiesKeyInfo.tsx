import Image from "next/image";
import React from "react";
import mapIcon from "../../../../public/assets/newdevelopment/location.svg";
import homeSizeIcon from "../../../../public/assets/newdevelopment/homesize.svg";

const PropertiesKeyInfo = (props: any) => {
	return (
		<>
			<div className="mb-2 lg:border-r lg:pr-6">
				<div className="flex gap-2 mb-1 items-center">
					<Image src={mapIcon} alt="map icon" />
					<p className="text-sm font-normal text-light-black">Display Location</p>
				</div>
				<p>{props.props.location}</p>
			</div>
			<div className="mb-2 lg:border-r lg:px-6">
				<div className="flex gap-2 mb-1 items-center">
					<Image src={mapIcon} alt="map icon" />
					<p className="text-sm font-normal text-light-black">Property Type</p>
				</div>
				<p>{props.props.classification}</p>
			</div>
			<div className="mb-2 lg:pl-6">
				<div className="flex gap-2 mb-1 items-center">
					<Image src={homeSizeIcon} alt="home size icon" />
					<p className="text-sm font-normal text-light-black">Size</p>
				</div>
				<p>{props.props.size}</p>
			</div>
		</>
	);
};

export default PropertiesKeyInfo;
