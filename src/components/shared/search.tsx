'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Form from 'next/form'
import { useSearchParams } from 'next/navigation'

type SearchProps = {
	action: string
	placeholder: string
}

export const Search = ({ action, placeholder }: SearchProps) => {
	const searchParams = useSearchParams()

	return (
		<Form action={action} className="relative flex items-center w-full">
			<Input
				name="query"
				defaultValue={searchParams.get('query')?.toString()}
				placeholder={placeholder}
				className="flex-1 w-full"
			/>

			<Button type="submit" className="right-0 absolute">
				Buscar
			</Button>
		</Form>
	)
}
