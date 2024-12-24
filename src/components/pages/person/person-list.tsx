import { Pagination } from '@/components/shared/pagination'
import { getPopularPerson } from '@/services/person/get-popular-person'
import { PersonCard } from './person-card'

type PersonListProps = {
	page: number
}

export const PersonList = async ({ page }: PersonListProps) => {
	const data = await getPopularPerson(page)

	return (
		<>
			<div className="gap-6 grid grid-cols-4">
				{data?.results.map((result) => (
					<PersonCard key={result.id} person={result} />
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
