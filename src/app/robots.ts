import { baseUrl } from '@/config/site'
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: ['/', '/movies'],
			disallow: []
		},
		sitemap: `${baseUrl}/sitemap.xml`
	}
}
