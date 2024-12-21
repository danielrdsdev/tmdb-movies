type Genres = {
	id: number
	name: string
}

export function formatGenres(genres: Genres[]) {
	return genres.map((genre) => genre.name).join(', ')
}
