import Image from "next/image";
import React from "react";
import emailIcon from "../../../public/assets/conveyancing/email.svg";
import { FieldError, FieldValues, useForm } from "react-hook-form";

interface FormErrors extends FieldValues {
	firstname?: FieldError | undefined;
	lastname?: FieldError | undefined;
	email?: FieldError | undefined;
	phone?: FieldError | undefined;
	state?: FieldError | undefined;
}

const RedeemOfferForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormErrors>();

	const onSubmit = (data: any) => {
		console.log(data);
	};

	// const formPropsProperties = [
	// 	{ name: "fName", register: register, validation: { require: "First name is required" }, holder: "First Name", type: "text", error: errors.fName?.message },
	// 	{ name: "lName", register: register, validation: { require: "Last name is required" }, holder: "Last Name", type: "text", error: errors.lName?.message },
	// 	{
	// 		name: "email",
	// 		register: register,
	// 		validation: {
	// 			require: "Email is required",
	// 			pattern: {
	// 				value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
	// 				message: "invalid email address",
	// 			},
	// 		},
	// 		holder: "Email",
	// 		type: "email",
	// 		error: errors.email?.message,
	// 	},
	// 	{ name: "phone", register: register, validation: { require: "phone number is required", minLength: { value: 10, message: "Phone number should be 10-digits" }, maxLength: { value: 10, message: "Phone number should be 10-digits" } }, holder: "Phone", type: "number", error: errors.phone?.message },
	// ];

	return (
		<div className="border rounded-xl mt-8 lg:absolute lg:w-[38%] lg:right-0 lg:top-0 lg:mt-0">
			<p className="text-sm font-bold m-6">Enter your details for your $220 conveyancing voucher and a free contract review</p>
			<form onSubmit={handleSubmit(onSubmit)} className="px-4">
				<div className="flex flex-col mb-4">
					<label htmlFor="firstname" className="ml-1 mb-1  font-medium text-sm">
						First Name<span className="text-red-500">*</span>
					</label>
					<input {...register("firstname", { required: "Firstname is required" })} type="text" id="firstname" className={`border outline-none rounded-lg py-2 px-4 ${errors.firstname ? "border-red-600" : "focus:border-blue-600"} `} />
					{errors.firstname && <p className="ml-1 mt-1 text-xs text-red-500 leading-tight ">{`* ${errors.firstname.message}`}</p>}
				</div>
				<div className="flex flex-col mb-4">
					<label htmlFor="lastname" className="ml-1 mb-1  font-medium text-sm">
						Last Name<span className="text-red-500">*</span>
					</label>
					<input {...register("lastname", { required: "Last name is required" })} type="text" id="lastname" className={`border outline-none rounded-lg py-2 px-4 ${errors.lastname ? "border-red-600" : "focus:border-blue-600"} `} />
					{errors.lastname && <p className="ml-1 mt-1 text-xs text-red-500 leading-tight ">{`* ${errors.lastname?.message}`}</p>}
				</div>
				<div className="flex flex-col mb-4">
					<label htmlFor="email" className="ml-1 mb-1  font-medium text-sm">
						Email<span className="text-red-500">*</span>
					</label>
					<input
						{...register("email", {
							required: "Email is required",
							pattern: {
								value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
								message: "Email should be in the correct format",
							},
						})}
						type="email"
						id="email"
						className={`border outline-none rounded-lg py-2 px-4 ${errors.email ? "border-red-600" : "focus:border-blue-600"} `}
					/>
					{errors.email && <p className="ml-1 mt-1 text-xs text-red-500 leading-tight ">{`* ${errors.email?.message}`}</p>}
				</div>
				<div className="flex flex-col mb-4">
					<label htmlFor="phone" className="ml-1 mb-1  font-medium text-sm">
						Phone<span className="text-red-500">*</span>
					</label>
					<input
						{...register("phone", {
							required: "phone number is required",
							minLength: {
								value: 10,
								message: "Phone number should be 10-digits",
							},
							maxLength: {
								value: 10,
								message: "Phone number should be 10-digits",
							},
						})}
						type="number"
						id="phone"
						className={`border outline-none rounded-lg py-2 px-4 ${errors.phone ? "border-red-600" : "focus:border-blue-600"} `}
					/>
					{errors.phone && <p className="ml-1 mt-1 text-xs text-red-500 leading-tight ">{`* ${errors.phone?.message}`}</p>}
				</div>
				<div className="flex flex-col mb-6 relative">
					<label htmlFor="state" className="ml-1 mb-1  font-medium text-sm">
						State<span className="text-red-500">*</span>
					</label>
					<select defaultValue="" {...register("state", { required: "State is required" })} id="state" className={`border outline-none rounded-lg py-2 px-4 ${errors.state ? "border-red-600" : "focus:border-blue-600"} `}>
						<option value="" disabled>
							Select your state
						</option>
						<option value="VIC">VIC</option>
						<option value="NSW">NSW</option>
					</select>
					{errors.state && <p className="ml-1 mt-1 text-xs text-red-500 leading-tight ">{`* ${errors.state.message}`}</p>}
				</div>
				<div className="flex flex-col ">
					<label htmlFor="comment" className="ml-1 mb-1  font-medium text-sm">
						Comment or message
					</label>
					<textarea {...register("comment")} id="comment" placeholder="Add a message" className="border outline-none rounded-lg pt-2 p-3 focus:border-blue-600 placeholder:text-light-black"></textarea>
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

export default RedeemOfferForm;
