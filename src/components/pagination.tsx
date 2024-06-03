'use client'
import {
	ChevronLeft,
	ChevronRight,
	ChevronsLeft,
	ChevronsRight
} from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Button } from './ui/button'

export const Pagination = ({
	totalPages,
	currentPage
}: { totalPages: number; currentPage: number }) => {
	const router = useRouter()
	const searchParams = useSearchParams()
	const pathname = usePathname()

	const navigateToPage = (pageNumber: number | string) => {
		const params = new URLSearchParams(searchParams)
		params.set('page', pageNumber.toString())
		router.push(`${pathname}?${params.toString()}`)
	}

	return (
		<div className="flex items-center justify-between">
			<p className="text-sm">
				Pagina {currentPage} de {totalPages}
			</p>

			<div className="flex items-center gap-2">
				<Button
					size="icon"
					variant="outline"
					onClick={() => navigateToPage(1)}
					disabled={currentPage === 1}
					aria-label="First page"
				>
					<ChevronsLeft className="size-4" />
				</Button>

				<Button
					size="icon"
					variant="outline"
					onClick={() => navigateToPage(currentPage - 1)}
					disabled={currentPage === 1}
					aria-label="Prev page"
				>
					<ChevronLeft className="size-4" />
				</Button>

				<Button
					size="icon"
					variant="outline"
					onClick={() => navigateToPage(currentPage + 1)}
					disabled={currentPage === totalPages}
					aria-label="Next page"
				>
					<ChevronRight className="size-4" />
				</Button>

				<Button
					size="icon"
					variant="outline"
					onClick={() => navigateToPage(totalPages)}
					disabled={currentPage === totalPages}
					aria-label="Last page"
				>
					<ChevronsRight className="size-4" />
				</Button>
			</div>
		</div>
	)
}
