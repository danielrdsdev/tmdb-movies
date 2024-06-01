import { HeroSection } from './components/hero-section'
import { MovieTrendingSection } from './components/movie-trending-section'

export default function HomePage() {
	return (
		<div className="container">
			<HeroSection />
			<MovieTrendingSection />
		</div>
	)
}
