import { Suspense } from 'react'

import { SectionTitle } from '@/components/shared/section-title'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MovieListSkeleton } from './movie-list-skeleton'
import { TrendingTvDay } from './trending-tv-day'
import { TrendingTvWeek } from './trending-tv-week'

export const TrendingTvSection = () => {
	return (
		<section className="py-8 container">
			<Tabs defaultValue="day" className="space-y-4">
				<div className="flex items-center gap-4">
					<SectionTitle>
						Tendências em <span className="text-primary">séries</span>
					</SectionTitle>

					<TabsList>
						<TabsTrigger value="day">Hoje</TabsTrigger>
						<TabsTrigger value="week">Esta semana</TabsTrigger>
					</TabsList>
				</div>

				<TabsContent value="day">
					<Suspense fallback={<MovieListSkeleton />}>
						<TrendingTvDay />
					</Suspense>
				</TabsContent>

				<TabsContent value="week">
					<Suspense fallback={<MovieListSkeleton />}>
						<TrendingTvWeek />
					</Suspense>
				</TabsContent>
			</Tabs>
		</section>
	)
}
