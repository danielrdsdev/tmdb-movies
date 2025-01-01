import type { NavLink } from '@/types/nav'

type SiteLinks = NavLink[]

export const siteLinks: SiteLinks = [
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
]
