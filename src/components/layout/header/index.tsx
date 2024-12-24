import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { siteConfig } from '@/config/site'
import { Link } from 'next-view-transitions'
import { NavLink } from './nav-link'
import { SearchDialog } from './search-dialog'

export const Header = () => {
	const navWithItems = siteConfig.navLinks.filter((nav) => nav.items)
	const navWithoutItems = siteConfig.navLinks.filter((nav) => !nav.items)

	return (
		<header className="top-0 z-50 sticky bg-background border-b h-16">
			<div className="flex justify-between items-center h-full container">
				<div className="flex items-center gap-6">
					<Link href="/">
						<span className="font-anton text-3xl text-primary">TMDB</span>
					</Link>

					<nav className="flex items-center gap-4">
						<NavigationMenu>
							<NavigationMenuList>
								{navWithItems.map((nav) => (
									<NavigationMenuItem key={nav.label}>
										<NavigationMenuTrigger>{nav.label}</NavigationMenuTrigger>
										<NavigationMenuContent>
											{nav.items?.map((item) => (
												<Link
													key={item.href}
													href={item.href}
													legacyBehavior
													passHref
												>
													<NavigationMenuLink
														className={navigationMenuTriggerStyle()}
													>
														{item.label}
													</NavigationMenuLink>
												</Link>
											))}
										</NavigationMenuContent>
									</NavigationMenuItem>
								))}
							</NavigationMenuList>
						</NavigationMenu>

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
