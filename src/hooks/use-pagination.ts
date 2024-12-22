import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export function usePagination() {
	const router = useRouter()
	const searchParams = useSearchParams()
	const pathname = usePathname()

	const handleNavigate = (page: number | string) => {
		const params = new URLSearchParams(searchParams)
		params.set('page', page.toString())
		router.push(`${pathname}?${params.toString()}`)
	}

	return {
		handleNavigate,
	}
}
