import { FC, useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { RadioGroup } from "@headlessui/react";
import { IProduct } from "../src/interfaces";
import { slug } from "../src/utils/function";
import Link from "next/link";
import { SwiperComponent, SwiperDetail } from "./Swiper";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

interface Props {
	product: IProduct;
}

export const ProductOverviews: FC<Props> = ({ product }) => {
	// const [selectedColor, setSelectedColor] = useState(product.colors[0]);
	const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
	const { category, subCategory } = product;
	const hrefCategory = slug(category);
	const hrefSubCategory = slug(subCategory);
	return (
		<div className="bg-white">
			<div className="pt-6">
				<nav aria-label="Breadcrumb">
					<ol
						role="list"
						className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
					>
						<li>
							<div className="flex items-center">
								<Link href={`/${hrefCategory}`} passHref prefetch={false}>
									<a className="mr-2 text-sm font-medium text-gray-900 capitalize">
										{product.category}
									</a>
								</Link>

								<svg
									width={16}
									height={20}
									viewBox="0 0 16 20"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
									className="w-4 h-5 text-gray-300"
								>
									<path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
								</svg>
							</div>
						</li>
						<li>
							<div className="flex items-center">
								<Link
									href={`/${hrefCategory}/${hrefSubCategory}`}
									passHref
									prefetch={false}
								>
									<a className="mr-2 text-sm font-medium text-gray-900 capitalize">
										{product.subCategory}
									</a>
								</Link>
								<svg
									width={16}
									height={20}
									viewBox="0 0 16 20"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
									className="w-4 h-5 text-gray-300"
								>
									<path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
								</svg>
							</div>
						</li>
						<li className="text-sm">
							<Link
								href={`/detalles/${product.slug}`}
								passHref
								prefetch={false}
							>
								<a
									aria-current="page"
									className="font-medium text-gray-500 hover:text-gray-600"
								>
									{product.title}
								</a>
							</Link>
						</li>
					</ol>
				</nav>

				{/* Image gallery */}
				<div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
					<div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
						<img
							src={product.image[0]}
							alt="{product.t}"
							className="w-full h-full object-center object-cover"
						/>
					</div>
					<div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
						<div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
							<img
								src={product.image[1]}
								alt="{product.images[1].alt}"
								className="w-full h-full object-center object-cover"
							/>
						</div>
						<div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
							<img
								src={product.image[2]}
								alt="{product.images[2].alt}"
								className="w-full h-full object-center object-cover"
							/>
						</div>
					</div>
					<div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
						<img
							src={product.image[3]}
							alt="{product.image[3].alt}"
							className="w-full h-full object-center object-cover"
						/>
					</div>
				</div>

				{/* Product info */}
				<div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
					<div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
						<h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
							{product.title}
						</h1>
					</div>

					{/* Options */}
					<div className="mt-4 lg:mt-0 lg:row-span-3">
						<h2 className="sr-only">Product information</h2>
						<p className="text-3xl text-gray-900">{product.price}.00 Bs </p>
						{/* Reviews */}
						{/* <div className="mt-6">
							<h3 className="sr-only">Reviews</h3>
							<div className="flex items-center">
								<div className="flex items-center">
									{[0, 1, 2, 3, 4].map((rating) => (
										<StarIcon
											key={rating}
											className={classNames(
												reviews.average > rating
													? "text-gray-900"
													: "text-gray-200",
												"h-5 w-5 flex-shrink-0"
											)}
											aria-hidden="true"
										/>
									))}
								</div>
								<p className="sr-only">{reviews.average} out of 5 stars</p>
								<a
									href={reviews.href}
									className="ml-3 text-sm font-medium text-red-600 hover:text-red-500"
								>
									{reviews.totalCount} reviews
								</a>
							</div>
						</div> */}
						<form className="mt-10">
							{/* Colors */}
							{/* <div>
								<h3 className="text-sm text-gray-900 font-medium">Color</h3>

								<RadioGroup
									value={selectedColor}
									onChange={setSelectedColor}
									className="mt-4"
								>
									<RadioGroup.Label className="sr-only">
										Choose a color
									</RadioGroup.Label>
									<div className="flex items-center space-x-3">
										{product.colors.map((color) => (
											<RadioGroup.Option
												key={color.name}
												value={color}
												className={({ active, checked }) =>
													classNames(
														color.selectedClass,
														active && checked ? "ring ring-offset-1" : "",
														!active && checked ? "ring-2" : "",
														"-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
													)
												}
											>
												<RadioGroup.Label as="span" className="sr-only">
													{color.name}
												</RadioGroup.Label>
												<span
													aria-hidden="true"
													className={classNames(
														color.class,
														"h-8 w-8 border border-black border-opacity-10 rounded-full"
													)}
												/>
											</RadioGroup.Option>
										))}
									</div>
								</RadioGroup>
							</div> */}

							{/* Sizes */}
							<div className="mt-10">
								<div className="flex items-center justify-between">
									<h3 className="text-sm text-gray-900 font-medium">Tallas</h3>
									{/* <a
										href="#"
										className="text-sm font-medium text-red-600 hover:text-red-500"
									>
										Size guide
									</a> */}
								</div>

								<RadioGroup
									value={selectedSize}
									onChange={setSelectedSize}
									className="mt-4"
								>
									<RadioGroup.Label className="sr-only">
										Choose a size
									</RadioGroup.Label>
									<div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
										{product.sizes.map((size, i) => (
											<RadioGroup.Option
												key={i}
												value={size}
												// disabled={!size.inStock}
												className={({ active }) =>
													classNames(
														size
															? "bg-white shadow-sm text-gray-900 cursor-pointer"
															: "bg-gray-50 text-gray-200 cursor-not-allowed",
														active ? "ring-2 ring-red-500" : "",
														"group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
													)
												}
											>
												{({ active, checked }) => (
													<>
														<RadioGroup.Label as="span">
															{size}
														</RadioGroup.Label>
														{/* {size.inStock ? (
															<span
																className={classNames(
																	active ? "border" : "border-2",
																	checked
																		? "border-red-500"
																		: "border-transparent",
																	"absolute -inset-px rounded-md pointer-events-none"
																)}
																aria-hidden="true"
															/>
														) : (
															<span
																aria-hidden="true"
																className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
															>
																<svg
																	className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
																	viewBox="0 0 100 100"
																	preserveAspectRatio="none"
																	stroke="currentColor"
																>
																	<line
																		x1={0}
																		y1={100}
																		x2={100}
																		y2={0}
																		vectorEffect="non-scaling-stroke"
																	/>
																</svg>
															</span>
														)} */}
													</>
												)}
											</RadioGroup.Option>
										))}
									</div>
								</RadioGroup>
							</div>

							<button
								type="submit"
								className="mt-10 w-full bg-red-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
							>
								Agregar al carrito
							</button>
						</form>
						{/* */}
					</div>

					<div className="py-2 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
						{/* Description and details */}
						{/* <div>
							<h3 className="sr-only">Description</h3>

							<div className="space-y-6">
								<p className="text-base text-gray-900">{product.description}</p>
							</div>
						</div> */}

						{/* <div className="mt-10">
							<h3 className="text-sm font-medium text-gray-900">Highlights</h3>

							<div className="mt-4">
								<ul role="list" className="pl-4 list-disc text-sm space-y-2">
									{product.highlights.map((highlight) => (
										<li key={highlight} className="text-gray-400">
											<span className="text-gray-600">{highlight}</span>
										</li>
									))}
								</ul>
							</div>
						</div> */}

						<div className="mt-2">
							<h2 className="text-sm font-medium text-gray-900">Detalles</h2>

							<div className="mt-4 space-y-6">
								<p className="text-sm text-gray-600">{product.description}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

// import React, { useState } from "react";

export const ProductOverviews01: FC<Props> = ({ product }) => {
	const [show, setShow] = useState(false);
	const [show2, setShow2] = useState(false);
	const { category, subCategory } = product;
	const hrefCategory = slug(category);
	const hrefSubCategory = slug(subCategory);
	return (
		<>
			<nav aria-label="Breadcrumb" className=" py-6">
				<ol
					role="list"
					className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
				>
					<li>
						<div className="flex items-center">
							<Link href={`/${hrefCategory}`} passHref prefetch={false}>
								<a className="mr-2 text-sm font-medium text-gray-900 capitalize">
									{product.category}
								</a>
							</Link>

							<svg
								width={16}
								height={20}
								viewBox="0 0 16 20"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								className="w-4 h-5 text-gray-300"
							>
								<path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
							</svg>
						</div>
					</li>
					<li>
						<div className="flex items-center">
							<Link
								href={`/${hrefCategory}/${hrefSubCategory}`}
								passHref
								prefetch={false}
							>
								<a className="mr-2 text-sm font-medium text-gray-900 capitalize">
									{product.subCategory}
								</a>
							</Link>
							<svg
								width={16}
								height={20}
								viewBox="0 0 16 20"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								className="w-4 h-5 text-gray-300"
							>
								<path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
							</svg>
						</div>
					</li>
					<li className="text-sm">
						<Link href={`/detalles/${product.slug}`} passHref prefetch={false}>
							<a
								aria-current="page"
								className="font-medium text-gray-500 hover:text-gray-600"
							>
								{product.title}
							</a>
						</Link>
					</li>
				</ol>
			</nav>

			<div className="md:flex items-start justify-center py-6 2xl:px-20 md:px-6 px-4">
				<div className="w-auto flex flex-col sm:px-6 gap-1 sm:gap-2 md:gap-3">
					<img
						className="w-full"
						alt="img of a girl posing"
						src={product.image[0]}
					/>
					<div className="grid grid-cols-4 gap-1 sm:gap-2 md:gap-3">
						{product.image.map((date, i) => (
							<div className=" shadow-md p-1 border">
								<img
									alt="img-tag-one"
									className="md:w-48 md:h-48 w-full "
									src={date}
								/>
							</div>
						))}

						{/* <img
						alt="img-tag-one"
						className="md:w-48 md:h-48 w-full"
						src="https://i.ibb.co/f17NXrW/Rectangle-244.png"
					/>
					<img
						alt="img-tag-one"
						className="md:w-48 md:h-48 w-full"
						src="https://i.ibb.co/cYDrVGh/Rectangle-245.png"
					/>
					<img
						alt="img-tag-one"
						className="md:w-48 md:h-48 w-full"
						src="https://i.ibb.co/f17NXrW/Rectangle-244.png"
					/> */}
					</div>
				</div>
				<div className="xl:w-2/5 md:w-1/2 lg:ml-8 sm:px-6 md:ml-6 md:mt-0 mt-6">
					<div className="border-b border-gray-200 pb-6">
						{/* <p className="text-sm leading-none text-gray-600">{product.brand}</p> */}
						<h1
							className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
						>
							{product.title}
						</h1>
					</div>
					<div className="py-4 border-b border-gray-200 flex items-center justify-between">
						<p className="text-base leading-4 text-gray-800 font-bold">Color</p>
						<div className="flex items-center justify-center">
							<p className="text-sm leading-none text-gray-600">
								{product.color}
							</p>
							<div
								className="
								w-6
								h-6
								bg-gradient-to-b
								from-gray-900
								to-indigo-500
								ml-3
								mr-4
								cursor-pointer
							"
							></div>
							<svg
								className="cursor-pointer"
								width="6"
								height="10"
								viewBox="0 0 6 10"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1 1L5 5L1 9"
									stroke="#4B5563"
									strokeWidth="1.25"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
					</div>
					<div className="py-4 border-b border-gray-200 flex items-center justify-between">
						<p className="text-base leading-4 text-gray-800 font-bold">Talla</p>
						<div className="flex items-center justify-center">
							<p className="text-sm leading-none text-gray-600 mr-3">38.2</p>
							<svg
								className="cursor-pointer"
								width="6"
								height="10"
								viewBox="0 0 6 10"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1 1L5 5L1 9"
									stroke="#4B5563"
									strokeWidth="1.25"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
					</div>
					<button
						className="
						focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
						text-base
						flex
						items-center
						justify-center
						leading-none
						text-white
						bg-red-600
						w-full
						py-4
						hover:bg-red-700
					"
					>
						<svg
							className="mr-3"
							width="16"
							height="17"
							viewBox="0 0 16 17"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M7.02301 7.18999C7.48929 6.72386 7.80685 6.12992 7.93555 5.48329C8.06425 4.83666 7.9983 4.16638 7.74604 3.55724C7.49377 2.94809 7.06653 2.42744 6.51835 2.06112C5.97016 1.6948 5.32566 1.49928 4.66634 1.49928C4.00703 1.49928 3.36252 1.6948 2.81434 2.06112C2.26615 2.42744 1.83891 2.94809 1.58665 3.55724C1.33439 4.16638 1.26843 4.83666 1.39713 5.48329C1.52583 6.12992 1.8434 6.72386 2.30968 7.18999L4.66634 9.54749L7.02301 7.18999Z"
								stroke="white"
								strokeWidth="1.25"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M4.66699 4.83333V4.84166"
								stroke="white"
								strokeWidth="1.25"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M13.69 13.8567C14.1563 13.3905 14.4738 12.7966 14.6025 12.15C14.7312 11.5033 14.6653 10.8331 14.413 10.2239C14.1608 9.61476 13.7335 9.09411 13.1853 8.72779C12.6372 8.36148 11.9926 8.16595 11.3333 8.16595C10.674 8.16595 10.0295 8.36148 9.48133 8.72779C8.93314 9.09411 8.5059 9.61476 8.25364 10.2239C8.00138 10.8331 7.93543 11.5033 8.06412 12.15C8.19282 12.7966 8.51039 13.3905 8.97667 13.8567L11.3333 16.2142L13.69 13.8567Z"
								stroke="white"
								strokeWidth="1.25"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M11.333 11.5V11.5083"
								stroke="white"
								strokeWidth="1.25"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						Agregar Al Carrito
					</button>
					<div>
						<p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">
							{product.description}
						</p>
						<p className="text-base leading-4 mt-7 text-gray-600">
							Product Code: 8BN321AF2IF0NYA
						</p>
						<p className="text-base leading-4 mt-4 text-gray-600">
							Length: 13.2 inches
						</p>
						<p className="text-base leading-4 mt-4 text-gray-600">
							Height: 10 inches
						</p>
						<p className="text-base leading-4 mt-4 text-gray-600">
							Depth: 5.1 inches
						</p>
						<p className="md:w-96 text-base leading-normal text-gray-600 mt-4">
							Composition: 100% calf leather, inside: 100% lamb leather
						</p>
					</div>
					<div>
						<div className="border-t border-b py-4 mt-7 border-gray-200">
							<div
								onClick={() => setShow(!show)}
								className="flex justify-between items-center cursor-pointer"
							>
								<p className="text-base leading-4 text-gray-800 font-bold">
									Politicas de devolución
								</p>
								<button
									className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
									aria-label="show or hide"
								>
									<svg
										className={
											"transform " + (show ? "rotate-180" : "rotate-0")
										}
										width="10"
										height="6"
										viewBox="0 0 10 6"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M9 1L5 5L1 1"
											stroke="#4B5563"
											strokeWidth="1.25"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</button>
							</div>
							<div
								className={
									"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
									(show ? "block" : "hidden")
								}
								id="sect"
							>
								{product.description}
							</div>
						</div>
					</div>
					<div>
						<div className="border-b py-4 border-gray-200">
							<div
								onClick={() => setShow2(!show2)}
								className="flex justify-between items-center cursor-pointer"
							>
								<p className="text-base leading-4 text-gray-800 font-bold">
									Ponte en Contacto
								</p>
								<button
									className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
									aria-label="show or hide"
								>
									<svg
										className={
											"transform " + (show2 ? "rotate-180" : "rotate-0")
										}
										width="10"
										height="6"
										viewBox="0 0 10 6"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M9 1L5 5L1 1"
											stroke="#4B5563"
											strokeWidth="1.25"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</button>
							</div>
							<div
								className={
									"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600  " +
									(show2 ? "block" : "hidden")
								}
								id="sect"
							>
								{product.description}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export const ProductOverviews02: FC<Props> = ({ product }) => {
	// const [selectedColor, setSelectedColor] = useState(product.colors[0]);
	const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
	const { category, subCategory } = product;
	const hrefCategory = slug(category);
	const hrefSubCategory = slug(subCategory);
	return (
		<div className="bg-white">
			<div className="pt-6">
				<nav aria-label="Breadcrumb">
					<ol
						role="list"
						className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
					>
						<li>
							<div className="flex items-center">
								<Link href={`/${hrefCategory}`} passHref prefetch={false}>
									<a className="mr-2 text-sm font-medium text-gray-900 capitalize">
										{product.category}
									</a>
								</Link>

								<svg
									width={16}
									height={20}
									viewBox="0 0 16 20"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
									className="w-4 h-5 text-gray-300"
								>
									<path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
								</svg>
							</div>
						</li>
						<li>
							<div className="flex items-center">
								<Link
									href={`/${hrefCategory}/${hrefSubCategory}`}
									passHref
									prefetch={false}
								>
									<a className="mr-2 text-sm font-medium text-gray-900 capitalize">
										{product.subCategory}
									</a>
								</Link>
								<svg
									width={16}
									height={20}
									viewBox="0 0 16 20"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
									className="w-4 h-5 text-gray-300"
								>
									<path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
								</svg>
							</div>
						</li>
						<li className="text-sm">
							<Link
								href={`/detalles/${product.slug}`}
								passHref
								prefetch={false}
							>
								<a
									aria-current="page"
									className="font-medium text-gray-500 hover:text-gray-600"
								>
									{product.title}
								</a>
							</Link>
						</li>
					</ol>
				</nav>

				{/* Image gallery */}
				<div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
					<SwiperComponent image={product.image} />
				</div>

				{/* Product info */}
				<div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
					<div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
						<h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
							{product.title}
						</h1>
					</div>

					{/* Options */}
					<div className="mt-4 lg:mt-0 lg:row-span-3">
						<h2 className="sr-only">Product information</h2>
						<p className="text-3xl text-gray-900">{product.price}.00 Bs </p>
						{/* Reviews */}
						{/* <div className="mt-6">
							<h3 className="sr-only">Reviews</h3>
							<div className="flex items-center">
								<div className="flex items-center">
									{[0, 1, 2, 3, 4].map((rating) => (
										<StarIcon
											key={rating}
											className={classNames(
												reviews.average > rating
													? "text-gray-900"
													: "text-gray-200",
												"h-5 w-5 flex-shrink-0"
											)}
											aria-hidden="true"
										/>
									))}
								</div>
								<p className="sr-only">{reviews.average} out of 5 stars</p>
								<a
									href={reviews.href}
									className="ml-3 text-sm font-medium text-red-600 hover:text-red-500"
								>
									{reviews.totalCount} reviews
								</a>
							</div>
						</div> */}
						<form className="mt-10">
							{/* Colors */}
							{/* <div>
								<h3 className="text-sm text-gray-900 font-medium">Color</h3>

								<RadioGroup
									value={selectedColor}
									onChange={setSelectedColor}
									className="mt-4"
								>
									<RadioGroup.Label className="sr-only">
										Choose a color
									</RadioGroup.Label>
									<div className="flex items-center space-x-3">
										{product.colors.map((color) => (
											<RadioGroup.Option
												key={color.name}
												value={color}
												className={({ active, checked }) =>
													classNames(
														color.selectedClass,
														active && checked ? "ring ring-offset-1" : "",
														!active && checked ? "ring-2" : "",
														"-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
													)
												}
											>
												<RadioGroup.Label as="span" className="sr-only">
													{color.name}
												</RadioGroup.Label>
												<span
													aria-hidden="true"
													className={classNames(
														color.class,
														"h-8 w-8 border border-black border-opacity-10 rounded-full"
													)}
												/>
											</RadioGroup.Option>
										))}
									</div>
								</RadioGroup>
							</div> */}

							{/* Sizes */}
							<div className="mt-10">
								<div className="flex items-center justify-between">
									<h3 className="text-sm text-gray-900 font-medium">Tallas</h3>
									{/* <a
										href="#"
										className="text-sm font-medium text-red-600 hover:text-red-500"
									>
										Size guide
									</a> */}
								</div>

								<RadioGroup
									value={selectedSize}
									onChange={setSelectedSize}
									className="mt-4"
								>
									<RadioGroup.Label className="sr-only">
										Choose a size
									</RadioGroup.Label>
									<div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
										{product.sizes.map((size, i) => (
											<RadioGroup.Option
												key={i}
												value={size}
												// disabled={!size.inStock}
												className={({ active }) =>
													classNames(
														size
															? "bg-white shadow-sm text-gray-900 cursor-pointer"
															: "bg-gray-50 text-gray-200 cursor-not-allowed",
														active ? "ring-2 ring-red-500" : "",
														"group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
													)
												}
											>
												{({ active, checked }) => (
													<>
														<RadioGroup.Label as="span">
															{size}
														</RadioGroup.Label>
														{/* {size.inStock ? (
															<span
																className={classNames(
																	active ? "border" : "border-2",
																	checked
																		? "border-red-500"
																		: "border-transparent",
																	"absolute -inset-px rounded-md pointer-events-none"
																)}
																aria-hidden="true"
															/>
														) : (
															<span
																aria-hidden="true"
																className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
															>
																<svg
																	className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
																	viewBox="0 0 100 100"
																	preserveAspectRatio="none"
																	stroke="currentColor"
																>
																	<line
																		x1={0}
																		y1={100}
																		x2={100}
																		y2={0}
																		vectorEffect="non-scaling-stroke"
																	/>
																</svg>
															</span>
														)} */}
													</>
												)}
											</RadioGroup.Option>
										))}
									</div>
								</RadioGroup>
							</div>

							<button
								type="submit"
								className="mt-10 w-full bg-red-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
							>
								Agregar al carrito
							</button>
						</form>
						{/* */}
					</div>

					<div className="py-2 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
						{/* Description and details */}
						{/* <div>
							<h3 className="sr-only">Description</h3>

							<div className="space-y-6">
								<p className="text-base text-gray-900">{product.description}</p>
							</div>
						</div> */}

						{/* <div className="mt-10">
							<h3 className="text-sm font-medium text-gray-900">Highlights</h3>

							<div className="mt-4">
								<ul role="list" className="pl-4 list-disc text-sm space-y-2">
									{product.highlights.map((highlight) => (
										<li key={highlight} className="text-gray-400">
											<span className="text-gray-600">{highlight}</span>
										</li>
									))}
								</ul>
							</div>
						</div> */}

						<div className="mt-2">
							<h2 className="text-sm font-medium text-gray-900">Detalles</h2>

							<div className="mt-4 space-y-6">
								<p className="text-sm text-gray-600">{product.description}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export const ProductOverviews03: FC<Props> = ({ product }) => {
	const [show, setShow] = useState(false);
	const [show2, setShow2] = useState(false);
	const { category, subCategory } = product;
	const hrefCategory = slug(category);
	const hrefSubCategory = slug(subCategory);
	return (
		<>
			<nav aria-label="Breadcrumb" className=" py-6">
				<ol
					role="list"
					className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
				>
					<li>
						<div className="flex items-center">
							<Link href={`/${hrefCategory}`} passHref prefetch={false}>
								<a className="mr-2 text-sm font-medium text-gray-900 capitalize">
									{product.category}
								</a>
							</Link>

							<svg
								width={16}
								height={20}
								viewBox="0 0 16 20"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								className="w-4 h-5 text-gray-300"
							>
								<path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
							</svg>
						</div>
					</li>
					<li>
						<div className="flex items-center">
							<Link
								href={`/${hrefCategory}/${hrefSubCategory}`}
								passHref
								prefetch={false}
							>
								<a className="mr-2 text-sm font-medium text-gray-900 capitalize">
									{product.subCategory}
								</a>
							</Link>
							<svg
								width={16}
								height={20}
								viewBox="0 0 16 20"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								className="w-4 h-5 text-gray-300"
							>
								<path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
							</svg>
						</div>
					</li>
					<li className="text-sm">
						<Link href={`/detalles/${product.slug}`} passHref prefetch={false}>
							<a
								aria-current="page"
								className="font-medium text-gray-500 hover:text-gray-600"
							>
								{product.title}
							</a>
						</Link>
					</li>
				</ol>
			</nav>

			<div className="container md:flex items-start justify-center py-6 2xl:px-20 md:px-6 px-4">
				<SwiperComponent image={product.image} />

				<div className="xl:w-2/5 md:w-1/2 lg:ml-8 sm:px-6 md:ml-6 md:mt-0 mt-6">
					<div className="border-b border-gray-200 pb-6">
						{/* <p className="text-sm leading-none text-gray-600">{product.brand}</p> */}
						<h1
							className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
						>
							{product.title}
						</h1>
					</div>
					<div className="py-4 border-b border-gray-200 flex items-center justify-between">
						<p className="text-base leading-4 text-gray-800 font-bold">Color</p>
						<div className="flex items-center justify-center">
							<p className="text-sm leading-none text-gray-600">
								{product.color}
							</p>
							<div
								className="
								w-6
								h-6
								bg-gradient-to-b
								from-gray-900
								to-indigo-500
								ml-3
								mr-4
								cursor-pointer
							"
							></div>
							<svg
								className="cursor-pointer"
								width="6"
								height="10"
								viewBox="0 0 6 10"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1 1L5 5L1 9"
									stroke="#4B5563"
									strokeWidth="1.25"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
					</div>
					<div className="py-4 border-b border-gray-200 flex items-center justify-between">
						<p className="text-base leading-4 text-gray-800 font-bold">Talla</p>
						<div className="flex items-center justify-center">
							<p className="text-sm leading-none text-gray-600 mr-3">38.2</p>
							<svg
								className="cursor-pointer"
								width="6"
								height="10"
								viewBox="0 0 6 10"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1 1L5 5L1 9"
									stroke="#4B5563"
									strokeWidth="1.25"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
					</div>
					<button
						className="
						focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
						text-base
						flex
						items-center
						justify-center
						leading-none
						text-white
						bg-red-600
						w-full
						py-4
						hover:bg-red-700
					"
					>
						<svg
							className="mr-3"
							width="16"
							height="17"
							viewBox="0 0 16 17"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M7.02301 7.18999C7.48929 6.72386 7.80685 6.12992 7.93555 5.48329C8.06425 4.83666 7.9983 4.16638 7.74604 3.55724C7.49377 2.94809 7.06653 2.42744 6.51835 2.06112C5.97016 1.6948 5.32566 1.49928 4.66634 1.49928C4.00703 1.49928 3.36252 1.6948 2.81434 2.06112C2.26615 2.42744 1.83891 2.94809 1.58665 3.55724C1.33439 4.16638 1.26843 4.83666 1.39713 5.48329C1.52583 6.12992 1.8434 6.72386 2.30968 7.18999L4.66634 9.54749L7.02301 7.18999Z"
								stroke="white"
								strokeWidth="1.25"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M4.66699 4.83333V4.84166"
								stroke="white"
								strokeWidth="1.25"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M13.69 13.8567C14.1563 13.3905 14.4738 12.7966 14.6025 12.15C14.7312 11.5033 14.6653 10.8331 14.413 10.2239C14.1608 9.61476 13.7335 9.09411 13.1853 8.72779C12.6372 8.36148 11.9926 8.16595 11.3333 8.16595C10.674 8.16595 10.0295 8.36148 9.48133 8.72779C8.93314 9.09411 8.5059 9.61476 8.25364 10.2239C8.00138 10.8331 7.93543 11.5033 8.06412 12.15C8.19282 12.7966 8.51039 13.3905 8.97667 13.8567L11.3333 16.2142L13.69 13.8567Z"
								stroke="white"
								strokeWidth="1.25"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M11.333 11.5V11.5083"
								stroke="white"
								strokeWidth="1.25"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						Agregar Al Carrito
					</button>
					<div>
						<p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">
							{product.description}
						</p>
						<p className="text-base leading-4 mt-7 text-gray-600">
							Product Code: 8BN321AF2IF0NYA
						</p>
						<p className="text-base leading-4 mt-4 text-gray-600">
							Length: 13.2 inches
						</p>
						<p className="text-base leading-4 mt-4 text-gray-600">
							Height: 10 inches
						</p>
						<p className="text-base leading-4 mt-4 text-gray-600">
							Depth: 5.1 inches
						</p>
						<p className="md:w-96 text-base leading-normal text-gray-600 mt-4">
							Composition: 100% calf leather, inside: 100% lamb leather
						</p>
					</div>
					<div>
						<div className="border-t border-b py-4 mt-7 border-gray-200">
							<div
								onClick={() => setShow(!show)}
								className="flex justify-between items-center cursor-pointer"
							>
								<p className="text-base leading-4 text-gray-800 font-bold">
									Politicas de devolución
								</p>
								<button
									className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
									aria-label="show or hide"
								>
									<svg
										className={
											"transform " + (show ? "rotate-180" : "rotate-0")
										}
										width="10"
										height="6"
										viewBox="0 0 10 6"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M9 1L5 5L1 1"
											stroke="#4B5563"
											strokeWidth="1.25"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</button>
							</div>
							<div
								className={
									"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
									(show ? "block" : "hidden")
								}
								id="sect"
							>
								{product.description}
							</div>
						</div>
					</div>
					<div>
						<div className="border-b py-4 border-gray-200">
							<div
								onClick={() => setShow2(!show2)}
								className="flex justify-between items-center cursor-pointer"
							>
								<p className="text-base leading-4 text-gray-800 font-bold">
									Ponte en Contacto
								</p>
								<button
									className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
									aria-label="show or hide"
								>
									<svg
										className={
											"transform " + (show2 ? "rotate-180" : "rotate-0")
										}
										width="10"
										height="6"
										viewBox="0 0 10 6"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M9 1L5 5L1 1"
											stroke="#4B5563"
											strokeWidth="1.25"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</button>
							</div>
							<div
								className={
									"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600  " +
									(show2 ? "block" : "hidden")
								}
								id="sect"
							>
								{product.description}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
