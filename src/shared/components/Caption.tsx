import Image from "next/image";
import React from "react";

interface IProps {
	imgUrl: string;
	title: string;
	className?: string;
}

const Caption = (props: IProps) => {
	return (
		<div className="flex items-center gap-1 ">
			<div className="w-4 h-4 relative">
				<Image src={props.imgUrl} layout="fill" alt="icon" />
			</div>
			<p className={`text-xs text-light-black ${props.className}`}>{props.title}</p>
		</div>
	);
};

export default Caption;
