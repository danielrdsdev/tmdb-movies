import { Link } from 'next-view-transitions'
import { Suspense } from 'react'

import { PersonList } from '@/components/pages/person/person-list'
import { PersonListSkeleton } from '@/components/pages/person/person-list-skeleton'
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
	title: 'Pessoas',
	description: 'Encontre as pessoas mais populares do momento',
}

export default async function PersonPage(props: {
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
						<BreadcrumbPage>Pessoas</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<SectionTitle>
				Pessoas <span className="text-primary">populares</span>
			</SectionTitle>

			<Suspense fallback={<PersonListSkeleton />} key={page}>
				<PersonList page={page} />
			</Suspense>
		</section>
	)
}
