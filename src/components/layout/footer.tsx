import { FooterLogo } from '../shared/icons'

export const Footer = () => {
	return (
		<footer className="bg-primary py-8">
			<div className="flex justify-between items-center container">
				<FooterLogo className="object-contain size-20" />

				<p className="text-muted-secondary text-sm">
					Made with ❤️ by{' '}
					<span className="font-medium text-foreground-secondary">
						Daniel Rodrigues
					</span>
				</p>
			</div>
		</footer>
	)
}
