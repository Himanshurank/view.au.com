import React from "react";

interface IProps {
	tagLine: string;
}

const SubTitleContent = (props: IProps) => {
	return (
		<>
			<p className="text-base font-normal mb-6 text-center text-light-black lg:text-left">{props.tagLine}</p>
		</>
	);
};

export default SubTitleContent;
