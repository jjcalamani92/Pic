import { promises as fs } from "fs";
import path from "path";
import { IProduct } from "./interfaces";

// const PRODUCTS: Product[] = [
//   {
//     id: 'mug',
//     title: 'Vercel Mug',
//     description: 'Limited edition',
//     price: 15,
//   },
//   {
//     id: 'hoodie',
//     title: 'Vercel Hoodie',
//     description: 'Limited edition',
//     price: 35,
//   },
// ]

const api = {
	cache: {
		get: async (slug: string): Promise<IProduct | null | undefined> => {
			const data = await fs.readFile(path.join(process.cwd(), "products.db"));
			const products: IProduct[] = JSON.parse((data as unknown) as string);

			return products.find((product) => product.slug === slug);
		},
		set: async (products: IProduct[]) => {
			return await fs.writeFile(
				path.join(process.cwd(), "products.db"),
				JSON.stringify(products)
			);
		}
	}
};

export default api;
