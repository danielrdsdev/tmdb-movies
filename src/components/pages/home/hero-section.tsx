import { Search } from '@/components/shared/search'
import Image from 'next/image'

export const HeroSection = () => {
	return (
		<section className="relative flex justify-center items-center bg-black w-full h-[25rem]">
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
				<div className="z-10 space-y-0.5">
					<h1 className="font-bold text-2xl text-foreground-secondary lg:text-4xl tracking-tight">
						Bem-vindo(a).
					</h1>
					<h2 className="font-semibold text-foreground-secondary text-lg lg:text-xl">
						Milhões de filmes, séries e pessoas para descobrires. Explora já.
					</h2>
				</div>

				<Search />
			</div>
		</section>
	)
}
