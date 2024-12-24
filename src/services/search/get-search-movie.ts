import { api } from '@/lib/api'
import type { MovieData } from '@/types/movie'

type SearchMovieResponse = MovieData

export async function getSearchMovie(
	query: string,
	page: number
): Promise<SearchMovieResponse | undefined> {
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
			.json<SearchMovieResponse>()

		return data
	} catch (error) {
		console.error(error)
		return undefined
	}
}
