import { ViewTransitions } from 'next-view-transitions'

import { siteConfig } from '@/config/site'
import { anton, inter } from '@/styles/fonts'
import '@/styles/globals.css'

import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'

export const metadata = siteConfig.metadata

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ViewTransitions>
			<html lang="pt-BR">
				<body className={`${inter.variable} ${anton.variable}`}>
					<Header />
					<main className="flex-1 pb-8">{children}</main>
					<Footer />
				</body>
			</html>
		</ViewTransitions>
	)
}
