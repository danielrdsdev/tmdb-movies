import { PopularMovieList } from '@/components/pages/movie/popular/popular-movie-list'
import { MovieListSkeleton } from '@/components/shared/movie-list-skeleton'
import { SectionTitle } from '@/components/shared/section-title'
import { Suspense } from 'react'

export const metadata = {
	title: 'Filmes populares',
	description: 'Encontre os filmes mais populares do momento',
}

export default async function PopularMoviesPage(props: {
	searchParams: Promise<{ page: string }>
}) {
	const searchParams = await props.searchParams
	const page = Number(searchParams?.page) || 1

	return (
		<section className="space-y-8 py-8 container">
			<SectionTitle>Filmes populares</SectionTitle>

			<Suspense fallback={<MovieListSkeleton />} key={page}>
				<PopularMovieList page={page} />
			</Suspense>
		</section>
	)
}
