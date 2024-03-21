import React, { useEffect, useRef, useState } from "react";
import starIcon from "../../../public/assets/conveyancing/star.svg";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import DropDown from "./DropDown";

const CustomerFeedback = (props: any) => {
	return (
		<div className="border rounded-xl p-4 shadow-sm bg-white h-fit">
			<div className="flex justify-between mb-4">
				<div className="flex gap-1">
					{[...Array(5)].map((e, i) => (
						<Image key={i} src={starIcon} alt="star icon" />
					))}
				</div>
				<p className="text-xs font-normal text-light-black">{props.feedBack.time}</p>
			</div>
			<DropDown description={props.feedBack.comment} className="border-none" defaultHeight="75px" shadow={false} globalStyle={true} buttonName="See More" />

			<div className="bg-white">
				<p className="text-sm font-bold mt-4">{props.feedBack.name}</p>
			</div>
		</div>
	);
};

export default CustomerFeedback;
