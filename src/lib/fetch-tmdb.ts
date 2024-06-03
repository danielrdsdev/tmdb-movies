export const fetchTmdb = async <T>(params: string): Promise<T | undefined> => {
	try {
		const response = await fetch(`${process.env.API_URL}${params}`, {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: `Bearer ${process.env.API_TOKEN}`
			},
			next: {
				revalidate: 60 // revalidate cache every 60 seconds
			}
		})

		if (!response.ok) {
			throw new Error(
				`Falha na requisição, código: ${response.status} ${response.statusText}`
			)
		}

		const data = await response.json()

		return data
	} catch (error) {
		console.error(`Erro ao buscar dados da API: ${error}`)

		return undefined
	}
}
