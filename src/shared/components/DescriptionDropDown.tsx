import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const DescriptionDropDown = (props: any) => {
	const [isShowDescription, setIsShowDescription] = useState(false);
	const [height, setHeight] = useState<string>("");
	const scrollHeightRef = useRef<any>();

	useEffect(() => {
		let newHeight: string = "";
		if (scrollHeightRef.current) {
			newHeight = isShowDescription ? `${scrollHeightRef.current.scrollHeight}px` : "0px";
		}
		setHeight(newHeight);
	}, [isShowDescription]);

	const onShowDescription = () => {
		setIsShowDescription(!isShowDescription);
	};

	return (
		<div className={`${props.classes} border-b relative`}>
			<div ref={scrollHeightRef} className={`overflow-hidden transition-all duration-500 ease-in-out ${props.globalStyle ? "h-200px" : "h-40 lg:h-48"}`} style={{ height: isShowDescription ? `${height}` : "" }}>
				<div className={`${props.globalStyle ? "property-description" : "leading-7"} whitespace-pre-line `} dangerouslySetInnerHTML={{ __html: props.description }} />
			</div>
			<div className={`w-full h-40 absolute bg-gradient-to-t ${isShowDescription && "bg-none"} from-white to-transparent bottom-14`}></div>
			<button className={`${props.globalStyle ? "" : "mt-2 lg:mt-4"} flex items-center gap-2 text-primary-blue  ${!isShowDescription ? "property-description-read-more" : ""}`} onClick={onShowDescription}>
				Read Less
				<span className={isShowDescription ? "rotate-180" : ""}>
					<IoIosArrowDown />
				</span>
			</button>
		</div>
	);
};

export default DescriptionDropDown;