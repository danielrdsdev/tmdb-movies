import { api } from '@/lib/api'
import type { MovieData } from '@/types/movie'

type UpcomingMoviesResponse = MovieData

export async function getUpcomingMovies(
	page?: number
): Promise<UpcomingMoviesResponse | undefined> {
	try {
		const data = await api
			.get('movie/upcoming', {
				searchParams: {
					language: 'pt-BR',
					page: page || 1,
				},
			})
			.json<UpcomingMoviesResponse>()

		return data
	} catch (error) {
		console.error(error)
		return undefined
	}
}
