import { Link } from 'next-view-transitions'

import { siteLinks } from '@/config/links'
import { NavLink } from './nav-link'

import { NavigationMenu } from '@/components/ui/navigation-menu'
import { SearchDialog } from './search-dialog'

export const Header = () => {
	const navWithItems = siteLinks.filter((nav) => nav.items)
	const navWithoutItems = siteLinks.filter((nav) => !nav.items)

	return (
		<header className="top-0 z-50 sticky bg-background border-b h-16">
			<div className="flex justify-between items-center h-full container">
				<div className="flex items-center gap-6">
					<Link href="/">
						<span className="font-anton text-3xl text-primary">TMDB</span>
					</Link>

					<nav className="flex items-center gap-4">
						<NavigationMenu items={navWithItems} />

						{navWithoutItems.map((nav) => (
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
