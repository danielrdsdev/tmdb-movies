import { api } from '@/lib/api'
import type { MovieData } from '@/types/movie'

type MovieTrendingResponse = MovieData

export async function getTrendingMovie(
	date: string
): Promise<MovieTrendingResponse | undefined> {
	try {
		const data = await api
			.get(`trending/movie/${date}`, {
				searchParams: {
					language: 'pt-BR',
				},
			})
			.json<MovieTrendingResponse>()

		return data
	} catch (error) {
		console.error(error)
		return undefined
	}
}
