import { api } from '@/lib/api'
import type { MovieData } from '@/types/movie'

type PopularMoviesResponse = MovieData

export async function getPopularMovies(
	page?: number
): Promise<PopularMoviesResponse | undefined> {
	try {
		const data = await api
			.get('movie/popular', {
				searchParams: {
					language: 'pt-BR',
					page: page || 1,
				},
			})
			.json<PopularMoviesResponse>()

		return data
	} catch (error) {
		console.error(error)
		return undefined
	}
}
