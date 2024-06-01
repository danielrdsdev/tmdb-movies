import Image from 'next/image'

type MovieCreditCard = {
	cast: CastMember
}

export const MovieCreditCard = ({ cast }: MovieCreditCard) => {
	return (
		<div className="rounded-lg shadow-lg min-w-[8.625rem] h-[16.6875rem] overflow-hidden">
			<div className="w-full h-[10.9375rem] relative">
				<Image
					src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`}
					alt="Cast member profile picture"
					fill
					sizes="8.625rem"
					className="object-cover aspect-square"
					quality={80}
				/>
			</div>

			<div className="space-y-0.5 p-3">
				<strong className="text-sm block">{cast.name}</strong>
				<p className="text-sm">{cast.character}</p>
			</div>
		</div>
	)
}
