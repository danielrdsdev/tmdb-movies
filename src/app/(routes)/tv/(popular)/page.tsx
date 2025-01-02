import { Link } from 'next-view-transitions'
import { Suspense } from 'react'

import { PopularTvList } from '@/components/pages/tv/popular/popular-tv-list'
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
	title: 'Séries',
	description: 'Encontre as séries mais populares do momento',
}

export default async function PopularTvPage(props: {
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
						<BreadcrumbPage>Séries</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<SectionTitle>
				Séries <span className="text-primary">populares</span>
			</SectionTitle>

			<Suspense fallback={<MovieListSkeleton />} key={page}>
				<PopularTvList page={page} />
			</Suspense>
		</section>
	)
}
