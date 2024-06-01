'use client'

import { Button } from '@/components/ui/button'

export default function CustomError({ reset }: { reset: () => void }) {
	return (
		<div className="h-[80dvh] px-6 flex flex-col space-y-8 items-center justify-center">
			<h1 className="font-title text-5xl leading-[3.125rem] lg:text-6xl lg:leading-[3.7125rem]">
				Erro
			</h1>
			<p className="lg:text-lg leading-6">
				Ocorreu um erro ao renderizar a página. Tente novamente.
			</p>
			<Button size="lg" onClick={() => reset()}>
				Tentar novamente
			</Button>
		</div>
	)
}
