import { Skeleton } from '@/components/ui/skeleton'

export const PopularMoviesSkeleton = () => {
	return (
		<section className="space-y-4 py-8">
			<Skeleton className="w-48 h-5" />

			<div className="gap-4 grid grid-cols-8 pb-4 w-full">
				{[...Array(8)].map((_, index) => (
					<Skeleton
						key={`${index + 1}`}
						className="flex flex-col min-w-[9.375rem] h-[15.625rem]"
					/>
				))}
			</div>
		</section>
	)
}
