import { siteUrl } from '@/utils/env'
import type { Metadata } from 'next'

export type NavLink = {
	label: string
	href: string
	items?: NavLink[]
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
			items: [
				{
					label: 'Populares',
					href: '/movie',
				},
				{
					label: 'Em cartaz',
					href: '/movie/now-playing',
				},
				{
					label: 'Próximas estreias',
					href: '/movie/upcoming',
				},
				{
					label: 'Mais bem avaliados',
					href: '/movie/top-rated',
				},
			],
		},
		{
			label: 'Séries',
			href: '/tv',
			items: [
				{
					label: 'Populares',
					href: '/tv',
				},
				{
					label: 'Em exibição hoje',
					href: '/tv/airing-today',
				},
				{
					label: 'Na TV',
					href: '/tv/on-the-air',
				},
				{
					label: 'Mais bem avaliadas',
					href: '/tv/top-rated',
				},
			],
		},
		{
			label: 'Pessoas',
			href: '/person',
		},
	],
}
