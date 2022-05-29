const callouts = [
	{
		name: "Mujeres",
		description: "Work from home accessories",
		imageSrc:
			"https://vicsaconectados.vteximg.com.br/arquivos/ids/159426-600-600/PIQUE-MUJER-MANGA-CORTA-GRIS-FRENTE-1000X1000.jpg?v=636935738212800000",
		imageAlt:
			"Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
		href: "/mujer"
	},
	{
		name: "Hombres",
		description: "Journals and note-taking",
		imageSrc:
			"https://tottoco.vteximg.com.br/arquivos/ids/402153-1000-1000/RA41565-2110-R52_1.jpg?v=637624372045530000",
		imageAlt:
			"Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
		href: "/hombre"
	},
	{
		name: "Niños",
		description: "Daily commute essentials",
		imageSrc:
			"https://offcorss.vteximg.com.br/arquivos/ids/709699-460-540/Pijama-Ropa-bebe-nino-Gris.jpg?v=637654298737200000",
		imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
		href: "/niño"
	}
];

export const CategoryPreviews = () => {
	return (
		<div className="bg-gray-100">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-2xl mx-auto py-2 lg:max-w-none">
					<h2 className="text-2xl font-extrabold text-gray-900">Categorias</h2>

					<div className="mt-6 space-y-12 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-x-6">
						{callouts.map((callout) => (
							<div key={callout.name} className="group relative">
								<div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
									<img
										src={callout.imageSrc}
										alt={callout.imageAlt}
										className="w-full h-full object-center object-cover"
									/>
								</div>
								<h3 className="mt-6 text-sm text-gray-500">
									<a href={callout.href}>
										<span className="absolute inset-0" />
										{callout.name}
									</a>
								</h3>
								<p className="text-base font-semibold text-gray-900">
									{callout.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
