import type { MovieData } from '@/types/movie'

export const getMoviesTrend = async (): Promise<MovieData | undefined> => {
	try {
		const token =
			'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjllYzJmNjkzYWE4MzU4N2ExY2Y5MzhjZTMzY2UyZCIsInN1YiI6IjY2NDgyY2VlNzNjZGI0NGJiZjJmNzUxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IDKLAS0lxxPHZvbLmUsqa9yPcEuk3EfeCs0BSSGMhmw'
		const baseUrl = 'https://api.themoviedb.org/3'
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: `Bearer ${token}`
			}
		}

		const response = await fetch(
			`${baseUrl}/trending/all/day?language=en-US`,
			options
		)

		if (!response.ok) {
			throw new Error(
				`Falha na requisição, código: ${response.status} ${response.statusText}`
			)
		}

		const data: MovieData = await response.json()

		return data
	} catch (error) {
		console.error(error)

		return undefined
	}
}
