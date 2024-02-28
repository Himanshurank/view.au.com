import MobileBanner from "@/module/mobile/components/MobileBanner";
import Layout from "@/shared/components/Layout";
import React from "react";
import MobileTabletView from "@/module/mobile/components/MobileTabletView/MobileTabletView";

const MobilePage: React.FC = () => {
	return (
		<>
			<MobileBanner />
			<MobileTabletView />
		</>
	);
};

export default MobilePage;
