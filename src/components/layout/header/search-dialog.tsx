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
					<DialogTitle>Buscar filmes</DialogTitle>
					<DialogDescription>
						Digite para buscar algum filme desejado
					</DialogDescription>
				</DialogHeader>

				<Search />
			</DialogContent>
		</Dialog>
	)
}
