export type Movie = {
	backdrop_path: string
	id: number
	original_title: string
	original_name: string
	overview: string
	poster_path: string
	media_type: 'movie' | 'tv'
	adult: boolean
	title?: string
	original_language: string
	genre_ids: number[]
	popularity: number
	release_date?: string
	video: boolean
	vote_average: number
	vote_count: number

	name?: string
	first_air_date?: string
	origin_country?: string[]
}

export type MovieData = {
	results: Movie[]
}
