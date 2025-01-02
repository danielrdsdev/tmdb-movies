import { getUpcomingMovies } from '@/services/movie/get-upcoming-movies'

import { MovieCard } from '@/components/shared/movie-card'
import { Pagination } from '@/components/shared/pagination'

type UpcomingMovieListProps = {
	page: number
}

export const UpcomingMovieList = async ({ page }: UpcomingMovieListProps) => {
	const data = await getUpcomingMovies(page)

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
