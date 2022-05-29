import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ProductOverviews } from "../../components/ProductOverviews";
import { IProduct } from "../../src/interfaces";
import { Layout } from "../../components";

import { connectToDatabase } from "../../src/mongodb";

interface Props {
	product: IProduct;
}

const SlugPage: NextPage<Props> = ({ product }) => {
	return (
		<Layout
			title={`${product.title}`}
			pageDescription={`${product.description}`}
			imageFullUrl={`${product.image[1]}`}
		>
			<ProductOverviews product={product} />
		</Layout>
	);
};

interface ProductSlug {
	slug: string;
}

const getAllProductSlugs = async (): Promise<ProductSlug[]> => {
	const { db } = await connectToDatabase();
	const slugs = await db.collection("wears").find().toArray();
	return slugs;
};

const getProductBySlug = async (slug: string): Promise<IProduct | null> => {
	const { db } = await connectToDatabase();
	const product = await db.collection("wears").findOne({ slug });
	if (!product) {
		return null;
	}
	return JSON.parse(JSON.stringify(product));
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
	const productSlugs = await getAllProductSlugs();

	return {
		paths: productSlugs.map(({ slug }) => ({
			params: {
				slug
			}
		})),
		fallback: "blocking"
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { slug = "" } = params as { slug: string };
	const product = await getProductBySlug(slug);

	if (!product) {
		return {
			redirect: {
				destination: "/",
				permanent: false
			}
		};
	}

	return {
		props: {
			product
		},
		revalidate: 60 * 60 * 24
	};
};

export default SlugPage;
