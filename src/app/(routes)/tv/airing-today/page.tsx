import { AiringTodayTvList } from '@/components/pages/tv/airing-today/airing-today-tv-list'
import { MovieListSkeleton } from '@/components/shared/movie-list-skeleton'
import { SectionTitle } from '@/components/shared/section-title'
import { Suspense } from 'react'

export const metadata = {
	title: 'Séries emitidas hoje',
	description: 'Encontre as séries emitidas hoje',
}

export default async function AiringTodayTvPage(props: {
	searchParams: Promise<{ page: string }>
}) {
	const searchParams = await props.searchParams
	const page = Number(searchParams?.page) || 1

	return (
		<section className="space-y-8 py-8 container">
			<SectionTitle>
				Séries <span className="text-primary">emitidas hoje</span>
			</SectionTitle>

			<Suspense fallback={<MovieListSkeleton />} key={page}>
				<AiringTodayTvList page={page} />
			</Suspense>
		</section>
	)
}
