import Image from "next/image";
import React from "react";

const PropertiesFeature = (props: any) => {
	return (
		<>
			{props.features &&
				props.features.map((feature: any, i: number) => (
					<div key={i} className={`flex gap-2 justify-between items-center ${i === 0 && "pl-0"} px-2 ${props.features.length - 1 !== i && "border-r"} `}>
						<Image src={feature.icon} alt="Bed icon" />
						<p>{feature.value}</p>
					</div>
				))}
		</>
	);
};

export default PropertiesFeature;
