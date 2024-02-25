import Footer from "./Footer";
import Navbar from "./Navbar";

export interface IProps {
	children: React.ReactNode;
}

const Layout: React.FC<IProps> = (props) => {
	return (
		<>
			<Navbar />
			<div className="h-auto mx-auto p-4 text-primary-black lg:max-w-1200px lg:px-0 lg:py-2">
				{props.children}
				<Footer />
			</div>
		</>
	);
};

export default Layout;
