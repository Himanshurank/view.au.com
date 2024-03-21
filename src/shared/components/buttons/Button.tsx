interface IProps {
	children: string | React.ReactNode;
	buttonType: "button" | "submit" | "reset";
	className?: string;
	onclick?: () => void;
}

const Button = (props: IProps) => {
	return (
		<button onClick={props.onclick} type={props.buttonType} className={`bg-primary-blue text-white hover:bg-btn-hover-blue font-bold rounded-lg ${props.className}`}>
			{props.children}
		</button>
	);
};

export default Button;
