import { SectionTitle } from '@/components/shared/section-title'
import type { Cast } from '@/types/cast'
import { CastCard } from './cast-card'

type CastSectionProps = {
	data: Cast[]
}

export const CastSection = ({ data }: CastSectionProps) => {
	return (
		<section className="space-y-4 lg:pr-4 w-full">
			<SectionTitle className="lg:px-4">Elenco Principal</SectionTitle>

			<div
				className="flex items-center gap-3 lg:px-4 pb-5 overflow-x-auto"
				style={{
					maskImage: 'linear-gradient(to left, transparent, #fafafa 10%)',
				}}
			>
				{data.map((cast) => (
					<CastCard key={cast.id} cast={cast} />
				))}
			</div>
		</section>
	)
}
