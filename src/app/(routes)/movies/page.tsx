import { MovieList } from '@/components/shared/movie-list'
import { Pagination } from '@/components/shared/pagination'
import { Search } from '@/components/shared/search'
import { SectionTitle } from '@/components/shared/section-title'
import { getMovies } from '@/services/get-movies'

export const metadata = {
	title: 'Filmes',
	description: 'Encontre os filmes mais populares do momento',
}

export default async function MoviesPage(props: {
	searchParams: Promise<{ query: string; page: string }>
}) {
	const searchParams = await props.searchParams
	const query = searchParams?.query || ''
	const page = Number(searchParams?.page) || 1
	const data = await getMovies(query, page)

	if (!data || !data.results) {
		return null
	}

	return (
		<section className="space-y-8 py-8 container">
			<Search />

			<div className="space-y-6">
				<SectionTitle>Filmes ({data.total_results})</SectionTitle>

				<MovieList movies={data?.results} />

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

				{data && (
					<Pagination totalPages={data.total_pages} currentPage={page} />
				)}
			</div>
		</section>
	)
}
