import Title from "./Title";

interface IProps {
	title: string;
	subTitle: string;
}

const Information = (props: IProps) => {
	return (
		<>
			<Title head={props.title} />
			<p className="text-base font-normal mb-6 text-center text-light-black lg:text-left">{props.subTitle}</p>
		</>
	);
};

export default Information;
