import { IBreadcrumb } from "@/module/agency/agency.interface";
import { IoIosArrowForward } from "react-icons/io";

interface IProps {
	breadCrumb: IBreadcrumb;
	className?: string;
	showArrow?: boolean;
}

const BreadCrumb = (props: IProps) => {
	return (
		<li className="flex items-center gap-3 whitespace-nowrap text-sm">
			<a className={props.className} href={props.breadCrumb.urlPath}>
				{props.breadCrumb.name ? props.breadCrumb.name : props.breadCrumb.displayName}
			</a>
			{props.showArrow && <IoIosArrowForward />}
		</li>
	);
};

export default BreadCrumb;
