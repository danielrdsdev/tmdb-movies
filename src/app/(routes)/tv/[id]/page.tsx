import { AdditionalInformation } from '@/components/pages/tv/id/additional-information'
import { TvDetailsSection } from '@/components/pages/tv/id/tv-details-section'
import { CastSection } from '@/components/shared/cast-section'
import { getSeries } from '@/services/tv/get-series'
import { getTvCredits } from '@/services/tv/get-tv-credits'
import { getTvDetails } from '@/services/tv/get-tv-details'
import { siteUrl } from '@/utils/env'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
	const data = await getSeries()

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
	const data = await getTvDetails(id)

	if (!data) {
		return notFound()
	}

	return {
		title: data.name,
		description: data.overview,
		openGraph: {
			title: data.name,
			description: data.overview,
			url: `${siteUrl}/tv/${data.id}`,
			images: {
				url: `https://image.tmdb.org/t/p/w1280${data.backdrop_path}`,
				alt: data.name,
			},
		},
		twitter: {
			title: data.name,
			description: data.overview,
			images: {
				url: `https://image.tmdb.org/t/p/w1280${data.backdrop_path}`,
				alt: data.name,
			},
		},
	}
}

export default async function TvPage({
	params,
}: { params: Promise<{ id: string }> }) {
	const { id } = await params
	const [tvDetailsData, tvCreditsData] = await Promise.all([
		getTvDetails(id),
		getTvCredits(id),
	])

	if (!tvDetailsData || !tvCreditsData) {
		return notFound()
	}

	return (
		<>
			<TvDetailsSection data={tvDetailsData} crew={tvCreditsData.crew} />

			<div className="flex flex-col items-start gap-8 lg:gap-4 lg:grid lg:grid-cols-[90%,1fr] py-4 container">
				<CastSection data={tvCreditsData.cast} />
				<AdditionalInformation data={tvDetailsData} />
			</div>
		</>
	)
}
