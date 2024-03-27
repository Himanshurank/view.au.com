interface IPerformance {
	value: number | string;
	name: string;
}

interface IProps {
	performance: IPerformance;
	className?: string;
	valueClassName?: string;
}

const AgencyPerformance = (props: IProps) => {
	return (
		<div key={props.performance.name} className={`pb-4 lg:pb-0 flex-1 ${props.className}`}>
			<p className={`text-20px font-bold ${props.valueClassName}`}>{props.performance.value}</p>
			<p className="text-sm font-normal">{props.performance.name}</p>
		</div>
	);
};

export default AgencyPerformance;
