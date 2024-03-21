import Image from "next/image";
import bedIcon from "../../../public/assets/newdevelopment/bed.svg";
import bathIcon from "../../../public/assets/newdevelopment/bath.svg";
import parkingCarIcon from "../../../public/assets/newdevelopment/parking.svg";
import { features } from "process";

interface IFeatures {
	bedrooms: number | string;
	bathrooms: number | string;
	carSpaces: number | string;
	propertyType?: string;
}

interface IProps {
	features: IFeatures;
	className?: string;
}

const Accommodation = (props: IProps) => {
	return (
		<div className={`flex text-light-black items-center ${props.className}`}>
			{props.features.bedrooms && props.features.bedrooms !== "0" && (
				<div className={`flex gap-2 justify-between items-center px-2 border-r `}>
					<Image src={bedIcon} alt="Bed icon" />
					<p>{props.features.bedrooms}</p>
				</div>
			)}

			{props.features.bathrooms && props.features.bathrooms !== "0" && (
				<div className={`flex gap-2 justify-between items-center px-2 border-r`}>
					<Image src={bathIcon} alt="Bath icon" />
					<p>{props.features.bathrooms}</p>
				</div>
			)}
			{props.features.carSpaces && props.features.carSpaces !== "0" && (
				<div className={`flex gap-2 justify-between items-center pl-2`}>
					<Image src={parkingCarIcon} alt="parking icon" />
					<p>{props.features.carSpaces}</p>
				</div>
			)}
			{props.features.propertyType && <p className="pl-2">{props.features.propertyType}</p>}
		</div>
	);
};

export default Accommodation;
