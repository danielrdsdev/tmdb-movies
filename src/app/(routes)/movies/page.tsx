import { MovieCard } from '@/components/movie-card'
import { Pagination } from '@/components/pagination'
import { Search } from '@/components/search'
import { SectionTitle } from '@/components/section-title'
import { fetchTmdb } from '@/lib/fetch-tmdb'
import type { MovieData } from '@/types/movie-trending'

export default async function MoviesPage({
	searchParams
}: {
	searchParams?: {
		query?: string
		page?: number
	}
}) {
	const query = searchParams?.query || ''
	const page = Number(searchParams?.page) || 1
	const fetchParams = `/discover/movie?include_adult=false&include_video=false&language=pt-BR&sort_by=popularity.desc${query}&page=${page}`
	const data = await fetchTmdb<MovieData>(fetchParams)

	if (!data || !data.results) {
		return null
	}

	return (
		<section className="space-y-8 py-8 container">
			<Search />

			<div className="space-y-6">
				<SectionTitle>Filmes ({data.total_results})</SectionTitle>

				<div className="space-y-6">
					{data.results.map((movie) => (
						<MovieCard key={movie.id} movie={movie} />
					))}
				</div>

				<Pagination totalPages={data.total_pages} currentPage={page} />
			</div>
		</section>
	)
}
