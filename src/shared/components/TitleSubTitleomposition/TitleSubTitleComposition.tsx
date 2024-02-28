import React from "react";
import TitleContent from "./TitleContent";
import SubTitleContent from "./SubTitleContent";

interface IProps {
	head: string;
	tagLine: string;
}

const TitleSubTitleComposition = (props: IProps) => {
	return (
		<>
			<TitleContent head={props.head} />
			<SubTitleContent tagLine={props.tagLine} />
		</>
	);
};

export default TitleSubTitleComposition;
