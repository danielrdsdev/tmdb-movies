import { MovieCard } from '@/components/movie-card'
import { SectionTitle } from '@/components/section-title'
import { fetchTmdb } from '@/lib/fetch-tmdb'
import type { MovieData } from '@/types/movie-trending'

export const PopularMovieSection = async () => {
	const params = '/movie/popular?language=pt-BR'
	const data = await fetchTmdb<MovieData>(params)

	if (!data || !data.results) {
		return null
	}

	return (
		<section className="space-y-4 py-8">
			<SectionTitle>Os mais populares</SectionTitle>

			<div
				className="overflow-x-auto w-full pb-4 flex gap-4"
				style={{
					maskImage: 'linear-gradient(to left, transparent, #fafafa 10%)'
				}}
			>
				{data.results.map((movie) => (
					<MovieCard key={movie.id} movie={movie} />
				))}
			</div>
		</section>
	)
}
