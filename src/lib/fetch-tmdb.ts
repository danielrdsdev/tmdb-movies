export const fetchTmdb = async <T>(params: string): Promise<T | undefined> => {
	try {
		const token =
			'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjllYzJmNjkzYWE4MzU4N2ExY2Y5MzhjZTMzY2UyZCIsInN1YiI6IjY2NDgyY2VlNzNjZGI0NGJiZjJmNzUxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IDKLAS0lxxPHZvbLmUsqa9yPcEuk3EfeCs0BSSGMhmw'
		const options = {
			next: {
				revalidate: 60 // 1 minute
			},
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: `Bearer ${token}`
			}
		}

		const response = await fetch(
			`https://api.themoviedb.org/3${params}`,
			options
		)

		if (!response.ok) {
			throw new Error(
				`Falha na requisição, código: ${response.status} ${response.statusText}`
			)
		}

		const data = await response.json()

		return data
	} catch (error) {
		console.error(error)

		return undefined
	}
}
