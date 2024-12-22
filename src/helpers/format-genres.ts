type Genres = {
	id: number
	name: string
}

export const formatGenres = (genres: Genres[]) => {
	return genres.map((genre) => genre.name).join(', ')
}
