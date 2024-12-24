import { SectionTitle } from '@/components/shared/section-title'
import { Suspense } from 'react'
import { MovieListSkeleton } from '../movie-list-skeleton'
import { TrendingTvList } from './trending-tv-list'

export const TrendingTvSection = () => {
	return (
		<section className="space-y-4 py-8 container">
			<SectionTitle>Tendencias em séries</SectionTitle>

			<Suspense fallback={<MovieListSkeleton />}>
				<TrendingTvList />
			</Suspense>
		</section>
	)
}
