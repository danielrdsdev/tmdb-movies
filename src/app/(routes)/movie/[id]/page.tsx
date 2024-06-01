import { fetchTmdb } from '@/lib/fetch-tmdb'
import type { MovieDetails } from '@/types/movie-details'
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

	const [getMovieDetails, getMovieCredits] = await Promise.all([
		fetchTmdb<MovieDetails>(movieDetailsParams),
		fetchTmdb<MovieCredit>(movieCreditsParams)
	])

	if (!getMovieDetails) {
		return null
	}

	if (!getMovieCredits) {
		return null
	}

	return (
		<>
			<MovieDetailsSection data={getMovieDetails} />
			<MovieCreditsSection data={getMovieCredits} />
		</>
	)
}
