import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export interface IProps {
	children: React.ReactNode;
}

const Layout: React.FC<IProps> = (props) => {
	const [isShowSidebar, setIsShowSIdebar] = useState(false);

	const sidebarToggle = () => {
		setIsShowSIdebar(!isShowSidebar);
	};
	return (
		<>
			<Navbar sidebarToggle={sidebarToggle} isShowSidebar={isShowSidebar} />
			<div className="h-auto mx-auto md:p-4 pb-0 text-primary-black lg:max-w-1200px lg:p-0">
				{isShowSidebar && <Sidebar />}
				<main className="p-4 lg:px-0 lg:py-8">{props.children}</main>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
