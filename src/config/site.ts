export const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
	? `${process.env.NEXT_PUBLIC_VERCEL_URL}`
	: 'http://localhost:3000'

const baseName = process.env.SITE_NAME

export const siteConfig = {
	metadata: {
		metadataBase: new URL(baseUrl),
		title: {
			template: `%s | ${baseName}`,
			default: baseName
		},
		description:
			'Explore filmes e séries populares. Veja detalhes, avaliações e sinopses de suas produções favoritas usando a API do TMDB.',
		keywords: [
			'Filmes',
			'Séries',
			'TMDB',
			'Movies',
			'Shows',
			'TV Shows',
			'Filmes Populares',
			'Séries Populares',
			'Detalhes de Filmes',
			'Detalhes de Séries',
			'API TMDB'
		],
		authors: [{ name: baseName, url: baseUrl }],
		creator: baseName,
		publisher: baseName,
		canonical: baseUrl,
		openGraph: {
			title: 'TMDB Movies: Filmes e Séries Populares',
			description:
				'Explore filmes e séries populares. Veja detalhes, avaliações e sinopses de suas produções favoritas usando a API do TMDB.',
			url: baseUrl,
			siteName: baseName,
			locale: 'pt_BR',
			type: 'website',
			images: [
				{
					url: `${baseUrl}/static/cover.jpg`,
					alt: 'TMDB Movies',
					width: 1200,
					height: 630
				}
			]
		},
		twitter: {
			card: 'summary_large_image',
			site: '@tmdbmovies',
			creator: '@tmdbmovies',
			title: 'TMDB Movies: Filmes e Séries Populares',
			description:
				'Explore filmes e séries populares. Veja detalhes, avaliações e sinopses de suas produções favoritas usando a API do TMDB.',
			images: {
				url: `${baseUrl}/static/cover.jpg`,
				alt: 'TMDB Movies',
				width: 1200,
				height: 630
			}
		}
	}
}
