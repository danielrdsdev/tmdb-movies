import { baseUrl } from '@/config/site'
import { fetchTmdb } from '@/lib/fetch-tmdb'
import type { MovieData } from '@/types/movie-trending'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const fetchParams =
		'/discover/movie?include_adult=false&include_video=false&language=pt-BR&sort_by=popularity.desc'
	const data = await fetchTmdb<MovieData>(fetchParams)

	const movieUrls =
		data?.results?.map((movie) => ({
			url: `${baseUrl}/movie/${movie.id}`,
			lastModified: movie.release_date
				? new Date(movie.release_date)
				: new Date()
		})) || []

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
			priority: 1
		},
		{
			url: `${baseUrl}/movies`,
			lastModified: new Date(),
			priority: 0.8
		},
		...movieUrls
	]
}
