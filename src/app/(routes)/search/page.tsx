import { SearchList } from '@/components/pages/search/search-list'
import { SearchListSkeleton } from '@/components/pages/search/search-list-skeleton'
import { Search } from '@/components/shared/search'
import { SectionTitle } from '@/components/shared/section-title'
import { Suspense } from 'react'

export const metadata = {
	title: 'Pesquisar filmes',
	description: 'Encontre os filmes que deseja',
}

export default async function SearchPage(props: {
	searchParams: Promise<{ query: string; page: string }>
}) {
	const searchParams = await props.searchParams
	const query = searchParams?.query || ''
	const page = Number(searchParams?.page) || 1

	return (
		<section className="space-y-8 py-8 container">
			<Suspense fallback={null}>
				<Search
					action="/search"
					placeholder="Pesquisar por um filme, série ou pessoa"
				/>
			</Suspense>

			<SectionTitle>Resultados da pesquisa</SectionTitle>

			<Suspense fallback={<SearchListSkeleton />} key={query + page}>
				<SearchList query={query} page={page} />
			</Suspense>
		</section>
	)
}
