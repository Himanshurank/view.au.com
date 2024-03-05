import React, { useEffect, useRef, useState } from "react";
import starIcon from "../../../public/assets/conveyancing/star.svg";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

const CustomerFeedback = (props: any) => {
	const [isShowComment, setIsShowComment] = useState(Array(props.feedBacks.length).fill(false));
	const [height, setHeight] = useState<string[]>([]);
	const scrollHeightRef = useRef<HTMLDivElement[] | null[]>([]);

	useEffect(() => {
		const newHeight: string[] = [];
		scrollHeightRef.current.forEach((ref, i) => {
			if (ref) {
				newHeight[i] = isShowComment[i] ? `${ref.scrollHeight}px` : "0px";
			}
		});
		setHeight(newHeight);
	}, [isShowComment]);

	const showComment = (i: number) => {
		const newShowComment = [...isShowComment];
		newShowComment[i] = !newShowComment[i];
		setIsShowComment(newShowComment);
	};

	return (
		<div className="bg-light-gray rounded-xl">
			<div className="mx-4 pt-6 mb-4 lg:pl-10 lg:mx-auto lg:text-2xl lg:mt-10 lg:mb-6 ">
				<h6 className="text-base font-bold ">{props.title}</h6>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pb-6 px-4">
				{props.feedBacks.map((feedback: any, i: number) => (
					<div key={i} className="border rounded-xl p-4 shadow-sm bg-white h-fit">
						<div className="flex justify-between mb-4">
							<div className="flex gap-1">
								{[...Array(5)].map((e, i) => (
									<Image key={i} src={starIcon} alt="star icon" />
								))}
							</div>
							<p className="text-xs font-normal text-light-black">{feedback.time}</p>
						</div>
						<div ref={(el) => (scrollHeightRef.current[i] = el)} className="overflow-hidden transition-all duration-500 ease-in-out" style={{ height: isShowComment[i] ? `${height[i]}` : "75px" }}>
							<p>{feedback.comment}</p>
						</div>

						<div className="bg-white">
							<button className="text-primary-blue mt-2 flex gap-2 items-center" onClick={() => showComment(i)}>
								Show more<span className={isShowComment[i] ? "rotate-180" : ""}>{<IoIosArrowDown />}</span>
							</button>
							<h6 className="text-sm font-bold mt-4">{feedback.name}</h6>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default CustomerFeedback;
