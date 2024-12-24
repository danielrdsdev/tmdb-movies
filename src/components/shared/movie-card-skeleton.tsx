import { Skeleton } from '@/components/ui/skeleton'

export const MovieCardSkeleton = () => {
	return (
		<div className="flex flex-col w-[9.375rem] shrink-0">
			<Skeleton className="w-full h-[14.0625rem]" />

			<div className="space-y-2 mt-6 px-2">
				<Skeleton className="w-full h-4" />
				<Skeleton className="w-1/2 h-3" />
			</div>
		</div>
	)
}
