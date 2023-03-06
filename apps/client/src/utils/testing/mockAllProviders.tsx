import React, { FC } from 'react';
import { QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { createQueryClient } from '../createQueryClient';
import { createTheme } from '../createTheme';

// Create a mocked query client and theme
// for simplify things it is a same as in the real app
const queryClient = createQueryClient();
const theme = createTheme();

type MockAllProvidersProps = React.PropsWithChildren;

/**
 * This is for testing purposes only.
 * It wrapps the component into all providers that exists in real app and sets them some fake values
 * to simulate real app environment
 *
 * @param param0
 * @returns
 */
export const MockAllProviders: FC<MockAllProvidersProps> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</QueryClientProvider>
	);
};
