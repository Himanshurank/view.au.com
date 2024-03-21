import Image from "next/image";

const PropertiesDetails = (props: any) => {
	return (
		<div className={`lg:px-6 mb-2 ${props.className}`}>
			<div className="flex gap-2 mb-1 items-center">
				<Image src={props.info?.icon} alt={props.info?.alt} />
				<p className="text-sm font-normal text-light-black">{props.info?.title}</p>
			</div>
			<p>{props.info?.value}</p>
		</div>
	);
};

export default PropertiesDetails;
