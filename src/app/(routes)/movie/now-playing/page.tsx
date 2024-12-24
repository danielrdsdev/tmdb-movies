import { NowPlayingMovieList } from '@/components/pages/movie/now-playing/now-playing-movie-list'
import { MovieListSkeleton } from '@/components/shared/movie-list-skeleton'
import { SectionTitle } from '@/components/shared/section-title'
import { Suspense } from 'react'

export const metadata = {
	title: 'Filmes em exibição',
	description: 'Encontre os em exibição no momento',
}

export default async function NowPlayingMoviesPage(props: {
	searchParams: Promise<{ page: string }>
}) {
	const searchParams = await props.searchParams
	const page = Number(searchParams?.page) || 1

	return (
		<section className="space-y-8 py-8 container">
			<SectionTitle>Filmes em exibição</SectionTitle>

			<Suspense fallback={<MovieListSkeleton />} key={page}>
				<NowPlayingMovieList page={page} />
			</Suspense>
		</section>
	)
}
