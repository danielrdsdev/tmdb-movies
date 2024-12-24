import { MovieCard } from '@/components/shared/movie-card'
import { getTrendingMovie } from '@/services/movie/get-trending-movie'

export const TrendingMoviesWeek = async () => {
	const data = await getTrendingMovie('week')

	return (
		<div
			className="flex gap-5 pb-4 w-full overflow-x-auto"
			style={{
				maskImage: 'linear-gradient(to left, transparent, #fafafa 10%)',
			}}
		>
			{data?.results.map((movie) => (
				<MovieCard key={movie.id} movie={movie} />
			))}

			{data && data.results.length <= 0 && (
				<p className="text-center text-muted-foreground">
					Nenhum filme encontrado
				</p>
			)}

			{!data && (
				<p className="text-center text-muted-foreground">
					Erro ao buscar filmes
				</p>
			)}
		</div>
	)
}
