import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const formatDate = (value?: string) => {
	try {
		const date = parseISO(value ?? '')
		return format(date, 'dd MMMM, yyyy', {
			locale: ptBR
		})
	} catch (error) {
		console.error('Invalid date value:', value)
		return ''
	}
}
