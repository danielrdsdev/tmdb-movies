import { Search } from '@/components/shared/search'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { SearchIcon } from 'lucide-react'

export const SearchDialog = () => {
	return (
		<Dialog>
			<DialogTrigger aria-label="Search icon">
				<SearchIcon className="size-5" />
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Fazer uma pesquisa</DialogTitle>
					<DialogDescription>
						Encontre filmes, séries ou pessoas
					</DialogDescription>
				</DialogHeader>

				<Search
					action="/search"
					placeholder="Pesquisar filme, série ou pessoa"
				/>
			</DialogContent>
		</Dialog>
	)
}
