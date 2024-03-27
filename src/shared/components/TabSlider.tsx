import React from "react";

interface IProps {
	tabs: string;
}

const TabSlider = (props: IProps) => {
	return (
		<div className="p-4 relative font-bold text-sm border-b whitespace-nowrap">
			<a href="#">{props.tabs}</a>
			<div className="w-1/4 h-1 bg-primary-blue rounded-t-full absolute bottom-0 left-1/3"></div>
		</div>
	);
};

export default TabSlider;
