import { api } from '@/lib/api'
import type { PersonData } from '@/types/person'

type PopularPersonResponse = PersonData

export async function getPopularPerson(
	page?: number
): Promise<PopularPersonResponse | undefined> {
	try {
		const data = await api
			.get('person/popular', {
				searchParams: {
					language: 'pt-BR',
					page: page || 1,
				},
			})
			.json<PopularPersonResponse>()

		return data
	} catch (error) {
		console.error(error)
		return undefined
	}
}
