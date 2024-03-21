export interface IProps {
	children: React.ReactNode;
	title: string;
	subTitle: string;
	subTitleClassName?: string;
	className?: string;
}

const HeroSection = (props: IProps) => {
	return (
		<div className={`${props.className} p-6 md:px-16 md:pt-12 md:pb-12 bg-banner-lightblue rounded-xl`}>
			<h1 className="text-44px font-golos font-bold leading-52px mr-2 break-words lg:leading-82px lg:text-74px">{props.title}</h1>
			<p className={`text-sm font-normal font-dmSans mt-4 ${props.subTitleClassName ? props.subTitleClassName : "lg:text-base"}`}>{props.subTitle}</p>
			{props.children}
		</div>
	);
};

export default HeroSection;
