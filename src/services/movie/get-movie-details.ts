import { api } from '@/lib/api'
import type { MovieDetails } from '@/types/movie'

type MovieDetailsResponse = MovieDetails

export async function getMovieDetails(
	id: string
): Promise<MovieDetailsResponse | undefined> {
	try {
		const data = await api
			.get(`movie/${id}`, {
				searchParams: {
					language: 'pt-BR',
				},
			})
			.json<MovieDetailsResponse>()

		return data
	} catch (error) {
		console.error(error)
		return undefined
	}
}
