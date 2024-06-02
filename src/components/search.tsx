'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from './ui/button'
import { Form, FormControl, FormField, FormItem } from './ui/form'
import { Input } from './ui/input'

type FormSchema = z.infer<typeof formSchema>

const formSchema = z.object({
	term: z.string()
})

export const Search = () => {
	const searchParams = useSearchParams()
	const { replace } = useRouter()

	const form = useForm<FormSchema>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			term: searchParams.get('query')?.toString() || ''
		}
	})

	function onSubmit(values: FormSchema) {
		const params = new URLSearchParams(searchParams)
		params.set('page', '1')
		if (values) {
			params.set('query', values.term)
		} else {
			params.delete('query')
		}
		replace(`/search?${params.toString()}`)
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex items-center relative w-full"
			>
				<FormField
					control={form.control}
					name="term"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormControl>
								<Input
									className="w-full flex-1"
									placeholder="Buscar por um filme"
									{...field}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<Button
					type="submit"
					className="absolute right-0 rounded-full font-semibold bg-gradient-to-r from-tertiary to-secondary hover:text-primary transition-colors"
				>
					Buscar
				</Button>
			</form>
		</Form>
	)
}
