import { baseUrl } from '@/config/site'
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: ['/', '/blog'],
			disallow: '/blog/preview/*'
		},
		sitemap: `${baseUrl}/sitemap.xml`
	}
}
