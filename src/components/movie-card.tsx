import { formatDate } from '@/helpers/format-date'
import type { Movie } from '@/types/movie'
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
			className="gap-4 border-muted grid grid-cols-[5.875rem,1fr] shadow-lg pr-4 border rounded-lg overflow-hidden"
		>
			<div className="relative flex justify-center items-center w-[5.875rem] h-[8.8125rem]">
				{movie.poster_path ? (
					<Image
						src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
						alt="Poster movie"
						fill
						sizes="5.875rem"
						priority
						unoptimized
						className="aspect-auto object-cover"
					/>
				) : (
					<ImageOff className="text-muted size-16" />
				)}
			</div>

			<div className="flex flex-col gap-4 py-4">
				<div className="space-y-0.5">
					<h2 className="font-semibold">{movie.title}</h2>
					<p className="text-muted-foreground text-sm">
						{formatDate(movie.release_date)}
					</p>
				</div>

				<p className="line-clamp-2 text-sm">{movie.overview}</p>
			</div>
		</Link>
	)
}
