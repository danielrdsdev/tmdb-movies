import { Link } from 'next-view-transitions'
import Image from 'next/image'

import { formatDate } from '@/helpers/format-date'
import type { Tv } from '@/types/tv'

import { Gauge } from '@/components/ui/gauge'

type TvCardProps = {
	tv: Tv
}

export const TvCard = ({ tv }: TvCardProps) => {
	return (
		<Link
			title={tv.name}
			href={`/tv/${tv.id}`}
			className="flex flex-col w-[9.375rem] shrink-0"
		>
			<div className="relative rounded-lg w-full h-[14.0625rem] overflow-hidden">
				<Image
					src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
					alt="Poster tv"
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
					value={Math.round(tv.vote_average * 10)}
				/>
			</div>

			<div className="mt-2 px-2">
				<strong className="block text-primary text-sm truncate">
					{tv.name}
				</strong>
				<small className="block text-muted-foreground text-xs">
					{formatDate(tv.first_air_date)}
				</small>
			</div>
		</Link>
	)
}
