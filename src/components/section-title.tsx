import type { ComponentProps } from 'react'

export const SectionTitle = (props: ComponentProps<'h2'>) => {
	return <h2 {...props} className="font-medium text-lg" />
}
