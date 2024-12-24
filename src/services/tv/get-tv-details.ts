import { api } from '@/lib/api'
import type { TvDetails } from '@/types/tv'

type TvDetailsResponse = TvDetails

export async function getTvDetails(
	id: string
): Promise<TvDetailsResponse | undefined> {
	try {
		const data = await api
			.get(`tv/${id}`, {
				searchParams: {
					language: 'pt-BR',
				},
			})
			.json<TvDetailsResponse>()

		return data
	} catch (error) {
		console.error(error)
		return undefined
	}
}
