import { AdditionalInformation } from '@/components/pages/movie/id/additional-information'
import { MovieDetailsSection } from '@/components/pages/movie/id/movie-details-section'
import { CastSection } from '@/components/shared/cast-section'
import { getMovieCredits } from '@/services/movie/get-movie-credits'
import { getMovieDetails } from '@/services/movie/get-movie-details'
import { getMovies } from '@/services/movie/get-movies'
import { siteUrl } from '@/utils/env'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
	const data = await getMovies()

	if (!data) {
		return notFound()
	}

	return data.results.map((data) => ({
		id: String(data.id),
	}))
}

export async function generateMetadata({
	params,
}: { params: Promise<{ id: string }> }): Promise<Metadata> {
	const { id } = await params
	const data = await getMovieDetails(id)

	if (!data) {
		return notFound()
	}

	return {
		title: data.title,
		description: data.overview,
		openGraph: {
			title: data.title,
			description: data.overview,
			url: `${siteUrl}/movie/${data.id}`,
			images: {
				url: `https://image.tmdb.org/t/p/w1280${data.backdrop_path}`,
				alt: data.title,
			},
		},
		twitter: {
			title: data.title,
			description: data.overview,
			images: {
				url: `https://image.tmdb.org/t/p/w1280${data.backdrop_path}`,
				alt: data.title,
			},
		},
	}
}

export default async function MoviePage({
	params,
}: { params: Promise<{ id: string }> }) {
	const { id } = await params
	const [movieDetailsData, movieCreditsData] = await Promise.all([
		getMovieDetails(id),
		getMovieCredits(id),
	])

	if (!movieDetailsData || !movieCreditsData) {
		return notFound()
	}

	return (
		<>
			<MovieDetailsSection
				data={movieDetailsData}
				crew={movieCreditsData.crew}
			/>

			<div className="flex flex-col items-start gap-8 lg:gap-4 lg:grid lg:grid-cols-[90%,1fr] py-4 container">
				<CastSection data={movieCreditsData.cast} />
				<AdditionalInformation data={movieDetailsData} />
			</div>
		</>
	)
}
