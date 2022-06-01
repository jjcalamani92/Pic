import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import {
	ProductOverviews,
	ProductOverviews01,
	ProductOverviews02,
	ProductOverviews03
} from "../../components/ProductOverviews";
import { IProduct } from "../../src/interfaces";
import { Layout, Spinner01 } from "../../components";
import { useQuery } from "@apollo/client";
import { PRODUCTS, PRODUCT_BY_SLUG } from "../../src/gql/graphql";
import { client } from "../_app";

interface Props {
	slug: string;
}

const SlugPage: NextPage<Props> = ({ slug }) => {
	const { loading, error, data } = useQuery(PRODUCT_BY_SLUG, {
		variables: { slug: `${slug}` }
	});
	if (loading) return <Spinner01 />;
	// console.log(data.wearBySlug);
	const product = data.wearBySlug;
	return (
		<Layout
			title={`${product.title}`}
			pageDescription={`${product.description}`}
			imageFullUrl={`${product.image[1]}`}
		>
			<ProductOverviews03 product={product} />
			{/* <ProductOverviews02 product={product} /> */}
			{/* <ProductOverviews01 product={product} />*/}
			<ProductOverviews product={product} />
		</Layout>
	);
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
	const { data } = await client.query({
		query: PRODUCTS
	});

	const paths = data.wears.map((wear: IProduct) => ({
		params: { slug: wear.slug }
	}));
	// console.log(paths)
	return {
		paths,
		fallback: false
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { slug = "" } = params as { slug: string };
	return {
		props: {
			slug
		},
		revalidate: 60 * 60 * 24
	};
};
export default SlugPage;
