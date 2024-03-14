import Image from "next/image";
import React from "react";

export interface IProps {
	children: React.ReactNode;
	title: string;
	subTitle: string;
	classes?: string;
	subTitleClasses?: string;
	sectionClasses?: string;
	agency?: boolean;
}

const HeroSection = (props: IProps) => {
	return (
		<section className={props.sectionClasses}>
			{props.agency && (
				<div className="flex items-center justify-center bg-[#010037] rounded-t-xl py-2">
					<div className="h-6 w-28 relative">
						<Image src="https://resi.uatz.view.com.au/viewstatic/images/listing/120-w/821e197e770543fc96928b0d8d9aa349.jpg" layout="fill" alt="agency logo" />
					</div>
				</div>
			)}

			<div className={`${props.classes} p-6 md:px-16 md:py-12 bg-banner-lightblue ${props.agency ? "rounded-b-xl" : "rounded-xl"}`}>
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
