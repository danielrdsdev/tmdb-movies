export const formatCurrency = (value: number) => {
	const formatted = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(value)

	return formatted
}
