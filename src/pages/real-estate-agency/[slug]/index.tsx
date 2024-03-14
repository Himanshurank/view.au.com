import Image from "next/image";
import React from "react";
import webIcon from "../../../../public/assets/common/web.svg";
import fbIcon from "../../../../public/assets/common/facebookLogo.svg";
import instaLogo from "../../../../public/assets/common/instagramLogo.svg";
import mailOpeIcon from "../../../../public/assets/common/mail-border-open.svg";
import linkedinIcon from "../../../../public/assets/common/linkdinLogo.svg";
import callIcon from "../../../../public/assets/common/callIcon.svg";
import mapImg from "../../../../public/assets/map.png";
import HeroSection from "@/shared/components/HeroSection";
import Button from "@/shared/components/buttons/Button";
import BreadCrumb from "@/module/newDevelopment/components/BreadCrumb";

const AgencyPage = (props: any) => {
	const SOCIALICON = [fbIcon, instaLogo, linkedinIcon];
	return (
		<>
			<section className="px-4 lg:px-0">
				<BreadCrumb breadCrumb={props.data.breadcrumbs} />
			</section>
			<section className="px-4 lg:px-0 mb-8 lg:flex lg:justify-between gap-4">
				<HeroSection agency={true} title={props.data.name} classes="mb-4 relative" subTitle={props.data.address}>
					<span className="flex mt-4 gap-1">
						<Image src={webIcon} alt="web icon" />
						<a className="text-primary-blue text-sm underline" href="#">
							http://www.bigginscott.com.au
						</a>
					</span>
					<div className="lg:flex lg:justify-between lg:items-center">
						<div className="space-x-3 mt-6">
							<Button buttonType="button" classes="py-2 px-4">
								<div className="flex gap-2 font-medium text-sm">
									<Image src={mailOpeIcon} alt="mail" />
									Email us
								</div>
							</Button>
							<Button buttonType="button" classes="py-2 px-4 bg-white border hover:bg-light-gray hover:border-b-gray">
								<div className="flex gap-2 text-black text-sm font-medium">
									<Image src={callIcon} alt="call" />
									Call us
								</div>
							</Button>
						</div>
						<div className="flex gap-2 ml-1 mt-4">
							{SOCIALICON.map((icon, i) => (
								<div key={i} className="w-8 h-8 flex justify-center items-center rounded-full bg-light-gray ">
									<a href="#" className="w-4 h-4">
										<Image src={icon} alt="icon" />
									</a>
								</div>
							))}
						</div>
					</div>
				</HeroSection>
				<div className="lg:w-2/5 lg:h-auto lg:mt-0 lg:p-0">
					<div className="w-full h-44 lg:h-full relative overflow-hidden rounded-lg ">
						<Image src={mapImg} layout="fill" objectFit="cover" alt="properties image" />
					</div>
				</div>
			</section>
		</>
	);
};

export default AgencyPage;

export const getServerSideProps = async () => {
	const response = await fetch("http://localhost:9000/props");
	const props = await response.json();
	return {
		props: props,
	};
};
