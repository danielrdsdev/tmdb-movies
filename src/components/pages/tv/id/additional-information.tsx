import { InfoCard } from '@/components/shared/info-card'
import { LANGUAGES } from '@/constants/languages'
import type { TvDetails } from '@/types/tv'

type AdditionalInformationProps = {
	data: TvDetails
}

export const AdditionalInformation = ({ data }: AdditionalInformationProps) => {
	return (
		<div className="flex flex-col gap-8">
			<InfoCard
				info_title="Titulo original"
				info_content={data.original_name}
			/>
			<InfoCard
				info_title="Estado"
				info_content={data.status === 'Released' ? 'Lançado' : data.status}
			/>
			<InfoCard
				info_title="Idioma original"
				info_content={LANGUAGES[data.original_language]}
			/>
		</div>
	)
}
