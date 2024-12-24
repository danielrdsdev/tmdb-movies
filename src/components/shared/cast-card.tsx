import type { Cast } from '@/types/cast'
import Image from 'next/image'

type CastCardProps = {
	cast: Cast
}

export const CastCard = ({ cast }: CastCardProps) => {
	return (
		<div className="shadow-lg rounded-lg min-w-[8.625rem] h-[16.6875rem] overflow-hidden">
			<div className="relative flex justify-center items-center w-full h-[10.9375rem]">
				<Image
					src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`}
					alt="Cast member profile picture"
					fill
					sizes="8.625rem"
					className="aspect-square object-cover"
					unoptimized
				/>
			</div>

			<div className="space-y-0.5 p-3">
				<strong className="block text-primary text-sm">{cast.name}</strong>
				<p className="text-sm">{cast.character}</p>
			</div>
		</div>
	)
}
