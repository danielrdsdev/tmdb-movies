import { Pagination } from '@/components/shared/pagination'
import { getSearchMulti } from '@/services/search/get-search-multi'
import { MediaTypesResult } from './media-types-result'
import { SearchCard } from './search-card'

type SearchListProps = {
	query: string
	page: number
}

export const SearchList = async ({ query, page }: SearchListProps) => {
	const data = await getSearchMulti(query, page)

	const filteredData = data?.results.filter(
		(result) => result.poster_path || result.profile_path
	)

	return (
		<div className="items-start gap-8 grid grid-cols-1 lg:grid-cols-[20rem,1fr]">
			<MediaTypesResult data={data} />

			<div className="space-y-6">
				{filteredData?.map((result) => (
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

				{data && data.results.length > 0 && (
					<Pagination totalPages={data.total_pages} currentPage={page} />
				)}
			</div>
		</div>
	)
}
