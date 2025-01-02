import { Link } from 'next-view-transitions'
import { Suspense } from 'react'

import { NowPlayingMovieList } from '@/components/pages/movie/now-playing/now-playing-movie-list'
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
						<BreadcrumbPage>Em exibição</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<SectionTitle>
				Filmes <span className="text-primary">em exibição</span>
			</SectionTitle>

			<Suspense fallback={<MovieListSkeleton />} key={page}>
				<NowPlayingMovieList page={page} />
			</Suspense>
		</section>
	)
}
