import { PersonList } from '@/components/pages/person/person-list'
import { PersonListSkeleton } from '@/components/pages/person/person-list-skeleton'
import { SectionTitle } from '@/components/shared/section-title'
import { Suspense } from 'react'

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
			<SectionTitle>
				Pessoas <span className="text-primary">populares</span>
			</SectionTitle>

			<Suspense fallback={<PersonListSkeleton />} key={page}>
				<PersonList page={page} />
			</Suspense>
		</section>
	)
}
