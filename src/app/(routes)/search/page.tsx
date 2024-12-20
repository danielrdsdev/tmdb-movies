import { MovieCard } from '@/components/movie-card'
import { Pagination } from '@/components/pagination'
import { Search } from '@/components/search'
import { SearchSkeleton } from '@/components/search/search-skeleton'
import { SectionTitle } from '@/components/section-title'
import { fetchTmdb } from '@/lib/fetch-tmdb'
import type { MovieData } from '@/types/movie-trending'
import { Suspense } from 'react'

export default async function SearchPage(props: {
	searchParams: Promise<{ query: string; page: string }>
}) {
	const searchParams = await props.searchParams
	const query = searchParams?.query || ''
	const page = Number(searchParams?.page) || 1
	const fetchParams = `/search/movie?query=${query}&include_adult=false&language=pt-BR&page=${page}`
	const data = await fetchTmdb<MovieData>(fetchParams)

	if (!data || !data.results) {
		return null
	}

	return (
		<section className="space-y-8 py-8 container">
			<Suspense fallback={<SearchSkeleton />}>
				<Search testId="search-form-page" />
			</Suspense>

			{data.results.length > 0 ? (
				<div className="space-y-6">
					<SectionTitle>
						Resultados da pesquisa ({data.total_results})
					</SectionTitle>

					<div className="space-y-6">
						{data.results.map((movie) => (
							<MovieCard key={movie.id} movie={movie} />
						))}
					</div>

					<Pagination totalPages={data.total_pages} currentPage={page} />
				</div>
			) : (
				<p className="text-center text-sm">
					Nenhum resultado encontrado para a pesquisa.
				</p>
			)}
		</section>
	)
}
