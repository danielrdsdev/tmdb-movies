import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
	return (
		<>
			<section className="lg:h-[31.875rem] py-8 lg:py-4 relative bg-zinc-400 flex items-center w-full">
				<div className="flex flex-col lg:flex-row gap-8 container z-10">
					<Skeleton className="w-[10rem] h-[14rem] lg:w-[18.75rem] lg:h-[28.125rem]" />

					<div className="py-4 space-y-8 w-full">
						<div className="space-y-2">
							<Skeleton className="w-1/3 h-6" />

							<div className="flex items-center gap-2">
								<Skeleton className="w-12 h-4" />
								<Skeleton className="w-12 h-4" />
								<Skeleton className="w-12 h-4" />
								<Skeleton className="w-12 h-4" />
							</div>
						</div>

						<div className="flex items-center gap-2">
							<Skeleton className="size-16 rounded-full" />

							<Skeleton className="w-48 h-4" />
						</div>

						<Skeleton className="w-1/3 h-4" />

						<div className="space-y-1">
							<Skeleton className="w-16 h-4" />
							<Skeleton className="w-full max-w-4xl h-4" />
							<Skeleton className="w-full max-w-4xl h-4" />
						</div>
					</div>
				</div>
			</section>

			<section className="container py-4 flex flex-col gap-8 lg:grid lg:grid-cols-[90%,1fr] lg:gap-4 items-start">
				<div className="space-y-4 w-full">
					<Skeleton className="w-48 h-6 px-4" />

					<div className="flex items-center gap-3 overflow-x-auto pb-5 lg:px-4">
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
						<Skeleton className="w-32 lg:w-full h-4" />
						<Skeleton className="w-32 lg:w-full h-4" />
					</div>
					<div className="space-y-2">
						<Skeleton className="w-32 lg:w-full h-4" />
						<Skeleton className="w-32 lg:w-full h-4" />
					</div>
					<div className="space-y-2">
						<Skeleton className="w-32 lg:w-full h-4" />
						<Skeleton className="w-32 lg:w-full h-4" />
					</div>
					<div className="space-y-2">
						<Skeleton className="w-32 lg:w-full h-4" />
						<Skeleton className="w-32 lg:w-full h-4" />
					</div>
					<div className="space-y-2">
						<Skeleton className="w-32 lg:w-full h-4" />
						<Skeleton className="w-32 lg:w-full h-4" />
					</div>
				</div>
			</section>
		</>
	)
}
