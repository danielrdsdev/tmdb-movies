import { MovieCard } from '@/components/movie-card'
import { SectionTitle } from '@/components/section-title'
import { getMoviesTrend } from './get-trend-movies'

export const TrendSection = async () => {
	const data = await getMoviesTrend()

	if (!data || !data.results) {
		return null
	}

	return (
		<section className="space-y-4 py-16">
			<SectionTitle>Tendencias</SectionTitle>

			<div className="overflow-x-auto w-full pb-4 flex gap-4">
				{data.results.map((movie) => (
					<MovieCard key={movie.id} movie={movie} />
				))}
			</div>
		</section>
	)
}
