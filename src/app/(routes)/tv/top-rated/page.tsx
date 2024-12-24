import { TopRatedTvList } from '@/components/pages/tv/top-rated/top-rated-tv-list'
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
	title: 'Séries com a melhor classificação',
	description: 'Encontre as séries com a melhor classificação',
}

export default async function TopRatedTvPage(props: {
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
							<Link href="/tv">Séries</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>Melhor classificação</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<SectionTitle>
				Séries com a <span className="text-primary">melhor classificação</span>
			</SectionTitle>

			<Suspense fallback={<MovieListSkeleton />} key={page}>
				<TopRatedTvList page={page} />
			</Suspense>
		</section>
	)
}
