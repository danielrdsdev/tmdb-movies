import { Pagination } from '@/components/shared/pagination'
import { TvCard } from '@/components/shared/tv-card'
import { getOnTheAirTv } from '@/services/tv/get-on-the-air-tv'

type OnTheAirTvListProps = {
	page: number
}

export const OnTheAirTvList = async ({ page }: OnTheAirTvListProps) => {
	const data = await getOnTheAirTv(page)

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
