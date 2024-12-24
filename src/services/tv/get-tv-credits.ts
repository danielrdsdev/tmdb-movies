import { api } from '@/lib/api'
import type { CastData } from '@/types/cast'

type TvCreditsResponse = CastData

export async function getTvCredits(
	id: string
): Promise<TvCreditsResponse | undefined> {
	try {
		const data = await api
			.get(`tv/${id}/credits`, {
				searchParams: {
					language: 'pt-BR',
				},
			})
			.json<TvCreditsResponse>()

		return data
	} catch (error) {
		console.error(error)
		return undefined
	}
}
