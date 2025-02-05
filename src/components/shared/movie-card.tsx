import { Link } from 'next-view-transitions'
import Image from 'next/image'

import { formatDate } from '@/helpers/format-date'
import type { Movie } from '@/types/movie'

import { Gauge } from '@/components/ui/gauge'

type MovieCardProps = {
	movie: Movie
}

export const MovieCard = ({ movie }: MovieCardProps) => {
	return (
		<Link
			title={movie.title}
			href={`/movie/${movie.id}`}
			className="flex flex-col w-[9.375rem] shrink-0"
		>
			<div className="relative rounded-lg w-full h-[14.0625rem] overflow-hidden">
				<Image
					src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
					alt="Poster movie"
					fill
					sizes="9.375rem"
					unoptimized
					className="aspect-auto object-cover"
				/>
			</div>

			<div className="-mt-3 ml-2 w-fit">
				<Gauge
					size="small"
					showValue
					value={Math.round(movie.vote_average * 10)}
				/>
			</div>

			<div className="mt-2 px-2">
				<strong className="block text-primary text-sm truncate">
					{movie.title}
				</strong>
				<small className="block text-muted-foreground text-xs">
					{formatDate(movie.release_date)}
				</small>
			</div>
		</Link>
	)
}
