interface Iprops {
	head: string;
}

const TitleContent = (props: Iprops) => {
	return <h2 className="text-2xl font-bold text-center mb-3 lg:mb-6 lg:text-left">{props.head}</h2>;
};

export default TitleContent;
