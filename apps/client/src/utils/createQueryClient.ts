import { QueryClient } from 'react-query';

/**
 * Creates QueryClient instance with default options
 *
 * @returns {QueryClient} - QueryClient instance
 */
export const createQueryClient = () => {
	return new QueryClient({
		defaultOptions: {
			queries: {
				onError,
				retry: false,
			},
			mutations: {
				onError,
				retry: false,
			},
		},
	});
};

/**
 * This is global error handler for all queries/mutations
 *
 * @param error - Error object
 */
const onError = (error: unknown) => {
	console.error('RQ Error:', error);
};
