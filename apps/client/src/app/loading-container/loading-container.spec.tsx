import { LoadingContainerTestIds } from '@momence-interview-nx/shared';
import { UseQueryResult } from 'react-query';
import { LoadingContainer } from './loading-container';
import { renderApplication } from '../../utils/testing/renderApplication';

// type assertion is used to avoid error: "is not assignable to type 'UseQueryResult'"
// in the real world I would create some generic "UseQueryResultMock" type to simulate
// the real "UseQueryResult" type

it('returns loader if query is still loading', () => {
	const { queryByTestId } = renderApplication(<LoadingContainer query={{ isLoading: true } as UseQueryResult} />);
	expect(queryByTestId(LoadingContainerTestIds.loader)).toBeDefined();
});

it('returns error if query has error', () => {
	const { queryByTestId } = renderApplication(<LoadingContainer query={{ isError: true } as UseQueryResult} />);
	expect(queryByTestId(LoadingContainerTestIds.error)).toBeDefined();
});

it('returns children if query is not loading and has no error', () => {
	const testId = 'find-me';
	const { queryByTestId } = renderApplication(
		<LoadingContainer query={{ isLoading: false, isError: false } as UseQueryResult}>
			<div data-testid={testId}>find me</div>
		</LoadingContainer>
	);
	expect(queryByTestId(testId)).toBeDefined();
});
