import React, { useEffect } from "react";
import { useRouter } from "next/router";

const NewDevelopmentPage = () => {
	const router = useRouter();
	useEffect(() => {
		router.push("/newdevelopment/nsw-castle-hill-2154/properties-detail/grand-reve");
	});
	return <div>New Development Page</div>;
};

export default NewDevelopmentPage;
