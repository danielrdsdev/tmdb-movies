'use client'
import { Search } from '@/components/search'
import { SearchSkeleton } from '@/components/search/search-skeleton'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog'
import { SearchIcon } from 'lucide-react'
import { Suspense, useState } from 'react'

export const SearchDialog = () => {
	const [open, setOpen] = useState(false)

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger>
				<span className="sr-only">Search icon</span>
				<SearchIcon className="size-5" />
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Buscar filmes</DialogTitle>
					<DialogDescription>
						Digite para buscar algum filme desejado
					</DialogDescription>
				</DialogHeader>

				<Suspense fallback={<SearchSkeleton />}>
					<Search setOpen={setOpen} />
				</Suspense>
			</DialogContent>
		</Dialog>
	)
}
