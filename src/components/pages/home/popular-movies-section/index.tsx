import { SectionTitle } from '@/components/shared/section-title'
import { Suspense } from 'react'
import { MovieListSkeleton } from '../movie-list-skeleton'
import { PopularMoviesList } from './popular-movies-list'

export const PopularMoviesSection = () => {
	return (
		<section className="space-y-4 py-8 container">
			<SectionTitle>
				Os mais <span className="text-primary">populares</span>
			</SectionTitle>

			<Suspense fallback={<MovieListSkeleton />}>
				<PopularMoviesList />
			</Suspense>
		</section>
	)
}
