import { Skeleton } from '@/components/ui/skeleton'

export const PersonListSkeleton = () => {
	return (
		<div className="space-y-6">
			{[...Array(20)].map((_, i) => (
				<div
					key={`${i + 1}`}
					className="gap-4 border-muted grid grid-cols-[5.875rem,1fr] shadow-lg pr-4 border rounded-lg"
				>
					<Skeleton className="w-[5.875rem] h-[8.8125rem]" />

					<div className="flex flex-col gap-4 py-4">
						<div className="space-y-0.5">
							<Skeleton className="w-24 h-4" />
							<Skeleton className="w-24 h-4" />
						</div>

						<Skeleton className="w-full h-4" />
						<Skeleton className="w-full h-4" />
					</div>
				</div>
			))}
		</div>
	)
}
