import { MovieCard } from '@/components/movie-card'
import { SectionTitle } from '@/components/section-title'
import { fetchTmdb } from '@/lib/fetch-tmdb'
import type { MovieData } from '@/types/movie-trending'

export const MovieTrendingSection = async () => {
	const params = '/trending/movie/day?language=pt-BR'
	const data = await fetchTmdb<MovieData>(params)

	if (!data || !data.results) {
		return null
	}

	return (
		<section className="space-y-4 py-8">
			<SectionTitle>Tendencias</SectionTitle>

			<div className="overflow-x-auto w-full pb-4 flex gap-4">
				{data.results.map((movie) => (
					<MovieCard key={movie.id} movie={movie} />
				))}
			</div>
		</section>
	)
}
