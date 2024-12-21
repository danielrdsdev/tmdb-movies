import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export function usePagination() {
	const router = useRouter()
	const searchParams = useSearchParams()
	const pathname = usePathname()

	const navigateToPage = (pageNumber: number | string) => {
		const params = new URLSearchParams(searchParams)
		params.set('page', pageNumber.toString())
		router.push(`${pathname}?${params.toString()}`)
	}

	return {
		navigateToPage,
	}
}
