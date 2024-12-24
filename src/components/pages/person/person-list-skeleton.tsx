import { Skeleton } from '@/components/ui/skeleton'

export const PersonListSkeleton = () => {
	return (
		<div className="gap-6 grid grid-cols-4">
			{[...Array(20)].map((_, i) => (
				<Skeleton key={`${i + 1}`} className="w-full h-[27.0625rem]" />
			))}
		</div>
	)
}
