import { FooterLogo } from '../icons/logo-footer'

export const Footer = () => {
	return (
		<footer className="py-8 bg-primary">
			<div className="container flex items-center justify-between">
				<FooterLogo className="size-20 object-contain" />

				<p className="text-xs text-muted-foreground">
					Made with❤️ by{' '}
					<span className="font-medium text-foreground-secondary">
						Daniel Rodrigues
					</span>
				</p>
			</div>
		</footer>
	)
}
