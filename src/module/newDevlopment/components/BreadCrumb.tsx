import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const BreadCrumb = (props: any) => {
	return (
		<div className="flex gap-3 pb-8 overflow-x-auto text-light-black">
			<ul className="flex items-center gap-2 ">
				{props.breadCrumb?.map((link: any, i: number) => {
					return (
						<div key={link.position}>
							<li className="flex items-center gap-2 whitespace-nowrap ">
								<a className={props.breadCrumb.length - 1 === i ? "text-black w-full" : ""} href={link.item}>
									{link.name}
								</a>
								{props.breadCrumb.length - 1 !== i && <IoIosArrowForward />}
							</li>
						</div>
					);
				})}
			</ul>
		</div>
	);
};

export default BreadCrumb;
