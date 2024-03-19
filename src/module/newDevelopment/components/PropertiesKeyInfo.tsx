import Image from "next/image";

const PropertiesKeyInfo = (props: any) => {
	return (
		<div className="lg:flex border-b pb-8">
			{props.keyInfo.map((info: any, i: number) => (
				<div key={i} className={`lg:px-6 ${i === 0 && "lg:pl-0"} mb-2 ${props.keyInfo.length - 1 !== i && "lg:border-r"} `}>
					<div className="flex gap-2 mb-1 items-center">
						<Image src={info.icon} alt={info.alt} />
						<p className="text-sm font-normal text-light-black">{info.title}</p>
					</div>
					<p>{info.value}</p>
				</div>
			))}
		</div>
	);
};

export default PropertiesKeyInfo;
