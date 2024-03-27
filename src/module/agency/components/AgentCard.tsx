import Image from "next/image";
import React from "react";
import { IAgent } from "../agency.interface";

interface IProps {
	agent: IAgent;
}

const AgentCard = (props: IProps) => {
	return (
		<div className="p-6 pt-8 shadow-sm border rounded-lg flex flex-col items-center cursor-pointer ">
			{props.agent.agentPhotoFileName ? (
				<div className="w-24 h-24 relative rounded-full overflow-hidden">
					<Image src={`https://resi.uatz.view.com.au/viewstatic/images/listing/120-w/${props.agent.agentPhotoFileName}`} objectFit="contain" layout="fill" alt="agent photo" />
				</div>
			) : (
				<div className="w-24 h-24 bg-light-gray rounded-full flex justify-center items-center">
					<span className="text-44px font-medium text-primary-black">{props.agent.firstName.charAt(0)}</span>
				</div>
			)}
			<p className="text-sm font-bold pt-2">
				{props.agent.firstName} {props.agent.lastName}
			</p>
			<p className="text-center text-xs font-normal text-light-black pt-2">{props.agent.position}</p>
		</div>
	);
};

export default AgentCard;
