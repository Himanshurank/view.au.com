import React, { useEffect, useRef, useState } from "react";

const Accordion = () => {
	const accordionFAQsList = [
		{
			qus: "What is conveyancing?",
			ans: "Conveyancing is the process of moving the legal ownership of property or land from one person or entity to another.",
			height: "40px",
		},
		{
			qus: "What is a conveyancer?",
			ans: "A conveyancer is a property transfer specialist. They prepare the legal documents that form part of real estate transactions such as the purchase and sale of properties, settlements and title transfers.",
			height: "40px",
		},
		{
			qus: "How much does it cost?",
			ans: ["Whether you are buying or selling property, our services are set at a fixed price.", "The only cost variable relates to disbursements.", "We don't want you to be worried about the word 'disbursements' - it's just an everyday legal term used to describe out of pocket expenses and all property transactions in Australia will incur some of these.", "We'll always be upfront about your conveyancing costs, so as soon as you ask us to help you, we can provide you with an estimate of how much your disbursements are likely to be.", "These out of pocket costs all depend on the type of property you have bought or sold and where that property is located."],
			height: "244px",
		},
		{
			qus: "What types of conveyancing does Settle Easy do?",
			ans: ["Our experienced team specialise in all types of conveyancing including:", ["residential properties", "large scale off the plan property developments", "retirement village residences", "commercial properties", "properties within trust structures", "properties for self-managed superannuation funds (SMSFs)."], ,],
			height: "156px",
		},
		{
			qus: "How will I know what's happening?",
			ans: ["At Settle Easy, we are committed to keeping you updated every step of the way.", "As a registered customer, you will be able to track each stage of your transaction and you will have a dedicated conveyancer to guide you through the process and answer any questions you may have."],
			height: "96px",
		},
	];
	const [isShowFAQs, setIsShowFAQs] = useState(Array(accordionFAQsList.length).fill(false));
	const [height, setHeight] = useState<string[]>(Array(accordionFAQsList.length).fill("0px"));
	const scrollHeightRef = useRef<HTMLDivElement[] | null[]>([]);

	const showFAQs = (i: number) => {
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
		<div>
			{accordionFAQsList.map((list, i) => (
				<div key={i} className={i >= accordionFAQsList.length - 1 ? "overflow-hidden" : "border-b overflow-hidden"}>
					<div className={"flex justify-between items-center py-3.5 cursor-pointer"} onClick={() => showFAQs(i)}>
						<h6 className="font-bold ">{list.qus}</h6>
						<span className="text-2xl font-medium pb-1">{isShowFAQs[i] ? "-" : "+"}</span>
					</div>
					<div ref={(el) => (scrollHeightRef.current[i] = el)} className="overflow-hidden transition-all duration-500" style={{ height: isShowFAQs[i] ? `${height[i]}` : "0px" }}>
						{Array.isArray(list.ans) ? (
							list.ans.map((item, index) =>
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
		</div>
	);
};

export default Accordion;
