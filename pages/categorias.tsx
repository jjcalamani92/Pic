import { gql } from "@apollo/client";
import { request } from "http";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { CategoryPreviews, Layout } from "../components";
import { wearsQuery } from "../src/gql/graphql";
import { IProduct } from "../src/interfaces";
import { client } from "./_app";
interface Props {
	wears: IProduct;
}

const CategoryPage: NextPage<Props> = ({ wears = [] }) => {
	console.log(wears);
	return (
		<Layout
			title={"Choco - Stores"}
			pageDescription={"Encuentra tu ropa favorita"}
		>
			<pre>{JSON.stringify(wears, null, 2)}</pre>
			<CategoryPreviews />
		</Layout>
	);
};

export async function getStaticProps() {
	const { data } = await client.query({
		query: gql`
			query Wears {
				wears {
					title
					image
					price
					description
					category
					subCategory
				}
			}
		`
	});
	// const { data } = await client.query({
	// query: gql`
	// 	{
	// 		wears {
	// 			title
	// 			image
	// 			price
	// 			description
	// 			category
	// 			subCategory
	// 		}
	// 	}
	// `
	// }
	// );

	return {
		props: {
			wears: data.wears
		}
	};
}

export default CategoryPage;
