import { MovieCardSkeleton } from '@/components/shared/movie-card-skeleton'

export const MovieListSkeleton = () => {
	return (
		<div className="gap-5 grid grid-cols-8 pb-4 w-full">
			{[...Array(8)].map((_, index) => (
				<MovieCardSkeleton key={`${index + 1}`} />
			))}
		</div>
	)
}
