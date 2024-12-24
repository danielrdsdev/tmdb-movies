import { Pagination } from '@/components/shared/pagination'
import { TvCard } from '@/components/shared/tv-card'
import { getTopRatedTv } from '@/services/tv/get-top-rated-tv'

type TopRatedTvListProps = {
	page: number
}

export const TopRatedTvList = async ({ page }: TopRatedTvListProps) => {
	const data = await getTopRatedTv(page)

	return (
		<>
			<div className="gap-6 grid grid-cols-8">
				{data?.results.map((result) => (
					<TvCard key={result.id} tv={result} />
				))}
			</div>

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
		</>
	)
}
