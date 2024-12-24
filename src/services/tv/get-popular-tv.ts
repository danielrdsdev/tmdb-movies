import { api } from '@/lib/api'
import type { TvData } from '@/types/tv'

type PopularTvResponse = TvData

export async function getPopularTv(
	page?: number
): Promise<PopularTvResponse | undefined> {
	try {
		const data = await api
			.get('tv/popular', {
				searchParams: {
					language: 'pt-BR',
					page: page || 1,
				},
			})
			.json<PopularTvResponse>()

		return data
	} catch (error) {
		console.error(error)
		return undefined
	}
}
