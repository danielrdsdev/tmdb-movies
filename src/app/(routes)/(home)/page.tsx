import { Suspense } from 'react'
import { HeroSection } from './components/hero-section'
import { PopularMoviesSection } from './components/popular-movies-section'
import { PopularMoviesSkeleton } from './components/popular-movies-section/popular-movies-skeleton'
import { TrendingMoviesSection } from './components/trending-movies-section'
import { TrendingMoviesSkeleton } from './components/trending-movies-section/trending-movies-skeleton'

export default function HomePage() {
	return (
		<>
			<HeroSection />

			<Suspense fallback={<TrendingMoviesSkeleton />}>
				<TrendingMoviesSection />
			</Suspense>

			<Suspense fallback={<PopularMoviesSkeleton />}>
				<PopularMoviesSection />
			</Suspense>
		</>
	)
}
