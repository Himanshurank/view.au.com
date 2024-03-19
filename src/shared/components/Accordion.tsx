import React, { useEffect, useRef, useState } from "react";

const Accordion = (props: any) => {
	const [isShowFAQs, setIsShowFAQs] = useState(false);
	const [height, setHeight] = useState<string>("0px");
	const scrollHeightRef = useRef<any>();

	const renderAnswer = () => {
		setIsShowFAQs(!isShowFAQs);
	};

	useEffect(() => {
		let newHeight: string = "";
		if (scrollHeightRef.current) {
			newHeight = isShowFAQs ? `${scrollHeightRef.current.scrollHeight}px` : "0px";
		}
		setHeight(newHeight);
	}, [isShowFAQs]);

	return (
		<div className="border-b ">
			<div className={"flex justify-between items-center py-3.5 cursor-pointer"} onClick={renderAnswer}>
				<h6 className="font-bold ">{props.list.qus}</h6>
				<span className="text-2xl font-medium pb-1">{isShowFAQs ? "-" : "+"}</span>
			</div>
			<div ref={scrollHeightRef} className="accordion overflow-hidden transition-all duration-500" style={{ height: isShowFAQs ? `${height}` : "0px" }} dangerouslySetInnerHTML={{ __html: props.list.ans }} />
		</div>
	);
};

export default Accordion;
