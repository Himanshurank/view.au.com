import Layout from "@/shared/components/Layout";
import { useRouter } from "next/router";
import { useEffect, useReducer } from "react";

export default function Home() {
	const router = useRouter();
	useEffect(() => {
		router.push("/mobile");
	}, []);
	return (
		<>
			<div>Home</div>
		</>
	);
}
