import Image from "next/image";
import React from "react";
import emailIcon from "../../../public/assets/conveyancing/email.svg";

const FeedbackForm = () => {
	return (
		<div className="border rounded-xl mt-8 lg:absolute lg:w-[38%] lg:right-0 lg:top-0 lg:mt-0">
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
				<div className="flex flex-col ">
					<label htmlFor="comment" className="ml-1 mb-1  font-medium text-sm">
						Comment or message
					</label>
					<textarea name="comment" id="comment" placeholder="Add a message" className="border outline-none rounded-lg pt-2 p-3 focus:border-blue-600 placeholder:text-light-black"></textarea>
				</div>
				<div className="mt-5 mb-3 lg:mt-6">
					<button className="bg-primary-blue w-full rounded-lg py-2 text-white font-bold flex justify-center items-center">
						<Image src={emailIcon} alt="email icon" />
						<p className="px-2">Redeem Offer</p>
					</button>
				</div>
				<p className="text-xs text-center mb-6 px-2 text-light-black  ">
					By submitting your details, you acknowledge that you accept our{" "}
					<a href="#" className="text-primary-blue hover:underline">
						Privacy Policy
					</a>
				</p>
			</form>
		</div>
	);
};

export default FeedbackForm;
