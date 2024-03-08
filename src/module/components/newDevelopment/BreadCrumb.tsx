import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

interface IBreadCrumb {
	"@type": string;
	item: string;
	position: number;
	name: string;
	id: string;
}

const BreadCrumb = () => {
	const [breadCrumbData, setBreadCrumbData] = useState<IBreadCrumb[] | any>([]);

	useEffect(() => {
		const fetchData = async () => {
			if (breadCrumbData.length === 0) {
				let crumb = await fetch("http://localhost:8000/breadcrumb");
				const data = await crumb.json();
				setBreadCrumbData(data);
			}
		};

		fetchData();
	}, [breadCrumbData]);

	return (
		<div className="flex gap-3 pb-8 overflow-x-auto  text-light-black">
			<ul className="flex items-center gap-2 ">
				{breadCrumbData?.map((link: any, i: number) => {
					return (
						<div key={link.position}>
							<li className="flex items-center gap-2 whitespace-nowrap ">
								<a className={breadCrumbData.length - 1 === i ? "text-black w-full" : ""} href={link.item}>
									{link.name}
								</a>
								{breadCrumbData.length - 1 !== i && <IoIosArrowForward />}
							</li>
						</div>
					);
				})}
			</ul>
		</div>
	);
};

export default BreadCrumb;
