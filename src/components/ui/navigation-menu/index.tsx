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
import { cn } from '@/lib/utils'
import type { NavLink } from '@/types/nav'
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
							<div className="p-3 w-[12.8125rem]">
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
