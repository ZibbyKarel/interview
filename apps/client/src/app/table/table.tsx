import React, { useState } from 'react';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import * as SC from './table.styles';
import { TableTestIds } from '@momence-interview-nx/shared';

const ROWS_PER_PAGE_OPTIONS = [5, 10, 25];

export const DEFAULT_ROWS_PER_PAGE = ROWS_PER_PAGE_OPTIONS[0];

export interface TableProps {
	headers: string[];
	rows: string[][];
}

export const Table: React.FC<TableProps> = ({ headers, rows }) => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_ROWS_PER_PAGE);

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<TableContainer component={Paper} data-testid={TableTestIds.wrapper}>
			<MuiTable sx={{ minWidth: 650 }}>
				<TableHead>
					<TableRow>
						{headers.map((header, i) => {
							return (
								<TableCell key={i} data-testid={TableTestIds.headerCell}>
									{header}
								</TableCell>
							);
						})}
					</TableRow>
				</TableHead>

				<TableBody>
					{rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => (
						<SC.TableRow key={i} data-testid={TableTestIds.row}>
							{row.map((cell, j) => {
								return (
									<TableCell key={j} data-testid={TableTestIds.cell}>
										{cell}
									</TableCell>
								);
							})}
						</SC.TableRow>
					))}
				</TableBody>
			</MuiTable>

			<TablePagination
				component="div"
				count={rows.length}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
				page={page}
				rowsPerPage={rowsPerPage}
				rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
			/>
		</TableContainer>
	);
};
