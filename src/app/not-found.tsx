import { Button } from '@/components/ui/button'
import { Link } from 'next-view-transitions'

export default function NotFound() {
	return (
		<div className="px-6 h-[80dvh] flex flex-col space-y-8 items-center justify-center">
			<h1 className="text-5xl leading-[3.125rem] lg:text-6xl lg:leading-[3.7125rem]">
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
