import { UpcomingMovieList } from '@/components/pages/movie/upcoming/upcoming-movie-list'
import { MovieListSkeleton } from '@/components/shared/movie-list-skeleton'
import { SectionTitle } from '@/components/shared/section-title'
import { Suspense } from 'react'

export const metadata = {
	title: 'Filmes a estrear em breve',
	description: 'Encontre os filmes que vão estrear em breve',
}

export default async function UpcomingMoviesPage(props: {
	searchParams: Promise<{ page: string }>
}) {
	const searchParams = await props.searchParams
	const page = Number(searchParams?.page) || 1

	return (
		<section className="space-y-8 py-8 container">
			<SectionTitle>
				Filmes a <span className="text-primary">estrear em breve</span>
			</SectionTitle>

			<Suspense fallback={<MovieListSkeleton />} key={page}>
				<UpcomingMovieList page={page} />
			</Suspense>
		</section>
	)
}
