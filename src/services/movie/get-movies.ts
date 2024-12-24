import { api } from '@/lib/api'
import type { MovieData } from '@/types/movie'

type MoviesResponse = MovieData

export async function getMovies(
	page?: number
): Promise<MoviesResponse | undefined> {
	try {
		const data = await api
			.get('discover/movie', {
				searchParams: {
					include_adult: false,
					include_video: false,
					language: 'pt-BR',
					sort_by: 'popularity.desc',
					page: page || 1,
				},
			})
			.json<MoviesResponse>()

		return data
	} catch (error) {
		console.error(error)
		return undefined
	}
}
