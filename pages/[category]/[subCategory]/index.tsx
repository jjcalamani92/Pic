import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import {
	HeadingPrimary,
	Layout,
	LayoutProductlist,
	Spinner01
} from "../../../components";
import { useRouter } from "next/router";
import { IProduct } from "../../../src/interfaces";
import { gql, useQuery } from "@apollo/client";
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

	console.log(data);
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

export async function getStaticPaths(ctx) {
	const { data } = await client.query({
		query: wearsQuery
	});
	const paths = data.wears.map((wear) => ({
		params: { category: wear.category, subCategory: wear.subCategory }
	}));
	return {
		paths,
		fallback: false
	};
}

// export const getStaticPaths: GetStaticPaths = () => {
// 	const paths = [
// 		{ params: { category: "hombre", subCategory: "chamarras" } },
// 		{ params: { category: "hombre", subCategory: "poleras" } },
// 		{ params: { category: "mujer", subCategory: "leggins" } }
// 	];
// 	return {
// 		paths,
// 		fallback: false // false or 'blocking',
// 	};
// };

export async function getStaticProps({ params }) {
	const { subCategory = "" } = params as { subCategory: string };
	return {
		props: {
			subCategory
		},
		revalidate: 60 * 60 * 24
	};
}

// export async function getStaticProps() {
// 	const { data } = await client.query({
// 		query: wearsQuery
// 	});
// 	return {
// 		props: {
// 			wears: data.wears
// 		}
// 	};
// }

export default SubCategoryPage;
