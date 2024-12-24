import { Skeleton } from '@/components/ui/skeleton'

export const MovieListSkeleton = () => {
	return (
		<div className="gap-6 grid grid-cols-8">
			{[...Array(24)].map((_, index) => (
				<Skeleton
					key={`${index + 1}`}
					className="flex flex-col min-w-[9.375rem] h-[15.625rem]"
				/>
			))}
		</div>
	)
}
