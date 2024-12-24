import { api } from '@/lib/api'
import type { TvData } from '@/types/tv'

type SeriesResponse = TvData

export async function getSeries(
	page?: number
): Promise<SeriesResponse | undefined> {
	try {
		const data = await api
			.get('discover/tv', {
				searchParams: {
					include_adult: false,
					include_video: false,
					language: 'pt-BR',
					sort_by: 'popularity.desc',
					page: page || 1,
				},
			})
			.json<SeriesResponse>()

		return data
	} catch (error) {
		console.error(error)
		return undefined
	}
}
