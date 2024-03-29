import AgencyCard from "@/shared/components/AgencyCard";
import React, { useEffect, useRef, useState } from "react";
import { IAgency } from "../suburb.interface";

interface IProps {
	title: string;
	agencies: IAgency[];
}

const AgencyCardDropDown = (props: IProps) => {
	const [isShowCards, setIsShowCards] = useState(false);
	const [height, setHeight] = useState<string>("");
	const scrollHeightRef = useRef<any>();

	useEffect(() => {
		let newHeight: string = "";
		if (scrollHeightRef.current) {
			newHeight = isShowCards ? `${scrollHeightRef.current.scrollHeight}px` : "0px";
		}
		setHeight(newHeight);
	}, [isShowCards]);

	const onShowCards = () => {
		setIsShowCards(!isShowCards);
	};
	return (
		<>
			<h2 className="text-2xl font-bold mt-8">Local Agencies in {props.title}</h2>
			<div ref={scrollHeightRef} className="flex gap-2 md:grid md:grid-cols-4 md:gap-3 w-full overflow-x-auto mt-4 md:h-60 md:overflow-hidden transition-all duration-500 ease-in-out" style={{ height: isShowCards ? `${height}` : "" }}>
				{props.agencies.map((agency: IAgency) => (
					<AgencyCard key={agency.id} agency={agency} />
				))}
			</div>

			<button onClick={onShowCards} className="px-4 py-2 border font-medium shadow-sm text-black hover:border-b-gray hover:bg-light-gray w-full rounded-lg flex items-center justify-center gap-2 my-5">
				See More
			</button>
		</>
	);
};

export default AgencyCardDropDown;
