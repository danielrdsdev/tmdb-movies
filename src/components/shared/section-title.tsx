import { cn } from '@/lib/utils'
import type { ComponentProps } from 'react'

export const SectionTitle = (props: ComponentProps<'h3'>) => {
	return (
		<h3 {...props} className={cn('font-semibold text-lg', props.className)} />
	)
}
