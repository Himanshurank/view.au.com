import Image from "next/image";
import React from "react";
import emailIcon from "../../../public/assets/conveyancing/email.svg";
import { FieldError, FieldValues, useForm } from "react-hook-form";
import InputField from "./InputField";
import Button from "./buttons/Button";

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
	} = useForm<FormErrors | any>();

	const onSubmit = (data: any) => {
		console.log(data);
	};

	const isSpaceNotAllowed = (value: string | undefined) => {
		if (!value || value.trim() === "") {
			return "Not Allow Space";
		}
		if (value !== value.trimStart()) {
			return "Not Allow Space";
		}
		return true;
	};

	return (
		<div className="border rounded-xl mt-8 lg:absolute lg:w-[38%] lg:right-0 lg:top-0 lg:mt-0">
			<p className="text-sm font-bold m-6">Enter your details for your $220 conveyancing voucher and a free contract review</p>
			<form onSubmit={handleSubmit(onSubmit)} className="px-4">
				<InputField
					label="First Name"
					type="text"
					name="firstname"
					error={errors.firstname?.message}
					register={{
						...register("firstname", {
							required: "Firstname is required",
							validate: isSpaceNotAllowed,
						}),
					}}
				/>
				<InputField
					label="Last Name"
					type="text"
					name="lastname"
					error={errors.lastname?.message}
					register={{
						...register("lastname", {
							required: "Lastname is required",
							validate: isSpaceNotAllowed,
						}),
					}}
				/>
				<InputField
					label="Email"
					name="email"
					type="email"
					error={errors.email?.message}
					register={{
						...register("email", {
							required: "Email is required",
							pattern: {
								value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
								message: "Email should be in the correct format",
							},
						}),
					}}
				/>
				<InputField
					label="Phone"
					name="phone"
					type="number"
					error={errors.phone?.message}
					register={{
						...register("phone", {
							required: "Phone number is required",
							minLength: {
								value: 10,
								message: "Phone number should be 10-digits",
							},
							maxLength: {
								value: 10,
								message: "Phone number should be 10-digits",
							},
						}),
					}}
				/>
				<div className="flex flex-col mb-6 relative pb-1">
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
					{errors.state && <p className="-bottom-4 ml-1 mt-1 text-xs text-red-500 leading-tight absolute">{`* ${errors.state.message}`}</p>}
				</div>
				<div className="flex flex-col ">
					<label htmlFor="comment" className="ml-1 mb-1  font-medium text-sm">
						Comment or message
					</label>
					<textarea {...register("comment")} id="comment" placeholder="Add a message" className="border outline-none rounded-lg pt-2 p-3 focus:border-blue-600 placeholder:text-light-black"></textarea>
				</div>
				<div className="mt-5 mb-3 lg:mt-6">
					<Button buttonType="submit" classes="py-2 font-bold flex justify-center items-center w-full">
						<Image src={emailIcon} alt="email icon" />
						<p className="px-2">Redeem Offer</p>
					</Button>
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
