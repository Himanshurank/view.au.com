import React from "react";
import starIcon from "../../../public/assets/conveyancing/star.svg";
import Image from "next/image";

const CustomerFeedback = (props: any) => {
	return (
		<div className="bg-light-gray rounded-xl">
			<div className="mx-4 pt-6 mb-4 lg:pl-10 lg:mx-auto lg:text-2xl lg:mt-10 lg:mb-6 ">
				<h6 className="text-base font-bold ">{props.title}</h6>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pb-6 px-4">
				{props.feedBacks.map((feedback: any) => (
					<div key={feedback.name} className="border rounded-xl p-4 shadow-sm bg-white">
						<div className="flex justify-between mb-4">
							<div className="flex gap-1">
								<Image src={starIcon} alt="star icon" />
								<Image src={starIcon} alt="star icon" />
								<Image src={starIcon} alt="star icon" />
								<Image src={starIcon} alt="star icon" />
								<Image src={starIcon} alt="star icon" />
							</div>
							<p className="text-xs font-normal text-light-black">{feedback.time}</p>
						</div>
						<div className="max-h-[75px] overflow-hidden">
							<p>{feedback.comment}</p>
						</div>
						<div>
							<button className="text-primary-blue mt-2 flex gap-2 items-center">{"Show more >"}</button>
							<h6 className="text-sm font-bold mt-4">{feedback.name}</h6>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default CustomerFeedback;
