import { Search } from '@/components/search'
import Image from 'next/image'

export const HeroSection = () => {
	return (
		<section className="relative flex flex-col justify-center gap-8 bg-black px-10 w-full h-[22.875rem] text-foreground-secondary">
			<Image
				src="/banner-hero.webp"
				alt="Banner hero"
				fill
				sizes="100vw"
				quality={80}
				priority
				className="opacity-50 aspect-auto object-cover"
			/>

			<div className="z-10 space-y-0.5">
				<h1 className="font-bold text-2xl lg:text-4xl tracking-tight">
					Bem-vindo(a).
				</h1>
				<p className="font-semibold text-lg lg:text-xl">
					Milhões de filmes, séries e pessoas para descobrires. Explora já.
				</p>
			</div>

			<Search />
		</section>
	)
}
