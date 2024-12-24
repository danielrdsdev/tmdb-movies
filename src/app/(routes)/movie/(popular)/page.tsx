import { PopularMovieList } from '@/components/pages/movie/popular/popular-movie-list'
import { MovieListSkeleton } from '@/components/shared/movie-list-skeleton'
import { SectionTitle } from '@/components/shared/section-title'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Link } from 'next-view-transitions'
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
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link href="/">Home</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>Filmes</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<SectionTitle>
				Filmes <span className="text-primary">populares</span>
			</SectionTitle>

			<Suspense fallback={<MovieListSkeleton />} key={page}>
				<PopularMovieList page={page} />
			</Suspense>
		</section>
	)
}
