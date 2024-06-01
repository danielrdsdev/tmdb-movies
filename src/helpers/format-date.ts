import { format, parseISO } from 'date-fns'

export const formatDate = (value?: string) => {
	try {
		const date = parseISO(value ?? '')
		return format(date, 'dd MMMM, yyyy')
	} catch (error) {
		console.error('Invalid date value:', value)
		return ''
	}
}
