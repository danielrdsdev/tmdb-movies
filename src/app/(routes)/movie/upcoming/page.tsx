import { Link } from 'next-view-transitions'
import { Suspense } from 'react'

import { UpcomingMovieList } from '@/components/pages/movie/upcoming/upcoming-movie-list'
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

export const metadata = {
	title: 'Próximas estreais em filmes',
	description: 'Encontre os filmes que vão estrear em breve',
}

export default async function UpcomingMoviesPage(props: {
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
						<BreadcrumbLink asChild>
							<Link href="/movie">Filmes</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>Próximas estreias</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<SectionTitle>
				Próximas <span className="text-primary">estreias</span>
			</SectionTitle>

			<Suspense fallback={<MovieListSkeleton />} key={page}>
				<UpcomingMovieList page={page} />
			</Suspense>
		</section>
	)
}
