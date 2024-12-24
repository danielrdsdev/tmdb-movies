import { api } from '@/lib/api'
import type { MovieData } from '@/types/movie'

type NowPlayingMoviesResponse = MovieData

export async function getNowPlayingMovies(
	page?: number
): Promise<NowPlayingMoviesResponse | undefined> {
	try {
		const data = await api
			.get('movie/now_playing', {
				searchParams: {
					language: 'pt-BR',
					page: page || 1,
				},
			})
			.json<NowPlayingMoviesResponse>()

		return data
	} catch (error) {
		console.error(error)
		return undefined
	}
}
