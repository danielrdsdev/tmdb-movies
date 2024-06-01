import { Suspense } from 'react'
import { HeroSection } from './components/hero-section'
import { PopularMovieSection } from './components/popular-movie.section'
import { PopularMovieSkeleton } from './components/popular-movie.section/popular-movie-skeleton'
import { TrendingMovieSection } from './components/trending-movie-section'
import { TrendingMovieSkeleton } from './components/trending-movie-section/trending-movie-skeleton'

export default function HomePage() {
	return (
		<div className="container">
			<HeroSection />

			<Suspense fallback={<TrendingMovieSkeleton />}>
				<TrendingMovieSection />
			</Suspense>

			<Suspense fallback={<PopularMovieSkeleton />}>
				<PopularMovieSection />
			</Suspense>
		</div>
	)
}
