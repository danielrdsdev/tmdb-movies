import { SectionTitle } from '@/components/shared/section-title'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Suspense } from 'react'
import { MovieListSkeleton } from './movie-list-skeleton'
import { TrendingMoviesDay } from './trending-movies-day'
import { TrendingMoviesWeek } from './trending-movies-week'

export const TrendingMoviesSection = () => {
	return (
		<section className="py-8 container">
			<Tabs defaultValue="day" className="space-y-4">
				<div className="flex items-center gap-4">
					<SectionTitle>
						Tendências em <span className="text-primary">filmes</span>
					</SectionTitle>

					<TabsList>
						<TabsTrigger value="day">Hoje</TabsTrigger>
						<TabsTrigger value="week">Esta semana</TabsTrigger>
					</TabsList>
				</div>

				<TabsContent value="day">
					<Suspense fallback={<MovieListSkeleton />}>
						<TrendingMoviesDay />
					</Suspense>
				</TabsContent>

				<TabsContent value="week">
					<Suspense fallback={<MovieListSkeleton />}>
						<TrendingMoviesWeek />
					</Suspense>
				</TabsContent>
			</Tabs>
		</section>
	)
}
