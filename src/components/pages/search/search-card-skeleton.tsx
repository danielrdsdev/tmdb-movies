import { Skeleton } from '@/components/ui/skeleton'

export const SearchCardSkeleton = () => {
	return (
		<div className="gap-4 grid grid-cols-[5.875rem,1fr] shadow-lg pr-4 border rounded-lg">
			<Skeleton className="w-[5.875rem] h-[8.8125rem]" />

			<div className="flex flex-col gap-4 py-4">
				<div className="space-y-1.5">
					<Skeleton className="w-24 h-4" />
					<Skeleton className="w-24 h-4" />
				</div>

				<div className="space-y-1">
					<Skeleton className="w-full h-4" />
					<Skeleton className="w-full h-4" />
				</div>
			</div>
		</div>
	)
}
