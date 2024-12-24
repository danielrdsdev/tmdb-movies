import { Skeleton } from '@/components/ui/skeleton'
import { SearchCardSkeleton } from './search-card-skeleton'

export const SearchListSkeleton = () => {
	return (
		<div className="items-start gap-8 grid grid-cols-1 lg:grid-cols-[20rem,1fr]">
			<div className="border rounded-lg">
				<div className="space-y-1 p-4 border-b">
					<h2 className="font-semibold text-center text-lg">
						Resultado da pesquisa
					</h2>
					<Skeleton className="w-full h-3" />
				</div>

				{[...Array(4)].map((_, i) => (
					<div
						key={`${i + 1}`}
						className="flex justify-between items-center px-4 py-2"
					>
						<Skeleton className="w-1/2 h-4" />
						<Skeleton className="size-8" />
					</div>
				))}
			</div>

			<div className="space-y-6">
				{[...Array(20)].map((_, i) => (
					<SearchCardSkeleton key={`${i + 1}`} />
				))}
			</div>
		</div>
	)
}
