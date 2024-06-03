import { describe, expect, it } from '@jest/globals'
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'
import { Pagination } from './pagination'

jest.mock('next/navigation', () => ({
	useRouter: jest.fn().mockReturnValue({
		push: jest.fn()
	}),
	useSearchParams: jest.fn().mockReturnValue(new URLSearchParams()),
	usePathname: jest.fn().mockReturnValue('/search')
}))

describe('Pagination', () => {
	const mockedPush = jest.requireMock('next/navigation').useRouter().push

	afterEach(() => {
		jest.clearAllMocks()
		cleanup()
	})

	it('renders pagination component correctly', () => {
		render(<Pagination totalPages={10} currentPage={1} />)
		expect(screen.getByText('Pagina 1 de 10')).toBeInTheDocument()
	})

	it('navigates to the first page when the first page button is clicked', async () => {
		render(<Pagination totalPages={10} currentPage={2} />)
		await act(async () => {
			fireEvent.click(screen.getByLabelText('First page'))
		})
		expect(mockedPush).toHaveBeenCalledWith('/search?page=1')
	})

	it('disables the first page and prev page buttons on the first page', () => {
		render(<Pagination totalPages={10} currentPage={1} />)
		expect(screen.getByLabelText('First page')).toBeDisabled()
		expect(screen.getByLabelText('Prev page')).toBeDisabled()
	})

	it('disables the next page and last page buttons on the last page', () => {
		render(<Pagination totalPages={10} currentPage={10} />)
		expect(screen.getByLabelText('Next page')).toBeDisabled()
		expect(screen.getByLabelText('Last page')).toBeDisabled()
	})

	it('navigates to the next page when the next page button is clicked', async () => {
		render(<Pagination totalPages={10} currentPage={2} />)

		await act(async () => {
			fireEvent.click(screen.getByLabelText('Next page'))
		})

		expect(mockedPush).toHaveBeenCalledWith('/search?page=3')
	})

	it('navigates to the previous page when the prev page button is clicked', async () => {
		render(<Pagination totalPages={10} currentPage={2} />)

		await act(async () => {
			fireEvent.click(screen.getByLabelText('Prev page'))
		})

		expect(mockedPush).toHaveBeenCalledWith('/search?page=1')
	})

	it('navigates to the last page when the last page button is clicked', async () => {
		render(<Pagination totalPages={10} currentPage={2} />)

		await act(async () => {
			fireEvent.click(screen.getByLabelText('Last page'))
		})

		expect(mockedPush).toHaveBeenCalledWith('/search?page=10')
	})
})
