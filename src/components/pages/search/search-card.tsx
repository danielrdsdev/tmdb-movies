import type { Search } from '@/types/search-multi'
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'

interface SearchCardProps {
	search: Search
}

const url: Record<string, string> = {
	movie: '/movie',
	tv: '/tv',
}

export const SearchCard = ({ search }: SearchCardProps) => {
	return (
		<Link
			href={`${url[search.media_type]}/${search.id}`}
			className="gap-4 grid grid-cols-[5.875rem,1fr] shadow-lg pr-4 border rounded-lg overflow-hidden"
		>
			<div className="relative w-[5.875rem] h-[8.8125rem]">
				{search.poster_path && (
					<Image
						src={`https://image.tmdb.org/t/p/w400${search.poster_path}`}
						alt={search.name ?? 'Poster'}
						fill
						sizes="94px"
						className="aspect-square object-cover"
						quality={100}
					/>
				)}
			</div>

			<div className="flex flex-col flex-1 space-y-4 p-4">
				<div className="space-y-1.5">
					<h2 className="font-medium">
						{search.title}{' '}
						<span className="font-normal text-muted-foreground">
							({search.original_title})
						</span>
					</h2>
					{search.release_date ? (
						<p className="text-muted-foreground text-xs">
							{format(search.release_date, 'dd/MM/yyyy')}
						</p>
					) : (
						<p className="text-muted-foreground text-xs">Data não encontrada</p>
					)}
				</div>

				<p className="line-clamp-2 text-sm">{search.overview}</p>
			</div>
		</Link>
	)
}
