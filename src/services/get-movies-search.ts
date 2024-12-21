import { api } from '@/lib/api'
import type { MovieData } from '@/types/movie'

type MoviesSearchResponse = MovieData

export async function getMoviesSearch(
	query: string,
	page: number
): Promise<MoviesSearchResponse | undefined> {
	try {
		const data = await api
			.get('search/movie', {
				searchParams: {
					include_adult: false,
					language: 'pt-BR',
					query: query,
					page: page,
				},
			})
			.json<MoviesSearchResponse>()

		return data
	} catch (error) {
		console.error(error)
		return undefined
	}
}
