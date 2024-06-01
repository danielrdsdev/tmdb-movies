import { Gauge } from '@/components/ui/gauge'
import type { MovieDetails } from '@/types/movie-details'
import { format } from 'date-fns'
import Image from 'next/image'

type MovieDetailsSection = {
	data: MovieDetails
}

export const MovieDetailsSection = ({ data }: MovieDetailsSection) => {
	return (
		<section className="h-[31.875rem] py-4 relative flex items-center w-full bg-black text-foreground-secondary">
			<Image
				src={`https://image.tmdb.org/t/p/w1280${data.backdrop_path}`}
				alt="Movie backdrop"
				fill
				sizes="100vw"
				priority
				quality={80}
				className="object-cover aspect-video object-right-top opacity-30"
			/>

			<div className="flex gap-8 container z-10">
				<div className="relative w-[18.75rem] h-[28.125rem] overflow-hidden rounded-lg">
					<Image
						src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}
						alt="Movie backdrop"
						fill
						sizes="18.75rem"
						priority
						quality={80}
						className="object-cover aspect-auto"
					/>
				</div>

				<div className="py-4 space-y-8">
					<div className="space-y-0.5">
						<h1 className="font-bold text-2xl">
							{data.title}

							<span className="text-muted-foreground font-normal ml-1">
								({format(data.release_date, 'yyyy')})
							</span>
						</h1>

						<div className="flex items-center gap-2">
							<p className="text-xs">
								{format(data.release_date, 'dd-MM-yyyy')}
							</p>
							<div className="flex items-center gap-1">
								{data.genres.map((item) => (
									<p key={item.id} className="text-xs">
										{item.name}
									</p>
								))}
							</div>
							<p className="text-xs">{format(data.runtime, 'hh:mm')}</p>
						</div>
					</div>

					<div className="flex items-center gap-2">
						<Gauge
							size="medium"
							showValue
							value={Math.round(data.vote_average * 10)}
						/>

						<p className="font-medium text-sm">
							Classificação geral dos utilizadores
						</p>
					</div>

					<p className="text-sm">{data.tagline}</p>

					<div className="space-y-1">
						<h2 className="font-medium">Sinopse</h2>
						<p className="text-sm max-w-3xl">{data.overview}</p>
					</div>
				</div>
			</div>
		</section>
	)
}
