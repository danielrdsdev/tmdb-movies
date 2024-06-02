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
			className="text-muted-secondary text-sm font-medium hover:text-foreground-secondary transition-colors data-[active=true]:text-foreground-secondary"
		/>
	)
}
