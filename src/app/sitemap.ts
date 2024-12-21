import { getMovies } from '@/services/get-movies'
import { siteUrl } from '@/utils/env'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const data = await getMovies()

	const movieUrls =
		data?.results?.map((movie) => ({
			url: `${siteUrl}/movie/${movie.id}`,
			lastModified: movie.release_date
				? new Date(movie.release_date)
				: new Date(),
		})) || []

	return [
		{
			url: siteUrl,
			lastModified: new Date(),
			priority: 1,
		},
		{
			url: `${siteUrl}/movies`,
			lastModified: new Date(),
			priority: 0.8,
		},
		...movieUrls,
	]
}
