import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import {
	HeadingPrimary,
	Layout,
	LayoutProductlist,
	Spinner01
} from "../../../components";
import { useRouter } from "next/router";
import { IProduct } from "../../../src/interfaces";
import { useQuery } from "@apollo/client";
import {
	GET_WEARS_BY_CATEGORY_AND_SUBCATEGORY,
	wearsQuery
} from "../../../src/gql/graphql";
import { client } from "../../_app";

interface Props {
	wears: IProduct[];
}

const SubCategoryPage: NextPage<Props> = ({ wears }) => {
	const router = useRouter();
	const { category, subCategory } = router.query;
	const { loading, error, data } = useQuery(
		GET_WEARS_BY_CATEGORY_AND_SUBCATEGORY,
		{
			variables: { category: `${category}`, subCategory: `${subCategory}` }
		}
	);
	if (loading) return <Spinner01 />;

	return (
		<Layout
			title={"Choco - Stores"}
			pageDescription={"Encuentra tu ropa favorita"}
		>
			<HeadingPrimary category={category} subCategory={subCategory} />
			<LayoutProductlist products={data.wearByCategoryAndSubCategory} />
		</Layout>
	);
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
	const { data } = await client.query({
		query: wearsQuery
	});
	const paths = data.wears.map((wear: IProduct) => ({
		params: { category: wear.category, subCategory: wear.subCategory }
	}));
	return {
		paths,
		fallback: false
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { subCategory = "" } = params as { subCategory: string };
	return {
		props: {
			subCategory
		},
		revalidate: 60 * 60 * 24
	};
};

export default SubCategoryPage;
