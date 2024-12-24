import { MEDIA_TYPES_NAMES } from '@/constants/media-type'
import type { SearchMultiData } from '@/types/search-multi'
import { MediaTypeItem } from './media-type-item'

type MediaTypesResultProps = {
	data: SearchMultiData | undefined
}

export const MediaTypesResult = ({ data }: MediaTypesResultProps) => {
	function getMediaCount(mediaType: string) {
		return data?.results.filter((result) => result.media_type === mediaType)
			.length
	}

	return (
		<div className="border rounded-lg">
			<div className="space-y-0.5 p-4 border-b">
				<h2 className="font-semibold text-center text-lg">
					Resultado da pesquisa
				</h2>
				<p className="text-center text-muted-foreground text-xs">
					{data
						? `${data.total_results} resultados encontrados`
						: 'Nenhum resultado encontrado'}
				</p>
			</div>

			<MediaTypeItem mediaType={MEDIA_TYPES_NAMES.movie}>
				{getMediaCount('movie')}
			</MediaTypeItem>
			<MediaTypeItem mediaType={MEDIA_TYPES_NAMES.tv}>
				{getMediaCount('tv')}
			</MediaTypeItem>
			<MediaTypeItem mediaType={MEDIA_TYPES_NAMES.person}>
				{getMediaCount('person')}
			</MediaTypeItem>
		</div>
	)
}
