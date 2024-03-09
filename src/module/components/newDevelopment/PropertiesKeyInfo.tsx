import Image from "next/image";
import React from "react";
import mapIcon from "../../../../public/assets/newdevelopment/location.svg";
import homeSizeIcon from "../../../../public/assets/newdevelopment/homesize.svg";

const PropertiesKeyInfo = (props: any) => {
	const keyInfo = [
		{ icon: mapIcon, alt: "map icon", title: "Display Location", value: props.props.location },
		{ icon: mapIcon, alt: "map icon", title: "Property Type", value: props.props.classification },
		{ icon: homeSizeIcon, alt: "home size icon", title: "Size", value: props.props.size },
	];

	return (
		<>
			{keyInfo.map((info) => (
				<div key={info.title} className="mb-2 lg:border-r lg:pr-6">
					<div className="flex gap-2 mb-1 items-center">
						<Image src={info.icon} alt={info.alt} />
						<p className="text-sm font-normal text-light-black">{info.title}</p>
					</div>
					<p>{info.value}</p>
				</div>
			))}
		</>
	);
};

export default PropertiesKeyInfo;
