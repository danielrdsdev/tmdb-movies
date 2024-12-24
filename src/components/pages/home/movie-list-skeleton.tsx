import { Skeleton } from '@/components/ui/skeleton'

export const MovieListSkeleton = () => {
	return (
		<div className="gap-4 grid grid-cols-8 pb-4 w-full">
			{[...Array(8)].map((_, index) => (
				<Skeleton
					key={`${index + 1}`}
					className="flex flex-col min-w-[9.375rem] h-[15.625rem]"
				/>
			))}
		</div>
	)
}
