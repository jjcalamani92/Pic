import type { NextPage } from "next";
import {
	Layout,
	LayoutHome,
	Practice,
	ProductOverviews01
} from "../components";

const Index: NextPage = () => {
	return (
		<Layout
			title={"Piccoletti - Store"}
			pageDescription={"Encuentra tu ropa favorita"}
		>
			{/* <LayoutHome /> */}
			{/* <Practice /> */}
		</Layout>
	);
};

export default Index;
