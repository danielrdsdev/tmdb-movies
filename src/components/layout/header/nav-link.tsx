'use client'

import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import type { ComponentProps } from 'react'

export const NavLink = (props: ComponentProps<typeof Link>) => {
	const pathname = usePathname()

	return (
		<Link
			{...props}
			data-active={pathname === props.href}
			className="font-medium text-muted-foreground text-sm hover:text-foreground data-[active=true]:text-accent-foreground transition-colors"
		/>
	)
}
