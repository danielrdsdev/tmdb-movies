import type { Movie } from '@/types/movie'
import { MovieCard } from './movie-card'

type MovieListProps = {
	movies: Movie[] | undefined
}

export const MovieList = ({ movies }: MovieListProps) => {
	return (
		<div className="space-y-6">
			{movies?.map((movie) => (
				<MovieCard key={movie.id} movie={movie} />
			))}
		</div>
	)
}
