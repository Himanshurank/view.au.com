import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const PropertyDescription = (props: any) => {
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
		<>
			<div ref={scrollHeightRef} className="overflow-hidden transition-all duration-500 ease-in-out " style={{ height: isShowDescription ? `${height}` : "200px" }}>
				<div className="property-description" dangerouslySetInnerHTML={{ __html: props.description }} />
			</div>
			<button className={`flex items-center gap-2 text-primary-blue ${!isShowDescription ? "property-description-read-more" : ""}`} onClick={onShowDescription}>
				Read Less{" "}
				<span className={isShowDescription ? "rotate-180" : ""}>
					<IoIosArrowDown />
				</span>
			</button>
		</>
	);
};

export default PropertyDescription;
