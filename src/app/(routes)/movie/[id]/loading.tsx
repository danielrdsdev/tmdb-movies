import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
	return (
		<>
			<section className="h-[31.875rem] py-4 relative bg-zinc-400 flex items-center w-full">
				<div className="flex gap-8 container">
					<Skeleton className="w-[18.75rem] h-[28.125rem]" />

					<div className="py-4 space-y-8 w-full">
						<div className="space-y-2">
							<Skeleton className="w-1/3 h-6" />

							<div className="flex items-center gap-2">
								<Skeleton className="w-16 h-4" />
								<Skeleton className="w-16 h-4" />
								<Skeleton className="w-16 h-4" />
								<Skeleton className="w-16 h-4" />
							</div>
						</div>

						<div className="flex items-center gap-2">
							<Skeleton className="size-16 rounded-full" />

							<Skeleton className="w-48 h-4" />
						</div>

						<Skeleton className="w-1/3 h-4" />

						<div className="space-y-1">
							<Skeleton className="w-24 h-4" />
							<Skeleton className="w-full max-w-4xl h-4" />
							<Skeleton className="w-full max-w-4xl h-4" />
						</div>
					</div>
				</div>
			</section>

			<section className="container py-4 grid grid-cols-[90%,1fr] items-start">
				<div className="space-y-4">
					<Skeleton className="w-48 h-6 px-4" />

					<div className="grid grid-cols-8 gap-3 px-4">
						{[...Array(8)].map((_, index) => (
							<div
								key={`${index + 1}`}
								className="rounded-lg shadow-lg min-w-[8.625rem] h-[16.6875rem]"
							>
								<Skeleton className="w-full h-[10.9375rem]" />

								<div className="space-y-0.5 p-3">
									<Skeleton className="w-full h-4" />

									<Skeleton className="w-full h-4" />
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="flex flex-col gap-8">
					<div className="space-y-2">
						<Skeleton className="w-full h-4" />
						<Skeleton className="w-full h-4" />
					</div>
					<div className="space-y-2">
						<Skeleton className="w-full h-4" />
						<Skeleton className="w-full h-4" />
					</div>
					<div className="space-y-2">
						<Skeleton className="w-full h-4" />
						<Skeleton className="w-full h-4" />
					</div>
					<div className="space-y-2">
						<Skeleton className="w-full h-4" />
						<Skeleton className="w-full h-4" />
					</div>
					<div className="space-y-2">
						<Skeleton className="w-full h-4" />
						<Skeleton className="w-full h-4" />
					</div>
				</div>
			</section>
		</>
	)
}
