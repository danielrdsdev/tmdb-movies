import { format } from 'date-fns'
import { ImageOff } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { MEDIA_TYPES_URL } from '@/constants/media-type'
import type { Search } from '@/types/search-multi'

interface SearchCardProps {
	search: Search
}

export const SearchCard = ({ search }: SearchCardProps) => {
	return (
		<Link
			href={`${MEDIA_TYPES_URL[search.media_type]}/${search.id}`}
			className="grid grid-cols-[5.875rem,1fr] shadow-lg pr-4 border rounded-lg overflow-hidden"
		>
			<div className="relative border-r w-[5.875rem] h-[8.8125rem] shrink-0">
				{search.poster_path && (
					<Image
						src={`https://image.tmdb.org/t/p/w400${search.poster_path}`}
						alt="Poster image"
						fill
						sizes="94px"
						className="aspect-square object-cover"
						quality={100}
					/>
				)}

				{search.profile_path && (
					<Image
						src={`https://image.tmdb.org/t/p/w400${search.profile_path}`}
						alt="Profile image"
						fill
						sizes="94px"
						className="aspect-square object-cover"
						quality={100}
					/>
				)}

				{!search.poster_path && !search.profile_path && (
					<div className="absolute inset-0 flex justify-center items-center bg-muted">
						<ImageOff className="size-10" />
					</div>
				)}
			</div>

			<div className="flex flex-col flex-1 space-y-4 p-4">
				<div className="space-y-1.5">
					<h2 className="font-medium">
						{search.title || search.name}{' '}
						{search.media_type !== 'person' && (
							<span className="font-normal text-muted-foreground">
								({search.original_title || search.original_name})
							</span>
						)}
					</h2>

					{search.release_date && (
						<p className="text-muted-foreground text-xs">
							{format(search.release_date, 'dd/MM/yyyy')}
						</p>
					)}

					{search.first_air_date && (
						<p className="text-muted-foreground text-xs">
							{format(search.first_air_date, 'dd/MM/yyyy')}
						</p>
					)}

					{search.known_for && (
						<div className="flex items-center gap-1">
							<p className="text-xs">{search.known_for_department}: </p>

							<p className="text-muted-foreground text-xs">
								{search.known_for
									.map((knownFor) => knownFor.title || knownFor.name)
									.join(', ')}
							</p>
						</div>
					)}
				</div>

				{search.overview && (
					<p className="line-clamp-2 text-sm">{search.overview}</p>
				)}
			</div>
		</Link>
	)
}
