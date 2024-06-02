import type { Config } from 'tailwindcss'

const config = {
	darkMode: ['class'],
	content: ['./src/**/*.{ts,tsx}'],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '1.5rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				background: '#fafafa',
				foreground: {
					DEFAULT: '#09090b',
					secondary: '#fafafa'
				},
				border: '#a1a1aa',
				muted: {
					DEFAULT: '#e4e4e7',
					foreground: '#a1a1aa'
				},
				primary: '#0d253f',
				secondary: '#01b4e4',
				tertiary: '#90cea1'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				gauge_fadeIn: {
					from: { opacity: '0' },
					to: { opacity: '1' }
				},
				gauge_fill: {
					from: { 'stroke-dashoffset': '332', opacity: '0' },
					to: { opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				gauge_fadeIn: 'gauge_fadeIn 1s ease forwards',
				gauge_fill: 'gauge_fill 1s ease forwards'
			}
		}
	},
	plugins: [require('tailwindcss-animate')]
} satisfies Config

export default config
