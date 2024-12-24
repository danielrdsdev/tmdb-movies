import { SectionTitle } from '@/components/shared/section-title'
import { Suspense } from 'react'
import { MovieListSkeleton } from '../movie-list-skeleton'
import { TrendingMoviesList } from './trending-movies-list'

export const TrendingMoviesSection = () => {
	return (
		<section className="space-y-4 py-8 container">
			<SectionTitle>
				Tendencias em <span className="text-primary">filmes</span>
			</SectionTitle>

			<Suspense fallback={<MovieListSkeleton />}>
				<TrendingMoviesList />
			</Suspense>
		</section>
	)
}
