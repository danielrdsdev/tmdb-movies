'use client'
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
import { cn } from '@/lib/utils'
import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'

type NavigationMenuProps = {
	items: NavLink[]
}

export const NavigationMenu = ({ items }: NavigationMenuProps) => {
	const pathname = usePathname()

	return (
		<NavigationMenuRoot>
			<NavigationMenuList>
				{items.map((nav) => (
					<NavigationMenuItem key={nav.label}>
						<NavigationMenuTrigger>{nav.label}</NavigationMenuTrigger>
						<NavigationMenuContent>
							<div className="w-[10.8125rem]">
								{nav.items?.map((item) => (
									<Link
										key={item.href}
										href={item.href}
										legacyBehavior
										passHref
									>
										<NavigationMenuLink
											data-pathname={pathname === item.href}
											className={cn(
												navigationMenuTriggerStyle(),
												'w-full data-[pathname=true]:text-accent-foreground'
											)}
										>
											{item.label}
										</NavigationMenuLink>
									</Link>
								))}
							</div>
						</NavigationMenuContent>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenuRoot>
	)
}
