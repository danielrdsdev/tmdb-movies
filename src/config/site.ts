import { siteUrl } from '@/utils/env'
import type { Metadata } from 'next'

type NavLink = {
	label: string
	href: string
}

type SiteConfig = {
	metadata: Metadata
	navLinks: NavLink[]
}

const baseName = 'TMDB Movies'

export const siteConfig: SiteConfig = {
	metadata: {
		metadataBase: new URL(siteUrl),
		title: {
			template: `%s | ${baseName}`,
			default: baseName,
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
			'API TMDB',
		],
		authors: [{ name: baseName, url: siteUrl }],
		creator: baseName,
		publisher: baseName,
		openGraph: {
			url: siteUrl,
			siteName: baseName,
		},
	},
	navLinks: [
		{
			label: 'Filmes',
			href: '/movie',
		},
		{
			label: 'Séries',
			href: '/tv',
		},
		{
			label: 'Pessoas',
			href: '/person',
		},
	],
}
