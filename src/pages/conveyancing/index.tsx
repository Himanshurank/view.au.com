import HeroSection from "@/shared/components/HeroSection";
import React from "react";
import Image from "next/image";
import settleEasyLogo from "../../../public/assets/conveyancing/settle-easy.svg";
import Accordion from "@/shared/components/Accordion";
import CustomerFeedback from "@/shared/components/CustomerFeedback";
import RedeemOfferForm from "@/shared/components/RedeemOfferForm";
import { accordionFAQsList, feedBacks, pageDescription } from "@/module/constant/conveyancing";

const conveyancingPage = () => {
	return (
		<>
			<HeroSection title="Buying or selling?" subTitle="Redeem your $220 conveyancing voucher and free contract review" classes="flex flex-col-reverse lg:flex-row lg:justify-between" subTitleClasses="lg:text-base">
				<div className="flex justify-center items-center w-14 lg:w-32">
					<Image src={settleEasyLogo} alt="settle easy logo" />
				</div>
			</HeroSection>

			<section className="relative">
				<div className="lg:w-3/5 ">
					<div className="w-full h-198px rounded-xl overflow-hidden lg:h-446px">
						<iframe className="w-full h-full" src="https://www.youtube.com/embed/SklG0T_W0ao?si=9Jrb7eeGTNx2lNTa" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
					</div>
					<RedeemOfferForm />
					<div className="mb-8 lg:mb-16 lg:mt-4">
						<p className="text-base font-normal mb-4">
							In partnership with view.com.au,{" "}
							<a href="#" className="underline hover:text-primary-blue">
								Settle Easy
							</a>
							is currently offering new customers a $220 conveyancing voucher on their trusted{" "}
							<a href="#" className="underline hover:text-primary-blue">
								online conveyancing services
							</a>
							and a free contract review. You&apos;ll only pay $880 incl. GST plus disbursements on a standard conveyancing transaction. Redeem today and use within 12 months.
						</p>
						{pageDescription.map((disc, i) => (
							<p className="text-base font-normal mb-4" key={i}>
								{disc}
							</p>
						))}
					</div>
					<div>
						<h2 className="text-base font-bold undefined mb-4 lg:mb-6 ">Frequently Asked Questions</h2>
						<Accordion accordionFAQsList={accordionFAQsList} />
					</div>
				</div>
			</section>

			<section className="bg-light-gray rounded-xl lg:mt-16 lg:mb-3">
				<CustomerFeedback feedBacks={feedBacks} title={"What Settle Easy customers are saying..."} />
			</section>
		</>
	);
};

export default conveyancingPage;
