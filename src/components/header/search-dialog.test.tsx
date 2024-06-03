import { expect } from '@jest/globals'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchDialog } from './search-dialog'

jest.mock('@/components/search', () => ({
	Search: jest.fn(({ setOpen }) => (
		<div data-testid="search-component">Search Component</div>
	))
}))

describe('SearchDialog', () => {
	it('renders without crashing', () => {
		render(<SearchDialog />)

		const searchIcon = screen.getByLabelText('Search icon')
		expect(searchIcon).toBeInTheDocument()
	})

	it('opens the dialog when the search icon is clicked', async () => {
		render(<SearchDialog />)

		const searchIcon = screen.getByLabelText('Search icon')
		userEvent.click(searchIcon)

		const dialogContent = await screen.findByTestId('dialog')
		expect(dialogContent).toBeInTheDocument()

		const dialogTitle = within(dialogContent).getByText('Buscar filmes')
		const dialogDescription = within(dialogContent).getByText(
			'Digite para buscar algum filme desejado'
		)

		expect(dialogTitle).toBeInTheDocument()
		expect(dialogDescription).toBeInTheDocument()
	})

	it('renders the Search component when dialog is opened', async () => {
		render(<SearchDialog />)

		const searchIcon = screen.getByLabelText('Search icon')
		userEvent.click(searchIcon)

		const searchComponent = await screen.findByTestId('search-component')
		expect(searchComponent).toBeInTheDocument()
	})
})
