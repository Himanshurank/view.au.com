import React from "react";

export interface IProps {
	children: React.ReactNode;
	title: string;
	subTitle: string;
	classes?: string;
}

const HeroSection = (props: IProps) => {
	return (
		<section className={"p-6 md:px-16 md:py-12 w-full bg-banner-lightblue rounded-xl mb-8 " + props.classes}>
			<div>
				<h1 className="text-44px font-golos font-bold leading-52px mr-2 break-words lg:leading-82px lg:text-74px">{props.title}</h1>
				<p className="text-sm font-normal font-dmSans mt-4 lg:text-lg">{props.subTitle}</p>
			</div>
			{props.children}
		</section>
	);
};

export default HeroSection;
