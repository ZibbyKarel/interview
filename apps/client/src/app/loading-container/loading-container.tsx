import { FC, PropsWithChildren } from 'react';
import { UseQueryResult } from 'react-query';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import { LoadingContainerTestIds } from '@momence-interview-nx/global-stuff';

export interface LoadingContainerProps extends PropsWithChildren {
	query: UseQueryResult;
}

/**
 * Wrapper component to show loading indicator or error message or children based on query state
 */
export const LoadingContainer: FC<LoadingContainerProps> = ({ children, query }) => {
	if (query.isLoading) {
		return (
			<Container data-testid={LoadingContainerTestIds.loader}>
				<CircularProgress />
			</Container>
		);
	}

	if (query.isError) {
		return <div data-testid={LoadingContainerTestIds.error}>Error</div>;
	}

	return <>{children}</>;
};
