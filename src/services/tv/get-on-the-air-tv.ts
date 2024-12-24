import { api } from '@/lib/api'
import type { TvData } from '@/types/tv'

type OnTheAirTvResponse = TvData

export async function getOnTheAirTv(
	page?: number
): Promise<OnTheAirTvResponse | undefined> {
	try {
		const data = await api
			.get('tv/on_the_air', {
				searchParams: {
					language: 'pt-BR',
					page: page || 1,
				},
			})
			.json<OnTheAirTvResponse>()

		return data
	} catch (error) {
		console.error(error)
		return undefined
	}
}
