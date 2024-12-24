import { HeroSection } from '@/components/pages/home/hero-section'
import { PopularMoviesSection } from '@/components/pages/home/popular-movies-section'
import { TrendingMoviesSection } from '@/components/pages/home/trending-movies-section'
import { TrendingTvSection } from '@/components/pages/home/trending-tv-section'

export default function HomePage() {
	return (
		<>
			<HeroSection />
			<TrendingMoviesSection />
			<TrendingTvSection />
			<PopularMoviesSection />
		</>
	)
}
