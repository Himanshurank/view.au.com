import { error } from "console";
import React from "react";

interface IProps {
	name: string;
	type: string;
	holder: string;
	value: string | number;
	error: string;
	onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputElement = (props: IProps) => {
	return (
		<div className="flex flex-col mb-4">
			<label htmlFor={props.name} className="ml-1 mb-1 font-medium text-sm ">
				{props.holder}
				<span className="text-red-500">*</span>
			</label>
			<input name={props.name} value={props.value} type={props.type} id={props.type} className={props.error ? "border-red-600 border outline-none rounded-lg py-2 px-4" : "focus:border-blue-600 border outline-none rounded-lg py-2 px-4"} onChange={props.onchange} />
			<p className="ml-1 mt-1 text-xs text-red-500 leading-tight ">{props.error}</p>
		</div>
	);
};

export default InputElement;
