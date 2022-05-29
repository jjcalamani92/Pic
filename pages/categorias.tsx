import { NextPage } from "next";
import { CategoryPreviews, Layout } from "../components";
import { wearsQuery } from "../src/gql/graphql";
import { IProduct } from "../src/interfaces";
import { client } from "./_app";
interface Props {
	wears: IProduct;
}

const CategoryPage: NextPage<Props> = ({ wears }) => {
	return (
		<Layout
			title={"Choco - Stores"}
			pageDescription={"Encuentra tu ropa favorita"}
		>
			<CategoryPreviews />
		</Layout>
	);
};

export async function getStaticProps() {
	const { data } = await client.query({
		query: wearsQuery
	});
	return {
		props: {
			wears: data.wears
		}
	};
}

export default CategoryPage;
