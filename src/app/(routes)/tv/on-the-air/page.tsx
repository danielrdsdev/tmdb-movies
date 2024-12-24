import { OnTheAirTvList } from '@/components/pages/tv/on-the-air/on-the-air-tv-list'
import { MovieListSkeleton } from '@/components/shared/movie-list-skeleton'
import { SectionTitle } from '@/components/shared/section-title'
import { Suspense } from 'react'

export const metadata = {
	title: 'Séries no ar hoje',
	description: 'Encontre as séries no ar hoje',
}

export default async function OnTheAirTvPage(props: {
	searchParams: Promise<{ page: string }>
}) {
	const searchParams = await props.searchParams
	const page = Number(searchParams?.page) || 1

	return (
		<section className="space-y-8 py-8 container">
			<SectionTitle>
				Séries <span className="text-primary">no ar hoje</span>
			</SectionTitle>

			<Suspense fallback={<MovieListSkeleton />} key={page}>
				<OnTheAirTvList page={page} />
			</Suspense>
		</section>
	)
}
