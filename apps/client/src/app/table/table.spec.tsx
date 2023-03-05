import { TableTestIds } from '@momence-interview-nx/global-stuff';
import { render } from '@testing-library/react';
import { DEFAULT_ROWS_PER_PAGE, Table, TableProps } from './table';

const props: TableProps = {
	headers: ['Header 0', 'Header 1', 'Header 2', 'Header 3', 'Header 4'],
	rows: [
		['Row 0 Cell 0', 'Row 0 Cell 1', 'Row 0 Cell 2', 'Row 0 Cell 3', 'Row 0 Cell 4'],
		['Row 1 Cell 0', 'Row 1 Cell 1', 'Row 1 Cell 2', 'Row 1 Cell 3', 'Row 1 Cell 4'],
		['Row 2 Cell 0', 'Row 2 Cell 1', 'Row 2 Cell 2', 'Row 2 Cell 3', 'Row 2 Cell 4'],
		['Row 3 Cell 0', 'Row 3 Cell 1', 'Row 3 Cell 2', 'Row 3 Cell 3', 'Row 3 Cell 4'],
		['Row 4 Cell 0', 'Row 4 Cell 1', 'Row 4 Cell 2', 'Row 4 Cell 3', 'Row 4 Cell 4'],
		['Row 5 Cell 0', 'Row 5 Cell 1', 'Row 5 Cell 2', 'Row 5 Cell 3', 'Row 5 Cell 4'],
		['Row 6 Cell 0', 'Row 6 Cell 1', 'Row 6 Cell 2', 'Row 6 Cell 3', 'Row 6 Cell 4'],
		['Row 7 Cell 0', 'Row 7 Cell 1', 'Row 7 Cell 2', 'Row 7 Cell 3', 'Row 7 Cell 4'],
		['Row 8 Cell 0', 'Row 8 Cell 1', 'Row 8 Cell 2', 'Row 8 Cell 3', 'Row 8 Cell 4'],
		['Row 9 Cell 0', 'Row 9 Cell 1', 'Row 9 Cell 2', 'Row 9 Cell 3', 'Row 9 Cell 4'],
		['Row 10 Cell 0', 'Row 10 Cell 1', 'Row 10 Cell 2', 'Row 10 Cell 3', 'Row 10 Cell 4'],
	],
};

it('should render correct amount of header cells', () => {
	const { getAllByTestId } = render(<Table {...props} />);
	const headerCells = getAllByTestId(TableTestIds.headerCell);
	expect(headerCells).toHaveLength(props.headers.length);
});

it('should render correct amount of rows and cells by default', () => {
	const { getAllByTestId } = render(<Table {...props} />);

	const rows = getAllByTestId(TableTestIds.row);
	expect(rows).toHaveLength(DEFAULT_ROWS_PER_PAGE);

	const cells = getAllByTestId(TableTestIds.cell);
	expect(cells).toHaveLength(DEFAULT_ROWS_PER_PAGE * props.rows[0].length);
});
