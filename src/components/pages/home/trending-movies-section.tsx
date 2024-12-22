import { SectionTitle } from '@/components/shared/section-title'
import { getTrendingMovies } from '@/services/get-trending-movies'
import { MovieCard } from './movie-card'

export const TrendingMoviesSection = async () => {
	const data = await getTrendingMovies()

	if (!data || !data.results) {
		return null
	}

	return (
		<section className="space-y-4 py-8 container">
			<SectionTitle>Tendencias</SectionTitle>

			<div
				className="flex gap-4 pb-4 w-full overflow-x-auto"
				style={{
					maskImage: 'linear-gradient(to left, transparent, #fafafa 10%)',
				}}
			>
				{data.results.map((movie) => (
					<MovieCard key={movie.id} movie={movie} />
				))}
			</div>
		</section>
	)
}
