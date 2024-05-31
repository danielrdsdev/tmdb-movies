'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ComponentProps } from 'react'

export const NavLink = (props: ComponentProps<typeof Link>) => {
	const pathname = usePathname()

	return (
		<Link
			{...props}
			data-active={pathname === props.href}
			className="text-muted text-sm font-medium data-[active=true]:text-foreground-secondary"
		/>
	)
}
