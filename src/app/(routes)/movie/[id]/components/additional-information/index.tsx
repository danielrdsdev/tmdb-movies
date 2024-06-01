import { formatCurrency } from '@/helpers/format-currency'
import { getLanguageFullName } from '@/helpers/get-language-full-name'
import type { MovieDetails } from '@/types/movie-details'
import { InfoCard } from './info-card'

type AdditionalInformationProps = {
	data: MovieDetails
}

export const AdditionalInformation = ({ data }: AdditionalInformationProps) => {
	return (
		<div className="flex flex-col gap-8">
			<InfoCard
				info_title="Titulo original"
				info_content={data.original_title}
			/>
			<InfoCard
				info_title="Estado"
				info_content={data.status === 'Released' ? 'Lançado' : data.status}
			/>
			<InfoCard
				info_title="Idioma original"
				info_content={getLanguageFullName(data.original_language)}
			/>
			<InfoCard
				info_title="Orçamento"
				info_content={formatCurrency(data.budget)}
			/>
			<InfoCard
				info_title="Bilheteria"
				info_content={formatCurrency(data.revenue)}
			/>
		</div>
	)
}
