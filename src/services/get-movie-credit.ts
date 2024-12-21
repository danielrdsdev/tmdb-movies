import { api } from '@/lib/api'
import type { MovieCreditData } from '@/types/movie-credits'

type MovieCreditResponse = MovieCreditData

export async function getMovieCredit(
	id: string
): Promise<MovieCreditResponse | undefined> {
	try {
		const data = await api
			.get(`movie/${id}/credits`, {
				searchParams: {
					language: 'pt-BR',
				},
			})
			.json<MovieCreditResponse>()

		return data
	} catch (error) {
		console.error(error)
		return undefined
	}
}
