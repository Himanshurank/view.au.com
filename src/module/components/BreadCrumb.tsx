import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const BreadCrumb = (props: any) => {
	console.log(props);
	return (
		<div className="flex gap-3 text-sm pb-1.5 overflow-x-hidden text-light-black">
			<ul>
				{/* {props.map((link: any) => {
					return (
						<div key={link.position}>
							<li>
								<a href={link.item}>{link.name}</a>
							</li>
						</div>
					);
				})} */}
			</ul>
		</div>
	);
};

export const getServerSideProps = async () => {
	const response = await fetch("http://localhost:8000/breadcrumb");
	const resData = await response.json();
	return {
		props: { link: resData },
	};
};

export default BreadCrumb;
