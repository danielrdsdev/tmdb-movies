import { SectionTitle } from '@/components/section-title'
import { MovieCreditCard } from './movie-credit-card'

type MovieCreditsSectionProps = {
	data: MovieCredit
}

export const MovieCreditsSection = ({ data }: MovieCreditsSectionProps) => {
	return (
		<section className="py-4 space-y-4 container">
			<SectionTitle className="px-4">Elenco Principal</SectionTitle>

			<div className="flex items-center gap-3 overflow-x-auto pb-5 px-4">
				{data.cast.map((cast) => (
					<MovieCreditCard key={cast.id} cast={cast} />
				))}
			</div>
		</section>
	)
}
