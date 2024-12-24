import { api } from '@/lib/api'
import type { TvData } from '@/types/tv'

type TopRatedTvResponse = TvData

export async function getTopRatedTv(
	page?: number
): Promise<TopRatedTvResponse | undefined> {
	try {
		const data = await api
			.get('tv/top_rated', {
				searchParams: {
					language: 'pt-BR',
					page: page || 1,
				},
			})
			.json<TopRatedTvResponse>()

		return data
	} catch (error) {
		console.error(error)
		return undefined
	}
}
