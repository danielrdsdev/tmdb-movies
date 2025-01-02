import { getNowPlayingMovies } from '@/services/movie/get-now-playing-movies'

import { MovieCard } from '@/components/shared/movie-card'
import { Pagination } from '@/components/shared/pagination'

type NowPlayingMovieListProps = {
	page: number
}

export const NowPlayingMovieList = async ({
	page,
}: NowPlayingMovieListProps) => {
	const data = await getNowPlayingMovies(page)

	return (
		<>
			<div className="gap-6 grid grid-cols-8">
				{data?.results.map((result) => (
					<MovieCard key={result.id} movie={result} />
				))}
			</div>

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

			{data && <Pagination totalPages={data.total_pages} currentPage={page} />}
		</>
	)
}
