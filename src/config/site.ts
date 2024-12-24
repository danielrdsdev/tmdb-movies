import { siteUrl } from '@/utils/env'
import type { Metadata } from 'next'

type NavLink = {
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
					label: 'Em Exibição',
					href: '/movie/now-playing',
				},
				{
					label: 'Brevemente',
					href: '/movie/upcoming',
				},
				{
					label: 'Melhor Classificação',
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
					label: 'Emitidos Hoje',
					href: '/tv/airing-today',
				},
				{
					label: 'Na TV',
					href: '/tv/on-the-air',
				},
				{
					label: 'Melhor Classificação',
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
