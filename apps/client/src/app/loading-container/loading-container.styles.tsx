import styled, { css } from 'styled-components';

export const ErrorContainer = styled.div(
	({ theme }) => css`
		background-color: ${theme.palette.error};
		font-size: large;
		padding: 20px;
	`
);
