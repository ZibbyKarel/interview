import { render } from '@testing-library/react';
import { MockAllProviders } from './mockAllProviders';

/**
 * Render a React component with all providers with mocked values
 *
 * @param component - React component to render
 * @returns - Rendered component
 */
export const renderApplication = (component: React.ReactElement) => {
	return render(<MockAllProviders>{component}</MockAllProviders>);
};
