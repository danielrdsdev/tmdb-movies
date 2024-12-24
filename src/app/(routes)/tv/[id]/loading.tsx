import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
	return (
		<>
			<section className="relative flex items-center py-8 lg:py-4 w-full lg:h-[31.875rem]">
				<div className="z-10 flex lg:flex-row flex-col gap-8 container">
					<Skeleton className="w-[10rem] lg:w-[18.75rem] h-[14rem] lg:h-[28.125rem]" />

					<div className="space-y-8 py-4 w-full">
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
							<Skeleton className="rounded-full size-16" />

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

			<section className="flex flex-col items-start gap-8 lg:gap-4 lg:grid lg:grid-cols-[90%,1fr] py-4 container">
				<div className="space-y-4 w-full">
					<Skeleton className="px-4 w-48 h-6" />

					<div className="flex items-center gap-3 lg:px-4 pb-5 overflow-x-auto">
						{[...Array(8)].map((_, index) => (
							<div
								key={`${index + 1}`}
								className="shadow-lg rounded-lg min-w-[8.625rem] h-[16.6875rem]"
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
