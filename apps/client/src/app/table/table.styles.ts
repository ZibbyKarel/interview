import styled, { css } from 'styled-components';
import MuiTableRow from '@mui/material/TableRow';

export const TableRow = styled(MuiTableRow)(
	({ theme }) => css`
		background-color: ${theme.tableRowColorPrimary};

		&:nth-of-type(odd) {
			background-color: ${theme.tableRowColorSecondary};
		}
		&:last-child td,
		&:last-child th {
			border: 0;
		}
	`
);
