'use client'
import { usePagination } from '@/hooks/use-pagination'
import {
	ChevronLeft,
	ChevronRight,
	ChevronsLeft,
	ChevronsRight,
} from 'lucide-react'
import { Button } from '../ui/button'

export const Pagination = ({
	totalPages,
	currentPage,
}: { totalPages: number; currentPage: number }) => {
	const { handleNavigate } = usePagination()

	return (
		<div className="flex justify-between items-center">
			<p className="text-sm">
				Pagina {currentPage} de {totalPages}
			</p>

			<div className="flex items-center gap-2">
				<Button
					size="icon"
					variant="outline"
					onClick={() => handleNavigate(1)}
					disabled={currentPage === 1}
					aria-label="First page"
				>
					<ChevronsLeft className="size-4" />
				</Button>

				<Button
					size="icon"
					variant="outline"
					onClick={() => handleNavigate(currentPage - 1)}
					disabled={currentPage === 1}
					aria-label="Prev page"
				>
					<ChevronLeft className="size-4" />
				</Button>

				<Button
					size="icon"
					variant="outline"
					onClick={() => handleNavigate(currentPage + 1)}
					disabled={currentPage === totalPages}
					aria-label="Next page"
				>
					<ChevronRight className="size-4" />
				</Button>

				<Button
					size="icon"
					variant="outline"
					onClick={() => handleNavigate(totalPages)}
					disabled={currentPage === totalPages}
					aria-label="Last page"
				>
					<ChevronsRight className="size-4" />
				</Button>
			</div>
		</div>
	)
}
