import { siteConfig } from '@/config/site'
import { Link } from 'next-view-transitions'
import { LogoIcon } from '../icons'
import { NavLink } from './nav-link'
import { SearchDialog } from './search-dialog'

export const Header = () => {
	return (
		<header className="top-0 z-50 sticky bg-primary h-16 text-foreground-secondary">
			<div className="flex justify-between items-center container">
				<div className="flex items-center gap-6">
					<Link href="/">
						<LogoIcon className="w-28 h-16" />
					</Link>

					<nav className="flex items-center gap-6">
						{siteConfig.navLinks.map((nav) => (
							<NavLink key={nav.href} href={nav.href}>
								{nav.label}
							</NavLink>
						))}
					</nav>
				</div>

				<SearchDialog />
			</div>
		</header>
	)
}
