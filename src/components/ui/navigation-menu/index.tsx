import {
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenu as NavigationMenuRoot,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu/primitive'
import type { NavLink } from '@/config/site'
import { Link } from 'next-view-transitions'

type NavigationMenuProps = {
	items: NavLink[]
}

export const NavigationMenu = ({ items }: NavigationMenuProps) => {
	return (
		<NavigationMenuRoot>
			<NavigationMenuList>
				{items.map((nav) => (
					<NavigationMenuItem key={nav.label}>
						<NavigationMenuTrigger>{nav.label}</NavigationMenuTrigger>
						<NavigationMenuContent>
							{nav.items?.map((item) => (
								<Link key={item.href} href={item.href} legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										{item.label}
									</NavigationMenuLink>
								</Link>
							))}
						</NavigationMenuContent>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenuRoot>
	)
}
