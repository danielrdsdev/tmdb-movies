import { Link } from 'next-view-transitions'

import { Button } from '@/components/ui/button'

export default function NotFound() {
	return (
		<div className="flex flex-col justify-center items-center space-y-8 px-6 h-[80dvh]">
			<h1 className="text-5xl lg:text-6xl leading-[3.125rem] lg:leading-[3.7125rem]">
				Página não encontrada
			</h1>
			<p className="lg:text-lg leading-6">
				Desculpe, mas a página que você está procurando não existe.
			</p>
			<Button asChild size="lg">
				<Link href="/">Voltar para a página inicial</Link>
			</Button>
		</div>
	)
}
