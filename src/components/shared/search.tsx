import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Form from 'next/form'

type SearchProps = {
	action: string
	placeholder: string
}

export const Search = ({ action, placeholder }: SearchProps) => {
	return (
		<Form action={action} className="relative flex items-center w-full">
			<Input name="query" placeholder={placeholder} className="flex-1 w-full" />
			<Button
				type="submit"
				className="right-0 absolute bg-gradient-to-r from-tertiary to-secondary rounded-full font-semibold hover:text-primary transition-colors"
			>
				Buscar
			</Button>
		</Form>
	)
}
