import { formatDate } from '@/helpers/format-date'
import type { Movie } from '@/types/movie-trending'
import { Link } from 'next-view-transitions'
import Image from 'next/image'
import { Gauge } from './ui/gauge'

type MovieCardProps = {
	movie: Movie
}

export const MovieCard = ({ movie }: MovieCardProps) => {
	return (
		<Link
			href={`/movie/${movie.id}`}
			className="flex flex-col min-w-[9.375rem]"
		>
			<div className="w-full h-[14.0625rem] relative rounded-lg overflow-hidden">
				<Image
					src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
					alt="Poster movie"
					fill
					sizes="9.375rem"
					quality={80}
					className="object-cover aspect-auto"
				/>
			</div>

			<div className="-mt-4 w-fit ml-2">
				<Gauge
					size="small"
					showValue
					value={Math.round(movie.vote_average * 10)}
				/>
			</div>

			<div className="mt-1 px-2">
				<strong className="block text-sm">{movie.title}</strong>
				<small className="text-muted-foreground-foreground text-xs block">
					{formatDate(movie.release_date)}
				</small>
			</div>
		</Link>
	)
}
