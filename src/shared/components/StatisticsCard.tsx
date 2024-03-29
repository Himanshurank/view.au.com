import Image from "next/image";
import React from "react";

interface IProps {
	imgUrl: string;
	title: string;
	subTitle: string;
	description: string;
	bgColor: string;
	textColor: string;
}

const StatisticsCard = (props: IProps) => {
	return (
		<div className="rounded-lg flex p-6 md:flex-col md:items-center md:w-full" style={{ backgroundColor: props.bgColor }}>
			<div className="w-10 h-10 md:w-16 md:h-16 bg-white rounded-full flex justify-center items-center">
				<div className="w-6 h-6 md:w-8 md:h-8 relative">
					<Image src={props.imgUrl} alt="feature Icon" layout="fill" />
				</div>
			</div>
			<div className="ml-4 md:ml-0">
				<p className={`text-base font-bold md:pt-4 md:text-center md:text-${props.textColor}`}>{props.title}</p>
				<p className="text-sm font-normal text-light-black pt-1 md:text-center ">{props.subTitle}</p>
				<p className={`text-sm font-normal md:font-bold pt-1 md:text-center md:text-${props.textColor}`}>{props.description}</p>
			</div>
		</div>
	);
};

export default StatisticsCard;
