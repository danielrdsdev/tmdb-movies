import { format } from 'date-fns'
import { Dot } from 'lucide-react'
import Image from 'next/image'

import { formatGenres } from '@/helpers/format-genres'
import { formatRuntime } from '@/helpers/format-runtime'
import type { Crew } from '@/types/cast'
import type { MovieDetails } from '@/types/movie'

import { Gauge } from '@/components/ui/gauge'

type MovieDetailsSectionProps = {
	data: MovieDetails
	crew: Crew[]
}

export const MovieDetailsSection = ({
	data,
	crew,
}: MovieDetailsSectionProps) => {
	return (
		<section className="relative flex items-center bg-black py-8 lg:py-4 w-full lg:h-[31.875rem] text-foreground">
			<div
				className="top-0 absolute w-full h-[18.2rem] lg:h-[31.875rem]"
				style={{
					maskImage: 'linear-gradient(to top, transparent, #fafafa 10%)',
				}}
			>
				<Image
					src={`https://image.tmdb.org/t/p/w1280${data.backdrop_path}`}
					alt="Movie backdrop"
					fill
					sizes="100vw"
					priority
					unoptimized
					className="lg:object-right-top opacity-50 lg:opacity-25 aspect-video object-cover"
				/>
			</div>

			<div className="z-10 flex lg:flex-row flex-col gap-8 container">
				<div className="relative rounded-lg w-[10rem] lg:w-[18.75rem] h-[14rem] lg:h-[28.125rem] overflow-hidden">
					<Image
						src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}
						alt="Movie backdrop"
						fill
						sizes="(max-width: 768px) 10rem, 18.75rem"
						priority
						unoptimized
						className="aspect-auto object-cover"
					/>
				</div>

				<div className="space-y-8 py-4">
					<div className="space-y-0.5">
						<h1 className="font-bold text-2xl">
							{data.title}

							<span className="ml-1 font-normal text-muted-foreground">
								({format(new Date(data.release_date), 'yyyy')})
							</span>
						</h1>

						<div className="flex items-center gap-1">
							<p className="text-xs">
								{format(new Date(data.release_date), 'dd-MM-yyyy')}
							</p>

							<Dot className="size-5" />

							<div className="flex items-center gap-1">
								<p className="text-xs">{formatGenres(data.genres)}</p>
							</div>

							<Dot className="size-5" />

							<p className="text-xs">{formatRuntime(data.runtime)}</p>
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

					<p className="text-sm italic">{data.tagline}</p>

					<div className="space-y-1">
						<h2 className="font-medium">Sinopse</h2>
						<p className="lg:line-clamp-4 max-w-5xl text-sm">{data.overview}</p>
					</div>

					<div className="flex items-start gap-16">
						{crew
							.filter((item) => item.job === 'Director')
							.map((item) => (
								<div key={item.id} className="space-y-0.5">
									<h3 className="font-semibold text-sm">{item.name}</h3>
									<p className="text-sm">{item.job}</p>
								</div>
							))}
					</div>
				</div>
			</div>
		</section>
	)
}
