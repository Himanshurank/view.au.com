import React, { useEffect } from "react";
import { NextPageContext } from "next";
import { useRouter } from "next/router";

export const getServerSideProps = async (context: NextPageContext) => {
	const response1 = await fetch("http://localhost:8000/props");
	const props = await response1.json();

	if (!response1.ok) {
		return;
	}
	return {
		props: {
			property: props.developmentDetail,
			suburb: props.suburbProfile,
			breadcrumb: props.breadcrumb,
		},
	};
};

const NewDevelopmentPage = (props: any) => {
	const router = useRouter();
	useEffect(() => {
		router.push("/newdevelopment/nsw-castle-hill-2154/properties-detail/grand-reve");
	});
	return <div>New Development Page</div>;
};

export default NewDevelopmentPage;
