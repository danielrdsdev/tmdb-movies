import { HeroSection } from './components/hero-section'
import { TrendSection } from './components/trend-section'

export default function HomePage() {
	return (
		<div className="container">
			<HeroSection />
			<TrendSection />
		</div>
	)
}
