import type { MetadataRoute } from 'next'

import { getMovies } from '@/services/movie/get-movies'
import { getSeries } from '@/services/tv/get-series'
import { siteUrl } from '@/utils/env'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const [movies, series] = await Promise.all([getMovies(), getSeries()])

	const movieUrls =
		movies?.results?.map((movie) => ({
			url: `${siteUrl}/movie/${movie.id}`,
			lastModified: movie.release_date
				? new Date(movie.release_date)
				: new Date(),
		})) || []

	const serieUrls =
		series?.results?.map((tv) => ({
			url: `${siteUrl}/tv/${tv.id}`,
			lastModified: tv.first_air_date
				? new Date(tv.first_air_date)
				: new Date(),
		})) || []

	return [
		{
			url: siteUrl,
			lastModified: new Date(),
			priority: 1,
		},
		{
			url: `${siteUrl}/movie`,
			lastModified: new Date(),
			priority: 0.8,
		},
		{
			url: `${siteUrl}/movie/now-playing`,
			lastModified: new Date(),
			priority: 0.8,
		},
		{
			url: `${siteUrl}/movie/top-rated`,
			lastModified: new Date(),
			priority: 0.8,
		},
		{
			url: `${siteUrl}/movie/upcoming`,
			lastModified: new Date(),
			priority: 0.8,
		},
		{
			url: `${siteUrl}/tv`,
			lastModified: new Date(),
			priority: 0.8,
		},
		{
			url: `${siteUrl}/tv/airing-today`,
			lastModified: new Date(),
			priority: 0.8,
		},
		{
			url: `${siteUrl}/tv/on-the-air`,
			lastModified: new Date(),
			priority: 0.8,
		},
		{
			url: `${siteUrl}/tv/top-rated`,
			lastModified: new Date(),
			priority: 0.8,
		},
		...movieUrls,
		...serieUrls,
	]
}
