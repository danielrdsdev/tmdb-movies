import { Pagination } from '@/components/shared/pagination'
import { getSearchMulti } from '@/services/search/get-search-multi'
import { SearchCard } from './search-card'

type SearchListProps = {
	query: string
	page: number
}

export const SearchList = async ({ query, page }: SearchListProps) => {
	const data = await getSearchMulti(query, page)

	return (
		<div className="space-y-6">
			{data?.results.map((result) => (
				<SearchCard key={result.id} search={result} />
			))}

			{data && data.results.length <= 0 && (
				<p className="text-center text-muted-foreground">
					Nenhum resultado encontrado
				</p>
			)}

			{!data && (
				<p className="text-center text-muted-foreground">
					Erro ao buscar resultados
				</p>
			)}

			{data && <Pagination totalPages={data.total_pages} currentPage={page} />}
		</div>
	)
}
