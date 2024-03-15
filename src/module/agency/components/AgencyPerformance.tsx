import React from "react";

const AgencyPerformance = (props: any) => {
	return (
		<div className="px-6 py-4 mt-6 w-full flex flex-col gap-2 bg-light-gray rounded-lg">
			<p className="text-sm font-bold">{props.title}</p>
			<div className="w-full flex flex-col lg:flex-row">
				{props.performance.map((sales: any, i: number) => (
					<div key={sales.name} className={`pb-4 lg:pb-0 flex-1 ${props.performance.length - 1 !== i && "border-b lg:border-b-0 lg:border-r"} ${i !== 0 && "lg:px-4"}`}>
						<p className={`text-20px font-bold ${i !== 0 && "mt-4 lg:mt-0"}`}>{sales.value}</p>
						<p className="text-sm font-normal">{sales.name}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default AgencyPerformance;
