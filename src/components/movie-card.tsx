import { formatDate } from '@/helpers/format-date'
import type { Movie } from '@/types/movie-trending'
import { ImageOff } from 'lucide-react'
import { Link } from 'next-view-transitions'
import Image from 'next/image'

type MovieCardProps = {
	movie: Movie
}

export const MovieCard = ({ movie }: MovieCardProps) => {
	return (
		<Link
			href={`/movie/${movie.id}`}
			className="rounded-lg shadow-lg border border-muted grid grid-cols-[5.875rem,1fr] gap-4 overflow-hidden"
		>
			<div className="relative w-[5.875rem] h-[8.8125rem] flex items-center justify-center">
				{movie.poster_path ? (
					<Image
						src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
						alt="Poster movie"
						fill
						sizes="5.875rem"
						quality={80}
						className="object-cover aspect-auto"
					/>
				) : (
					<ImageOff className="size-16 text-muted" />
				)}
			</div>

			<div className="flex flex-col gap-4 py-4">
				<div className="space-y-0.5">
					<h2 className="font-semibold">{movie.title}</h2>
					<p className="text-sm text-muted-foreground">
						{formatDate(movie.release_date)}
					</p>
				</div>

				<p className="text-sm line-clamp-2">{movie.overview}</p>
			</div>
		</Link>
	)
}
