import { Logo } from '@/components/icons/logo'
import { navLinks } from '@/config/nav'
import Link from 'next/link'
import { NavLink } from './nav-link'

export const Header = () => {
	return (
		<header className="h-16 bg-primary text-foreground-secondary">
			<div className="container flex items-center gap-6">
				<Link href="/">
					<Logo className="w-28 h-16" />
				</Link>

				<nav className="flex items-center gap-6">
					{navLinks.map((nav) => (
						<NavLink key={nav.href} href={nav.href}>
							{nav.label}
						</NavLink>
					))}
				</nav>
			</div>
		</header>
	)
}
