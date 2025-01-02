import { ImageOff } from 'lucide-react'
import Image from 'next/image'

import type { Cast } from '@/types/cast'

type CastCardProps = {
	cast: Cast
}

export const CastCard = ({ cast }: CastCardProps) => {
	return (
		<div
			title={cast.name}
			className="shadow-lg min-w-[8.625rem] h-[16.6875rem] overflow-hidden"
		>
			<div className="relative flex justify-center items-center border rounded-lg w-full h-[10.9375rem] overflow-hidden">
				{cast.profile_path && (
					<Image
						src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`}
						alt="Cast member profile picture"
						fill
						sizes="8.625rem"
						className="aspect-square object-cover"
						unoptimized
					/>
				)}

				{!cast.profile_path && (
					<ImageOff className="text-muted-foreground size-12" />
				)}
			</div>

			<div className="space-y-0.5 p-3">
				<strong className="block text-primary text-sm truncate">
					{cast.name}
				</strong>
				<p title={cast.character} className="text-sm truncate">
					{cast.character}
				</p>
			</div>
		</div>
	)
}
