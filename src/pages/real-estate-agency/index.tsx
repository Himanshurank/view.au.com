import { useRouter } from "next/router";
import React, { useEffect } from "react";

const FindAgentPage = () => {
	const router = useRouter();

	useEffect(() => {
		router.push("/real-estate-agency/biggin-scott-richmond-4326");
	}, []);
	return <div>Find Agent Page</div>;
};

export default FindAgentPage;
