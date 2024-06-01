import { SectionTitle } from '@/components/section-title'
import { MovieCreditCard } from './movie-credit-card'

type MovieCreditsSectionProps = {
	data: CastMember[]
}

export const MovieCreditsSection = ({ data }: MovieCreditsSectionProps) => {
	return (
		<section className="space-y-4 pr-4">
			<SectionTitle className="px-4">Elenco Principal</SectionTitle>

			<div
				className="flex items-center gap-3 overflow-x-auto pb-5 px-4"
				style={{
					maskImage: 'linear-gradient(to left, transparent, #fafafa 10%)'
				}}
			>
				{data.map((cast) => (
					<MovieCreditCard key={cast.id} cast={cast} />
				))}
			</div>
		</section>
	)
}
