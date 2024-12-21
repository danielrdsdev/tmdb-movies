import { MovieList } from '@/components/movie-list'
import { Pagination } from '@/components/pagination'
import { Search } from '@/components/search'
import { SectionTitle } from '@/components/section-title'
import { getMoviesSearch } from '@/services/get-movies-search'

export const metadata = {
	title: 'Pesquisar filmes',
	description: 'Encontre os filmes que deseja',
}

export default async function SearchPage(props: {
	searchParams: Promise<{ query: string; page: string }>
}) {
	const searchParams = await props.searchParams
	const query = searchParams?.query || ''
	const page = Number(searchParams?.page) || 1
	const data = await getMoviesSearch(query, page)

	return (
		<section className="space-y-8 py-8 container">
			<Search />

			<div className="space-y-6">
				<SectionTitle>
					Resultados da pesquisa ({data?.total_results})
				</SectionTitle>

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
