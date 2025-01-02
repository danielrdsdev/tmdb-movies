import Image from 'next/image'
import { Suspense } from 'react'

import { Search } from '@/components/shared/search'

export const HeroSection = () => {
	return (
		<section className="relative flex justify-center items-center bg-black w-full h-[15rem] md:h-[25rem] lg:h-[35rem]">
			<Image
				src="/banner-hero.webp"
				alt="Banner hero"
				fill
				sizes="100vw"
				quality={80}
				priority
				className="opacity-50 aspect-auto object-cover"
			/>

			<div className="flex flex-col gap-8 container">
				<div className="z-10 space-y-2">
					<h1 className="font-bold text-2xl lg:text-4xl leading-none tracking-tight">
						Bem-vindo(a).
					</h1>
					<h2 className="font-semibold text-sm lg:text-xl lg:leading-none">
						Milhões de Filmes, Séries e Pessoas para Descobrir. Explore já.
					</h2>
				</div>

				<Suspense fallback={null}>
					<Search
						action="/search"
						placeholder="Pesquisar por um filme, série ou pessoa"
					/>
				</Suspense>
			</div>
		</section>
	)
}
