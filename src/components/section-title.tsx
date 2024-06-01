import { cn } from '@/lib/utils'
import type { ComponentProps } from 'react'

export const SectionTitle = (props: ComponentProps<'h2'>) => {
	return (
		<h2 {...props} className={cn('font-semibold text-lg', props.className)} />
	)
}
