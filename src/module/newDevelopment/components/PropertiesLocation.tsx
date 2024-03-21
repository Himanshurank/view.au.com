const PropertiesLocation = (props: any) => {
	return (
		<div className="mb-4">
			<h6 className="text-sm font-bold">{props.locationDetail.title}</h6>
			<p className="text-xs font-normal">{props.locationDetail.location}</p>
		</div>
	);
};

export default PropertiesLocation;
