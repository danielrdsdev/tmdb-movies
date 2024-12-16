import { MovieCard } from '@/components/movie-card'
import { Pagination } from '@/components/pagination'
import { Search } from '@/components/search'
import { SearchSkeleton } from '@/components/search/search-skeleton'
import { SectionTitle } from '@/components/section-title'
import { fetchTmdb } from '@/lib/fetch-tmdb'
import type { MovieData } from '@/types/movie-trending'
import { Suspense } from 'react'

export const metadata = {
	title: 'Filmes',
	description: 'Encontre os filmes mais populares do momento'
}

export default async function MoviesPage(props: {
	searchParams: Promise<{ query: string; page: string }>
}) {
	const searchParams = await props.searchParams
	const query = searchParams?.query || ''
	const page = Number(searchParams?.page) || 1
	const fetchParams = `/discover/movie?include_adult=false&include_video=false&language=pt-BR&sort_by=popularity.desc&query=${query}&page=${page}`
	const data = await fetchTmdb<MovieData>(fetchParams)

	if (!data || !data.results) {
		return null
	}

	return (
		<section className="space-y-8 py-8 container">
			<Suspense fallback={<SearchSkeleton />}>
				<Search testId="search-form-movies" />
			</Suspense>

			<div className="space-y-6">
				<SectionTitle>Filmes ({data.total_results})</SectionTitle>

				<div className="space-y-6">
					{data.results.map((movie) => (
						<MovieCard key={movie.id} movie={movie} />
					))}
				</div>

				<Pagination totalPages={data.total_pages} currentPage={page} />
			</div>
		</section>
	)
}
