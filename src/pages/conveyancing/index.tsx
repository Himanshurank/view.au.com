import HeroSection from "@/shared/components/HeroSection";
import React from "react";
import Image from "next/image";
import settleEasyLogo from "../../../public/assets/conveyancing/settle-easy.svg";
import Accordion from "@/shared/components/Accordion";
import CustomerFeedback from "@/shared/components/CustomerFeedback";
import FeedbackForm from "@/shared/components/FeedbackForm";

interface IFeedback {
	name: string;
	comment: string;
	time: string;
}

const conveyancingPage = () => {
	const feedBacks: IFeedback[] = [
		{
			name: "Jake Curtis",
			comment: "Marie was excellent, very prompt, clear and friendly. Would recommend for first home buyers who want to be kept in the loop and shown all the steps.",
			time: "4 weeks ago",
		},
		{ name: "Brendan Freeman", comment: "We were fortunate enough to have Carley from Settle Easy help us with our first home purchase. We feel incredibly lucky that we had her to explain the different parts of the process and answer the many questions we had. We said to one another multiple times 'Thank god for Carley, she's incredible.' It meant a lot that she was so forward with getting details, and advocating for us with the sellers and always keeping us up to date with what was happening. We can't thank her enough for everything she did for us.", time: "2 weeks ago" },
		{
			name: "Emma Gerts",
			comment: "We are first time property buyers and were buying a block of land - Carley from Settle Easy was absolutely amazing from start to finish. She went above and beyond at every single stage of the process, keeping us in the loop the entire time, explaining what she was doing and why, making sure we understood what was happening. Buying a property is stressful enough, you don&apos;t need the extra worry of a Conveyancer that needs constant chasing. Incredible service!",
			time: "2 weeks ago",
		},
	];

	return (
		<>
			<HeroSection title="Buying or selling?" subTitle="Redeem your $220 conveyancing voucher and free contract review" classes="flex flex-col-reverse lg:flex-row lg:justify-between">
				<div className="flex justify-center items-center w-14 lg:w-32">
					<Image src={settleEasyLogo} alt="settle easy logo" />
				</div>
			</HeroSection>
			<section className="px-4 relative">
				<div className="lg:w-3/5 ">
					<div className="w-full h-198px rounded-xl overflow-hidden lg:h-[446px]">
						<iframe className="w-full h-full" src="https://www.youtube.com/embed/SklG0T_W0ao?si=9Jrb7eeGTNx2lNTa" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
					</div>
					<FeedbackForm />
					<div className="mb-8">
						<p className="text-base font-normal mb-4">
							In partnership with view.com.au,{" "}
							<a href="#" className="underline hover:text-primary-blue">
								Settle Easy
							</a>{" "}
							is currently offering new customers a $220 conveyancing voucher on their trusted{" "}
							<a href="#" className="underline hover:text-primary-blue">
								online conveyancing services
							</a>{" "}
							and a free contract review. You&apos;ll only pay $880 incl. GST plus disbursements on a standard conveyancing transaction. Redeem today and use within 12 months.
						</p>
						<p className="text-base font-normal mb-4">Settle Easy provides reliable, secure, fast and hassle-free conveyancing services to help you buy or sell property.</p>
						<p className="text-base font-normal mb-4">Think of Settle Easy as a legal expert in your corner. Someone to guide you through the process and to provide you with a seamless experience in the lead up to settlement.</p>
						<p className="text-base font-normal mb-4">Alongside the $220 conveyancing voucher, you will also be eligible for a free contract review during your conveyancing transaction, knowing no surprises are waiting.</p>
						<p className="text-base font-normal mb-4">Simply fill out the form and a member from the Settle Easy Success Specialist team will get in touch within 24 hours.</p>
						<p className="text-base font-normal mb-4">This offer is eligible for customers transacting in Victoria, New South Wales and Queensland.</p>
					</div>
					<div>
						<h2 className="text-base font-bold undefined mb-4 lg:mb-6 ">Frequently Asked Questions</h2>
						<Accordion />
					</div>
				</div>
			</section>
			<section>
				<CustomerFeedback feedBacks={feedBacks} title={"What Settle Easy customers are saying..."} />
			</section>
		</>
	);
};

export default conveyancingPage;
