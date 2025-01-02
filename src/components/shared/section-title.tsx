import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

export const SectionTitle = (props: ComponentProps<'h3'>) => {
	return (
		<h3 {...props} className={cn('font-semibold text-lg', props.className)} />
	)
}
