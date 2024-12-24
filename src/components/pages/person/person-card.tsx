import type { Person } from '@/types/person'
import { Link } from 'next-view-transitions'
import Image from 'next/image'

type PersonCardProps = {
	person: Person
}

export const PersonCard = ({ person }: PersonCardProps) => {
	return (
		<Link
			href={`/person/${person.id}`}
			className="shadow-lg border rounded-lg w-full overflow-hidden"
		>
			<div className="relative flex justify-center items-center w-full h-[19.6875rem]">
				<Image
					src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
					alt="Poster tv"
					fill
					sizes="19.6875rem"
					priority
					unoptimized
					className="aspect-auto object-center object-cover"
				/>
			</div>

			<div className="flex flex-col space-y-0.5 p-4">
				<h2 className="font-semibold">{person.name}</h2>
				<div className="flex flex-wrap items-center gap-2">
					{person.known_for.map((tv) => (
						<p
							key={tv.id}
							className="text-muted-foreground text-sm leading-none"
						>
							{tv.title || tv.name},
						</p>
					))}
				</div>
			</div>
		</Link>
	)
}