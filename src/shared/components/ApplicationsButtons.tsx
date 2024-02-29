import React from "react";
import appStoreButton from "../../../public/assets/mobile/appStoreLogo.svg";
import playStoreButton from "../../../public/assets/mobile/playStoreLogo.svg";
import Image from "next/image";

const ApplicationsButtons = () => {
	return (
		<>
			<a href="#" className="w-40 h-14 z-10">
				<Image src={appStoreButton} alt="app store button" />
			</a>
			<a href="#" className="w-44 h-14 z-10">
				<Image src={playStoreButton} alt="app store button" />
			</a>
		</>
	);
};

export default ApplicationsButtons;
