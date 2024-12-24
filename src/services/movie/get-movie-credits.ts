import { api } from '@/lib/api'
import type { CastData } from '@/types/cast'

type MovieCreditsResponse = CastData

export async function getMovieCredits(
	id: string
): Promise<MovieCreditsResponse | undefined> {
	try {
		const data = await api
			.get(`movie/${id}/credits`, {
				searchParams: {
					language: 'pt-BR',
				},
			})
			.json<MovieCreditsResponse>()

		return data
	} catch (error) {
		console.error(error)
		return undefined
	}
}
