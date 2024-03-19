import React, { useEffect, useRef, useState } from "react";
import starIcon from "../../../public/assets/conveyancing/star.svg";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

const CustomerFeedback = (props: any) => {
	const [isShowComment, setIsShowComment] = useState(false);
	const [height, setHeight] = useState<string>("0px");
	const scrollHeightRef = useRef<any>();

	useEffect(() => {
		let newHeight: string = "";
		if (scrollHeightRef.current) {
			newHeight = isShowComment ? `${scrollHeightRef.current.scrollHeight}px` : "0px";
		}
		setHeight(newHeight);
	}, [isShowComment]);

	const showComment = () => {
		setIsShowComment(!isShowComment);
	};

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
			<div ref={scrollHeightRef} className="overflow-hidden transition-all duration-500 ease-in-out" style={{ height: isShowComment ? `${height}` : "75px" }}>
				<p>{props.feedBack.comment}</p>
			</div>

			<div className="bg-white">
				<button className="text-primary-blue mt-2 flex gap-2 items-center" onClick={showComment}>
					Show more<span className={isShowComment ? "rotate-180" : ""}>{<IoIosArrowDown />}</span>
				</button>
				<p className="text-sm font-bold mt-4">{props.feedBack.name}</p>
			</div>
		</div>
	);
};

export default CustomerFeedback;
