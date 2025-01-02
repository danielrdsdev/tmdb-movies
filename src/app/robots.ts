import type { MetadataRoute } from 'next'

import { siteUrl } from '@/utils/env'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: [
				'/',
				'/movie',
				'/movie/now-playing',
				'/movie/top-rated',
				'/movie/upcoming',
				'/tv',
				'/tv/airing-today',
				'/tv/on-the-air',
				'/tv/top-rated',
			],
			disallow: [],
		},
		sitemap: `${siteUrl}/sitemap.xml`,
	}
}
