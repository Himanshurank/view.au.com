import Image from "next/image";
import React, { useState } from "react";
import emailIcon from "../../../public/assets/conveyancing/email.svg";
import InputElement from "./InputElement";
import { error } from "console";

interface IUserDetail {
	fName: string;
	lName: string;
	email: string;
	phone: string;
	state: string;
	comment?: string;
}

interface IError {
	fName?: string;
	lName?: string;
	email?: string;
	phone?: string;
	state?: string;
}

const FeedbackForm = () => {
	const initialState = { fName: "", lName: "", email: "", phone: "", state: "", comment: "" };
	const [userDetail, setUserDetail] = useState<IUserDetail>(initialState);
	const [inputError, setInputError] = useState<IError>({});

	const getUserDetail = (e: any): void => {
		const { name, value } = e.target;
		setUserDetail((prev) => ({
			...prev,
			[name]: name === "phone" ? +value : value,
		}));
	};

	const onRedeemOffer = (e: any) => {
		e.preventDefault();
		const error: IError = {};
		if (userDetail.fName === "") {
			error.fName = "* First name is required";
		}
		if (userDetail.lName === "") {
			error.lName = "* Last name is required";
		}
		if (userDetail.email === "") {
			error.email = "* Email is required";
		}
		if (userDetail.phone === "") {
			error.phone = "* Phone number is required";
		}
		if (userDetail.state === "") {
			error.state = "* State is required";
		}
		if (Object.keys(error).length > 0) {
			setInputError(error);
			return;
		}
		console.log(userDetail);

		setUserDetail(initialState);
	};

	const formPropsProperties = [
		{ name: "fName", error: inputError.fName ? inputError.fName : "", holder: "First Name", type: "text", onchange: getUserDetail, value: userDetail.fName },
		{ name: "lName", error: inputError.lName ? inputError.lName : "", holder: "Last Name", type: "text", onchange: getUserDetail, value: userDetail.lName },
		{ name: "email", error: inputError.email ? inputError.email : "", holder: "Email", type: "email", onchange: getUserDetail, value: userDetail.email },
		{ name: "phone", error: inputError.phone ? inputError.phone : "", holder: "Phone", type: "number", onchange: getUserDetail, value: userDetail.phone },
	];

	return (
		<div className="border rounded-xl mt-8 lg:absolute lg:w-[38%] lg:right-0 lg:top-0 lg:mt-0">
			<p className="text-sm font-bold m-6">Enter your details for your $220 conveyancing voucher and a free contract review</p>
			<form onSubmit={onRedeemOffer} className="px-4">
				{formPropsProperties.map((input) => {
					return <InputElement key={input.name} error={input.error} value={input.value} holder={input.holder} name={input.name} type={input.type} onchange={(e) => input.onchange(e)} />;
				})}
				<div className="flex flex-col mb-6 relative">
					bn vvb
					<label htmlFor="state" className="ml-1 mb-1  font-medium text-sm">
						State<span className="text-red-500">*</span>
					</label>
					<select value={userDetail.state} name="state" onChange={getUserDetail} id="state" className="border outline-none rounded-lg py-2 px-4 focus:border-blue-600">
						<option value="" disabled selected>
							Select your state
						</option>
						<option value="VIC">VIC</option>
						<option value="NSW">NSW</option>
					</select>
					<p className="ml-1 mt-1 text-xs text-red-500 leading-tight ">{inputError.state ? inputError.state : ""}</p>
				</div>
				<div className="flex flex-col ">
					<label htmlFor="comment" className="ml-1 mb-1  font-medium text-sm">
						Comment or message
					</label>
					<textarea value={userDetail.comment} onChange={getUserDetail} name="comment" id="comment" placeholder="Add a message" className="border outline-none rounded-lg pt-2 p-3 focus:border-blue-600 placeholder:text-light-black"></textarea>
				</div>
				<div className="mt-5 mb-3 lg:mt-6">
					<button type="submit" className="bg-primary-blue w-full rounded-lg py-2 text-white font-bold flex justify-center items-center">
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
