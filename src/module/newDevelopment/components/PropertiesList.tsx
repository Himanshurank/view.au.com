import Image from "next/image";
import noImage from "../../../../public/assets/common/no-image.png";
import Accommodation from "@/shared/components/Accommodation";

const PropertiesList = (props: any) => {
	const PROPERTY_FEATURES = {
		bathrooms: props.property.bathrooms,
		bedrooms: props.property.bedrooms,
		carSpaces: props.property.carSpaces,
		propertyType: props.property.discr,
	};

	const selectPropertyImage = () => {
		if (props.property.files.thumbnail) {
			return <Image src={props.property.files.thumbnail[0].url} layout="fill" objectFit="cover" alt={props.property.files.thumbnail.type} />;
		} else {
			return <Image src={noImage} layout="fill" objectFit="cover" alt="no image" />;
		}
	};
	return (
		<li className="border flex p-4 rounded-lg mb-4 shadow-sm flex-col lg:flex-row justify-between">
			<div className="flex">
				<div className="w-20 h-20 overflow-hidden relative rounded-lg">{selectPropertyImage()}</div>
				<div className="w-auto ml-4 ">
					<p className="text-18px font-bold ">{props.property.title}</p>
					<p className="text-base font-normal text-light-black">{props.property.priceDisplay === "Contact for price" ? "Under Offer" : props.property.priceDisplay}</p>
					<div className="flex text-light-black  text-sm items-center">
						<Accommodation features={PROPERTY_FEATURES} className="text-xs -ml-2 mt-1" />
					</div>
				</div>
			</div>

			{props.property.files.floorPlan && (
				<a href="#" className="text-sm font-medium pt-4 flex items-end text-primary-blue hover:underline">
					Request Floorplan
				</a>
			)}
		</li>
	);
};

export default PropertiesList;
