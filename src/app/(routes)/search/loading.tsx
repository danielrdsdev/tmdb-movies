import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
	return (
		<section className="space-y-8 py-8 container">
			<Skeleton className="w-full h-10" />

			<div className="space-y-6">
				<Skeleton className="w-48 h-5" />

				<div className="space-y-6">
					{[...Array(20)].map((_, i) => (
						<div
							key={`${i + 1}`}
							className="rounded-lg shadow-lg border border-muted grid grid-cols-[5.875rem,1fr] gap-4 pr-4"
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
			</div>
		</section>
	)
}
