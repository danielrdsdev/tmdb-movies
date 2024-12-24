import { api } from '@/lib/api'
import type { MovieData } from '@/types/movie'

type TopRatedMoviesResponse = MovieData

export async function getTopRatedMovies(
	page?: number
): Promise<TopRatedMoviesResponse | undefined> {
	try {
		const data = await api
			.get('movie/top_rated', {
				searchParams: {
					language: 'pt-BR',
					page: page || 1,
				},
			})
			.json<TopRatedMoviesResponse>()

		return data
	} catch (error) {
		console.error(error)
		return undefined
	}
}
