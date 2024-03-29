import React from "react";

interface IProps {
	title: string;
	schoolLevel: string;
	schoolType: string;
	schoolGender: string;
}

const SchoolInfoCard = (props: IProps) => {
	return (
		<div className="border rounded-lg p-4 w-full shadow-md">
			<p className="w-72 text-base font-bold w-71 md:w-full mb-1">{props.title}</p>
			<p className="text-sm font-normal text-light-black">{props.schoolLevel}</p>
			<div className="flex mt-1">
				<p className="border-r pr-2 text-sm font-normal text-light-black">{props.schoolType}</p>
				<p className="px-2 text-sm font-normal text-light-black">{props.schoolGender}</p>
			</div>
		</div>
	);
};

export default SchoolInfoCard;
