import { MovieCardSkeleton } from './movie-card-skeleton'

export const MovieListSkeleton = () => {
	return (
		<div className="gap-6 grid grid-cols-8">
			{[...Array(24)].map((_, index) => (
				<MovieCardSkeleton key={`${index + 1}`} />
			))}
		</div>
	)
}
