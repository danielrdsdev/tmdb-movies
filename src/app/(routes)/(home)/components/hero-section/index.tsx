import { Search } from '@/components/search'
import Image from 'next/image'
import { Suspense } from 'react'

export const HeroSection = () => {
	return (
		<section className="w-full h-[22.875rem] flex justify-center flex-col bg-black gap-8 px-10 relative text-foreground-secondary">
			<Image
				src="/banner-hero.webp"
				alt="Banner hero"
				fill
				sizes="(max-width: 768px) 43.75rem, 80rem"
				quality={80}
				priority
				className="object-cover aspect-auto opacity-50"
			/>

			<div className="space-y-0.5 z-10">
				<h1 className="font-bold tracking-tight text-2xl lg:text-4xl">
					Bem-vindo(a).
				</h1>
				<p className="text-lg lg:text-xl font-semibold">
					Milhões de filmes, séries e pessoas para descobrires. Explora já.
				</p>
			</div>

			<Suspense fallback={null}>
				<Search />
			</Suspense>
		</section>
	)
}
