import { getPopularTv } from '@/services/tv/get-popular-tv'

import { Pagination } from '@/components/shared/pagination'
import { TvCard } from '@/components/shared/tv-card'

type PopularTvListProps = {
	page: number
}

export const PopularTvList = async ({ page }: PopularTvListProps) => {
	const data = await getPopularTv(page)

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
