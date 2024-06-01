import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

export const HeroSection = () => {
	return (
		<section className="py-20 flex justify-center flex-col gap-8 px-8 relative text-foreground-secondary">
			<Image
				src="/banner-hero.webp"
				alt="Banner hero"
				fill
				sizes="(max-width: 768px) 700px, 1280px"
				quality={100}
				className="object-cover aspect-auto -z-10"
			/>

			<div className="space-y-0.5">
				<h1 className="font-bold tracking-tight text-4xl">Bem-vindo(a).</h1>
				<p className="text-2xl font-semibold">
					Milhões de filmes, séries e pessoas para descobrires. Explora já.
				</p>
			</div>

			<div className="flex items-center relative">
				<Input
					className="w-full"
					placeholder="Pesquisar por um filme ou uma serie televisiva..."
				/>
				<Button className="rounded-full absolute right-0 bg-gradient-to-r from-tertiary to-secondary font-semibold hover:text-foreground transition-colors">
					Search
				</Button>
			</div>
		</section>
	)
}
