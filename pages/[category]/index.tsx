import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import {
	HeadingSecondary,
	Layout,
	LayoutProductlist,
	Spinner01
} from "../../components";
import { GET_WEARS, wearsQuery } from "../../src/gql/graphql";
import { client } from "../_app";
import { useQuery } from "@apollo/client";
import { IProduct } from "../../src/interfaces";

interface Props {
	category: string;
}

const CategoryPage: NextPage<Props> = ({ category }) => {
	const { loading, error, data } = useQuery(GET_WEARS, {
		variables: { category: `${category}` }
	});
	if (loading) return <Spinner01 />;
	return (
		<Layout
			title={"Choco - Stores"}
			pageDescription={"Encuentra tu ropa favorita"}
		>
			<HeadingSecondary category={category} />
			<LayoutProductlist products={data.wearByCategory} />
		</Layout>
	);
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
	const { data } = await client.query({
		query: wearsQuery
	});
	const paths = data.wears.map((wear: IProduct) => ({
		params: { category: wear.category }
	}));
	return {
		paths,
		fallback: false
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { category = "" } = params as { category: string };
	return {
		props: {
			category
		},
		revalidate: 60 * 60 * 24
	};
};
export default CategoryPage;
