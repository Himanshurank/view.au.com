import React, { useEffect, useRef, useState } from "react";

const Accordion = (props: any) => {
	const [isShowFAQs, setIsShowFAQs] = useState(Array(props.accordionFAQsList.length).fill(false));
	const [height, setHeight] = useState<string[]>(Array(props.accordionFAQsList.length).fill("0px"));
	const scrollHeightRef = useRef<HTMLDivElement[] | null[]>([]);

	const renderAnswer = (i: number) => {
		const newShowFAQs = [...isShowFAQs];
		newShowFAQs[i] = !newShowFAQs[i];
		setIsShowFAQs(newShowFAQs);
	};

	useEffect(() => {
		const newHeight: string[] = [];
		scrollHeightRef.current.forEach((ref, i) => {
			if (ref) {
				newHeight[i] = isShowFAQs[i] ? `${ref.scrollHeight}px` : "0px";
			}
		});
		setHeight(newHeight);
	}, [isShowFAQs]);

	return (
		<>
			{props.accordionFAQsList.map((list: any, i: number) => (
				<div key={i} className={i >= props.accordionFAQsList.length - 1 ? "overflow-hidden" : "border-b overflow-hidden"}>
					<div className={"flex justify-between items-center py-3.5 cursor-pointer"} onClick={() => renderAnswer(i)}>
						<h6 className="font-bold ">{list.qus}</h6>
						<span className="text-2xl font-medium pb-1">{isShowFAQs[i] ? "-" : "+"}</span>
					</div>
					<div ref={(element) => (scrollHeightRef.current[i] = element)} className="overflow-hidden transition-all duration-500" style={{ height: isShowFAQs[i] ? `${height[i]}` : "0px" }}>
						{Array.isArray(list.ans) ? (
							list.ans.map((item: string[], index: number) =>
								typeof item === "string" ? (
									<p className="text-sm font-normal pr-6 mb-4" key={index}>
										{item}
									</p>
								) : Array.isArray(item) ? (
									<ul key={index} className="list-disc pl-7 text-sm mb-4">
										{item.map((subItem, subIndex) => (
											<li key={subIndex}>{subItem}</li>
										))}
									</ul>
								) : null
							)
						) : (
							<p className="text-sm font-normal pr-6 mb-4">{list.ans}</p>
						)}
					</div>
				</div>
			))}
		</>
	);
};

export default Accordion;
