import Image from "next/image";
import React from "react";

export interface IProps {
	children: React.ReactNode;
	title: string;
	subTitle: string;
	classes?: string;
	subTitleClasses?: string;
	sectionClasses?: string;
}

const HeroSection = (props: IProps) => {
	return (
		<section className={props.sectionClasses}>
			<div className={`${props.classes} p-6 md:px-16 md:pt-12 md:pb-12 bg-banner-lightblue rounded-xl`}>
				<div>
					<h1 className="text-44px font-golos font-bold leading-52px mr-2 break-words lg:leading-82px lg:text-74px">{props.title}</h1>
					<p className={`text-sm font-normal font-dmSans mt-4 ${props.subTitleClasses}`}>{props.subTitle}</p>
				</div>
				{props.children}
			</div>
		</section>
	);
};

export default HeroSection;
