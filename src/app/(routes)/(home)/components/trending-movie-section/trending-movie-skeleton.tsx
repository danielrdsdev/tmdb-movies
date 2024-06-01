import { Skeleton } from '@/components/ui/skeleton'

export const TrendingMovieSkeleton = () => {
	return (
		<section className="space-y-4 py-8">
			<Skeleton className="h-5 w-48" />

			<div className="w-full pb-4 grid grid-cols-8 gap-4">
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
