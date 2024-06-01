import { Suspense } from 'react'
import { HeroSection } from './components/hero-section'
import { MovieTrendingSection } from './components/movie-trending-section'
import { MovieTrendingSkeleton } from './components/movie-trending-skeleton'

export default function HomePage() {
	return (
		<div className="container">
			<HeroSection />
			<Suspense fallback={<MovieTrendingSkeleton />}>
				<MovieTrendingSection />
			</Suspense>
		</div>
	)
}
