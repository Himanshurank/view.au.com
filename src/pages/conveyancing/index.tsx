import HeroSection from "@/shared/components/HeroSection";
import React from "react";
import Image from "next/image";
import settleEasyLogo from "../../../public/assets/conveyancing/settle-easy.svg";
import emailIcon from "../../../public/assets/conveyancing/email.svg";
import Accordion from "@/shared/components/Accordion";

const conveyancingPage = () => {
	return (
		<>
			<HeroSection title="Buying or selling?" subTitle="Redeem your $220 conveyancing voucher and free contract review" classes="flex flex-col-reverse">
				<div className="w-14 ">
					<Image src={settleEasyLogo} alt="settle easy logo" />
				</div>
			</HeroSection>
			<section>
				<div className="w-full h-198px rounded-xl overflow-hidden">
					<iframe className="w-full h-full" src="https://www.youtube.com/embed/SklG0T_W0ao?si=9Jrb7eeGTNx2lNTa" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
				</div>
				<div className="border rounded-xl mt-8">
					<p className="text-sm font-bold m-6">Enter your details for your $220 conveyancing voucher and a free contract review</p>
					<form className="px-4">
						<div className="flex flex-col mb-4">
							<label htmlFor="firstame" className="ml-1 mb-1 font-medium text-sm ">
								First name<span className="text-red-500">*</span>
							</label>
							<input type="text" id="firstname" className="border outline-none rounded-lg py-2 px-4 focus:border-blue-600" />
						</div>
						<div className="flex flex-col mb-4">
							<label htmlFor="lastname" className="ml-1 mb-1  font-medium text-sm">
								Last name<span className="text-red-500">*</span>
							</label>
							<input type="text" id="lastname" className="border outline-none rounded-lg py-2 px-4 focus:border-blue-600" />
						</div>
						<div className="flex flex-col mb-4">
							<label htmlFor="email" className="ml-1 mb-1  font-medium text-sm">
								Email<span className="text-red-500">*</span>
							</label>
							<input type="email" id="email" className="border outline-none rounded-lg py-2 px-4 focus:border-blue-600" />
						</div>
						<div className="flex flex-col mb-4">
							<label htmlFor="phone" className="ml-1 mb-1  font-medium text-sm">
								Phone<span className="text-red-500">*</span>
							</label>
							<input type="number" id="number" className="border outline-none rounded-lg py-2 px-4 focus:border-blue-600" />
						</div>
						<div className="flex flex-col mb-6 relative">
							<label htmlFor="state" className="ml-1 mb-1  font-medium text-sm">
								State<span className="text-red-500">*</span>
							</label>
							<select name="state" id="state" className="stateselect border outline-none rounded-lg py-2 px-4 focus:border-blue-600">
								<option value="" disabled selected>
									Select your state
								</option>
								<option value="VIC">VIC</option>
								<option value="NSW">NSW</option>
							</select>
						</div>
						<div className="flex flex-col">
							<label htmlFor="comment" className="ml-1 mb-1  font-medium text-sm">
								Comment or message
							</label>
							<textarea name="comment" id="comment" placeholder="Add a message" className="border outline-none rounded-lg pt-2 p-3 focus:border-blue-600 placeholder:text-light-black"></textarea>
						</div>
						<div className="mt-5 mb-3  ">
							<button className="bg-primary-blue w-full rounded-lg py-2 text-white font-bold flex justify-center items-center">
								<Image src={emailIcon} alt="email icon" />
								<p className="px-2">Redeem Offer</p>
							</button>
						</div>
						<p className="text-xs text-center mb-6 text-light-black  ">
							By submitting your details, you acknowledge that you accept our{" "}
							<a href="#" className="text-primary-blue hover:underline">
								Privacy Policy
							</a>
						</p>
					</form>
				</div>
				<div>
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
					<h2 className="text-base font-bold undefined  mb-4 lg:mb-6 ">Frequently Asked Questions</h2>
					<Accordion />
				</div>
			</section>
		</>
	);
};

export default conveyancingPage;
