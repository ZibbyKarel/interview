import { LoadingContainerTestIds } from '@momence-interview-nx/shared';
import { render } from '@testing-library/react';
import { UseQueryResult } from 'react-query';
import { LoadingContainer } from './loading-container';

// type assertion is used to avoid error: "is not assignable to type 'UseQueryResult'"
// in the real world I would create some generic "UseQueryResultMock" type to simulate
// the real "UseQueryResult" type

it('returns loader if query is still loading', () => {
	const { queryByTestId } = render(<LoadingContainer query={{ isLoading: true } as UseQueryResult} />);
	expect(queryByTestId(LoadingContainerTestIds.loader)).toBeDefined();
});

it('returns error if query has error', () => {
	const { queryByTestId } = render(<LoadingContainer query={{ isError: true } as UseQueryResult} />);
	expect(queryByTestId(LoadingContainerTestIds.error)).toBeDefined();
});

it('returns children if query is not loading and has no error', () => {
	const testId = 'find-me';
	const { queryByTestId } = render(
		<LoadingContainer query={{ isLoading: false, isError: false } as UseQueryResult}>
			<div data-testid={testId}>find me</div>
		</LoadingContainer>
	);
	expect(queryByTestId(testId)).toBeDefined();
});
