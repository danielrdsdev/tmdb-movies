import { SectionTitle } from '@/components/section-title'
import { getPopularMovies } from '@/services/get-popular-movies'
import { MovieCard } from '../movie-card'

export const PopularMoviesSection = async () => {
	const data = await getPopularMovies()

	if (!data || !data.results) {
		return null
	}

	return (
		<section className="space-y-4 py-8 container">
			<SectionTitle>Os mais populares</SectionTitle>

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
