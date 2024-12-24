import { api } from '@/lib/api'
import type { TvData } from '@/types/tv'

type TvTrendingResponse = TvData

export async function getTrendingTv(): Promise<TvTrendingResponse | undefined> {
	try {
		const data = await api
			.get('trending/tv/day', {
				searchParams: {
					language: 'pt-BR',
				},
			})
			.json<TvTrendingResponse>()

		return data
	} catch (error) {
		console.error(error)
		return undefined
	}
}
