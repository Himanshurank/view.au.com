import React from "react";

interface IProps {
	title: string;
	color: string;
	value: number;
}

const HouseholdChart = (props: IProps) => {
	return (
		<>
			<p className="text-sm">{props.title}</p>
			<div className="h-3 w-full overflow-hidden rounded-full mt-3 mb-4">
				<div className="rounded-full h-full" style={{ width: `${props.value}%`, backgroundColor: props.color }}></div>
			</div>
		</>
	);
};

export default HouseholdChart;
