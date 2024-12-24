import { api } from '@/lib/api'
import type { TvData } from '@/types/tv'

type AiringTodayTvResponse = TvData

export async function getAiringTodayTv(
	page?: number
): Promise<AiringTodayTvResponse | undefined> {
	try {
		const data = await api
			.get('tv/airing_today', {
				searchParams: {
					language: 'pt-BR',
					page: page || 1,
				},
			})
			.json<AiringTodayTvResponse>()

		return data
	} catch (error) {
		console.error(error)
		return undefined
	}
}
