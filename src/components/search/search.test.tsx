import { describe, expect, it } from '@jest/globals'
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'
import { Search } from '.'

jest.mock('next/navigation', () => ({
	useRouter: jest.fn().mockReturnValue({
		replace: jest.fn()
	}),
	useSearchParams: jest.fn().mockReturnValue(new URLSearchParams()),
	usePathname: jest.fn().mockReturnValue('/search')
}))

describe('Search', () => {
	const mockedReplace = jest.requireMock('next/navigation').useRouter().replace

	afterEach(() => {
		jest.clearAllMocks()
		cleanup()
	})

	it('renders without crashing', () => {
		render(<Search />)

		const input = screen.getByPlaceholderText('Buscar por um filme')
		const button = screen.getByRole('button', { name: /Buscar/i })

		expect(button).toBeInTheDocument()
		expect(input).toBeInTheDocument()
	})

	it('submits the form with query parameter', async () => {
		render(<Search />)

		const input = screen.getByPlaceholderText('Buscar por um filme')
		const button = screen.getByRole('button', { name: /Buscar/i })

		await act(async () => {
			fireEvent.change(input, { target: { value: 'inception' } })
		})

		await act(async () => {
			fireEvent.click(button)
		})

		expect(mockedReplace).toHaveBeenCalledWith('/search?page=1&query=inception')
	})

	it('shows an error message when the search term is empty', async () => {
		render(<Search />)

		const button = screen.getByRole('button', { name: /Buscar/i })

		await act(async () => {
			fireEvent.click(button)
		})

		expect(
			await screen.findByText(
				'O termo de busca deve ter pelo menos 1 caractere'
			)
		).toBeInTheDocument()
	})
})
