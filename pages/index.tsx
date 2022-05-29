import type { NextPage } from "next";
import { Layout, LayoutHome } from "../components";
import { gql, useQuery } from "@apollo/client";

const GET_WEARS = gql`
	# query wears {
	# 	wears {
	# 		title
	# 	}
	# }
	query wearByCategory($category: String!) {
		wearByCategory(category: $category) {
			title
		}
	}
`;

const Index: NextPage = () => {
	// const { data } = useQuery(GET_WEARS);
	const { loading, error, data } = useQuery(GET_WEARS, {
		variables: { category: "Mujer" }
	});
	if (loading) return <p>Loading ...</p>;
	console.log(data);
	return (
		<Layout
			title={"Piccoletti - Store"}
			pageDescription={"Encuentra tu ropa favorita"}
		>
			{/* <h1>Hello {data.greeting.message}!</h1>; */}
			<LayoutHome />
		</Layout>
	);
};

export default Index;
