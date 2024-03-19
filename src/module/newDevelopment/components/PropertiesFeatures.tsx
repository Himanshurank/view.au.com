import Image from "next/image";

const PropertiesFeature = (props: any) => {
	return (
		<div className="flex mb-2 lg:mb-4">
			{props.features &&
				props.features.map((feature: any, i: number) => (
					<div key={i} className={`flex gap-2 justify-between items-center ${i === 0 && "pl-0"} px-2 ${props.features.length - 1 !== i && "border-r"} `}>
						<Image src={feature.icon} alt="Bed icon" />
						<p>{feature.value}</p>
					</div>
				))}
		</div>
	);
};

export default PropertiesFeature;
