import { fetchTmdb } from '@/lib/fetch-tmdb'
import type { MovieDetails } from '@/types/movie-details'
import { AdditionalInformation } from './components/additional-information'
import { MovieCreditsSection } from './components/movie-credits-section'
import { MovieDetailsSection } from './components/movie-details-section'

type MoviePageProps = {
	params: {
		id: number
	}
}

export default async function MoviePage({ params: { id } }: MoviePageProps) {
	const movieDetailsParams = `/movie/${id}?language=pt-BR`
	const movieCreditsParams = `/movie/${id}/credits?language=en-US`

	const [movieDetailsData, movieCreditsData] = await Promise.all([
		fetchTmdb<MovieDetails>(movieDetailsParams),
		fetchTmdb<MovieCredit>(movieCreditsParams)
	])

	if (!movieDetailsData) {
		return null
	}

	if (!movieCreditsData) {
		return null
	}

	return (
		<>
			<MovieDetailsSection data={movieDetailsData} />

			<div className="container py-4 grid grid-cols-[90%,1fr] items-start">
				<MovieCreditsSection data={movieCreditsData} />
				<AdditionalInformation data={movieDetailsData} />
			</div>
		</>
	)
}
