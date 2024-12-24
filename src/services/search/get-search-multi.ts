import { api } from '@/lib/api'
import type { SearchMultiData } from '@/types/search-multi'

type SearchMultiResponse = SearchMultiData

export async function getSearchMulti(
	query: string,
	page: number
): Promise<SearchMultiResponse | undefined> {
	try {
		const data = await api
			.get('search/multi', {
				searchParams: {
					include_adult: false,
					language: 'pt-BR',
					query: query,
					page: page,
				},
			})
			.json<SearchMultiResponse>()

		return data
	} catch (error) {
		console.error(error)
		return undefined
	}
}
