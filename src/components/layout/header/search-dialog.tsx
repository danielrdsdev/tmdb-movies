import { SearchIcon } from 'lucide-react'
import { Suspense } from 'react'

import { Search } from '@/components/shared/search'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'

export const SearchDialog = () => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline" size="icon" aria-label="Abrir pesquisa">
					<SearchIcon className="size-5" />
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Fazer uma pesquisa</DialogTitle>
					<DialogDescription>
						Encontre filmes, séries ou pessoas
					</DialogDescription>
				</DialogHeader>

				<Suspense fallback={null}>
					<Search
						action="/search"
						placeholder="Pesquisar filme, série ou pessoa"
					/>
				</Suspense>
			</DialogContent>
		</Dialog>
	)
}
