'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Form from 'next/form'
import { useSearchParams } from 'next/navigation'

export const Search = () => {
	const searchParams = useSearchParams()

	return (
		<Form action="/search" className="relative flex items-center pb-4 w-full">
			<Input
				name="query"
				placeholder="Buscar por um filme"
				className="flex-1 w-full"
				defaultValue={searchParams.get('query')?.toString()}
			/>
			<Button
				type="submit"
				className="right-0 absolute bg-gradient-to-r from-tertiary to-secondary rounded-full font-semibold hover:text-primary transition-colors"
			>
				Buscar
			</Button>
		</Form>
	)
}
