import { FC } from "react";
import { IProduct } from "../src/interfaces";

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
// const products = [
// 	{
// 		id: 1,
// 		name: "Basic Tee",
// 		href: "#",
// 		imageSrc:
// 			"https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
// 		imageAlt: "Front of men's Basic Tee in black.",
// 		price: "$35",
// 		color: "Black"
// 	},
// 	{
// 		id: 2,
// 		name: "Basic Tee",
// 		href: "#",
// 		imageSrc:
// 			"https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
// 		imageAlt: "Front of men's Basic Tee in black.",
// 		price: "$35",
// 		color: "Black"
// 	},
// 	{
// 		id: 3,
// 		name: "Basic Tee",
// 		href: "#",
// 		imageSrc:
// 			"https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
// 		imageAlt: "Front of men's Basic Tee in black.",
// 		price: "$35",
// 		color: "Black"
// 	}
// 	// More products...
// ];

interface Props {
	products: IProduct[];
	// title: string;
}

export const LayoutProductlist: FC<Props> = ({ products }) => {
	return (
		<div className="bg-white">
			<div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
				{/* <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
					Customers also purchased
				</h2> */}

				<div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
					{products.map((product, i) => (
						<div key={i} className="group relative">
							<div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
								<img
									src={product.image[0]}
									alt={product.title}
									className="w-full h-full object-center object-cover lg:w-full lg:h-full"
								/>
							</div>
							<div className="mt-4 flex justify-between">
								<div>
									<h3 className="text-sm text-gray-700">
										<a href={`/detalles/${product.slug}`}>
											<span aria-hidden="true" className="absolute inset-0" />
											{product.title}
										</a>
									</h3>
									<p className="mt-1 text-sm text-gray-500">{product.color}</p>
								</div>
								<p className="text-sm font-medium text-gray-900">
									{product.price}.00 Bs
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
