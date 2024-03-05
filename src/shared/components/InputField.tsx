import React from "react";

interface Iprops {
	name: string;
	label: string;
	type: string;
	error: any;
	register: any;
}

const InputField = (props: Iprops) => {
	return (
		<div className="mb-4">
			<div className="flex flex-col relative pb-1">
				<label htmlFor={props.name} className="ml-1 mb-1  font-medium text-sm">
					{props.label}
					<span className="text-red-500">*</span>
				</label>
				<input {...props.register} type={props.type} className={` border outline-none rounded-lg py-2 px-4 ${props.error ? "border-red-600" : "focus:border-blue-600"} `} />
				{props.error && <p className="-bottom-4 ml-1 mt-1 text-xs text-red-500 leading-tight absolute">{`* ${props.error}`}</p>}
			</div>
		</div>
	);
};

export default InputField;
