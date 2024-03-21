import { useState } from "react";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Header from "./Header";

export interface IProps {
	children: React.ReactNode;
}

const Layout: React.FC<IProps> = (props) => {
	return (
		<>
			<Header />
			<div className="h-auto mx-auto md:p-4 pb-0 text-primary-black lg:max-w-1200px lg:p-0 ">
				<main className="py-4 px-4 lg:px-0 lg:py-8 mt-12">{props.children}</main>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
