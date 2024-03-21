import { IoIosArrowForward } from "react-icons/io";

const BreadCrumb = (props: any) => {
	return (
		<ul className="flex items-center gap-3 pb-4 overflow-x-auto text-light-black ">
			{props.breadCrumb?.map((link: any, i: number) => {
				return (
					<li key={i} className="flex items-center gap-3 whitespace-nowrap text-sm">
						<a className={props.breadCrumb.length - 1 === i ? "text-black w-full" : ""} href={link.item}>
							{link.name}
						</a>
						{props.breadCrumb.length - 1 !== i && <IoIosArrowForward />}
					</li>
				);
			})}
		</ul>
	);
};

export default BreadCrumb;
