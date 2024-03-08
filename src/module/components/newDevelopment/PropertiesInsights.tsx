import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const PropertiesInsights = (props: any) => {
	return (
		<>
			<h3 className="text-18px font-bold pt-8">Insights on {props.area}</h3>
			<ul className="flex flex-col gap-3 my-10 w-full">
				<li className="p-4 border rounded-lg cursor-pointer flex justify-between items-center shadow-sm">
					<h3 className="text-base font-bold">Meet the Neighbours near {props.area}</h3>
					<IoIosArrowDown />
				</li>
				<li className="p-4 border rounded-lg cursor-pointer flex justify-between items-center shadow-sm">
					<h3 className="text-base font-bold">{props.area} Suburb Trends</h3>
					<IoIosArrowDown />
				</li>
			</ul>
		</>
	);
};

export default PropertiesInsights;
