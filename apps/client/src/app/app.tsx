import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { createTheme } from '../utils/createTheme';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RatesPage } from './pages/rates-page';

const queryClient = new QueryClient();

/**
 * This is the main component of the application
 */
export const App: React.FC = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={createTheme()}>
				{/* Normally there would be some router but since this is just a demo app... */}
				<RatesPage />
			</ThemeProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};
