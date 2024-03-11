import Image from "next/image";
import React from "react";
import mapIcon from "../../../../public/assets/newdevelopment/location.svg";
import homeSizeIcon from "../../../../public/assets/newdevelopment/homesize.svg";

const PropertiesKeyInfo = (props: any) => {
	return (
		<>
			{props.keyInfo.map((info: any, i: number) => (
				<div key={i} className={`lg:px-6 ${i === 0 && "lg:pl-0"} mb-2 ${props.keyInfo.length - 1 !== i && "lg:border-r"} `}>
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
