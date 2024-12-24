import { TopRatedTvList } from '@/components/pages/tv/top-rated/top-rated-tv-list'
import { MovieListSkeleton } from '@/components/shared/movie-list-skeleton'
import { SectionTitle } from '@/components/shared/section-title'
import { Suspense } from 'react'

export const metadata = {
	title: 'Séries com a melhor classificação',
	description: 'Encontre as séries com a melhor classificação',
}

export default async function TopRatedTvPage(props: {
	searchParams: Promise<{ page: string }>
}) {
	const searchParams = await props.searchParams
	const page = Number(searchParams?.page) || 1

	return (
		<section className="space-y-8 py-8 container">
			<SectionTitle>Séries com a melhor classificação</SectionTitle>

			<Suspense fallback={<MovieListSkeleton />} key={page}>
				<TopRatedTvList page={page} />
			</Suspense>
		</section>
	)
}
