import { TvCard } from '@/components/shared/tv-card'
import { getTrendingTv } from '@/services/tv/get-trending-tv'

export const TrendingTvDay = async () => {
	const data = await getTrendingTv('day')

	return (
		<div
			className="flex gap-5 pb-4 w-full overflow-x-auto"
			style={{
				maskImage: 'linear-gradient(to left, transparent, #fafafa 10%)',
			}}
		>
			{data?.results.map((tv) => (
				<TvCard key={tv.id} tv={tv} />
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
		</div>
	)
}
