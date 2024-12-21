import { api } from '@/lib/api'
import type { MovieData } from '@/types/movie'

type PopularMoviesResponse = MovieData

export async function getPopularMovies(): Promise<
	PopularMoviesResponse | undefined
> {
	try {
		const data = await api
			.get('movie/popular', {
				searchParams: {
					language: 'pt-BR',
				},
			})
			.json<PopularMoviesResponse>()

		return data
	} catch (error) {
		console.error(error)
		return undefined
	}
}
