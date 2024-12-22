import { HeroSection } from '@/components/pages/home/hero-section'
import { PopularMoviesSection } from '@/components/pages/home/popular-movies-section'
import { PopularMoviesSkeleton } from '@/components/pages/home/popular-movies-skeleton'
import { TrendingMoviesSection } from '@/components/pages/home/trending-movies-section'
import { TrendingMoviesSkeleton } from '@/components/pages/home/trending-movies-skeleton'
import { Suspense } from 'react'

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
