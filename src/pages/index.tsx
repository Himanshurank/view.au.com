import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
	const router = useRouter();
	// useEffect(() => {
	// 	router.push("/newdevelopment/nsw-castle-hill-2154/properties-detail/grand-reve");
	// }, []);
	return (
		<>
			<div>Home</div>
		</>
	);
}
