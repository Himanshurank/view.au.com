interface IProps {
	children: string | React.ReactNode;
	buttonType: "button" | "submit" | "reset";
	classes?: string;
	onclick?: () => void;
}

const Button = (props: IProps) => {
	return (
		<button onClick={props.onclick} type={props.buttonType} className={`bg-primary-blue text-white hover:bg-btn-hover-blue font-bold rounded-lg ${props.classes}`}>
			{props.children}
		</button>
	);
};

export default Button;
