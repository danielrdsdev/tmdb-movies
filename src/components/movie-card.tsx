import { formatDate } from '@/helpers/format-data'
import type { Movie } from '@/types/movie'
import Image from 'next/image'

type MovieCardProps = {
	movie: Movie
}

export const MovieCard = ({ movie }: MovieCardProps) => {
	const getTitle = (movie: Movie): string => {
		if (movie.title) return movie.title
		if (movie.original_name) return movie.original_name
		return movie.original_title
	}

	const getDate = (movie: Movie): string => {
		if (movie.first_air_date) return movie.first_air_date
		return movie.release_date ?? ''
	}
	return (
		<div className="flex flex-col gap-4 min-w-[150px]">
			<div className="w-full h-[225px] relative rounded-lg overflow-hidden">
				<Image
					src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
					alt="Poster movie"
					fill
					quality={80}
					className="object-cover aspect-auto"
				/>
			</div>

			<div>
				<strong className="block text-sm">{getTitle(movie)}</strong>
				<small className="text-muted-foreground text-xs block">
					{formatDate(getDate(movie))}
				</small>
			</div>
		</div>
	)
}
