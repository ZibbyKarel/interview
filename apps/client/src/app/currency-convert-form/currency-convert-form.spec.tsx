import { CurrencyConvertFormTestIds } from '@momence-interview-nx/global-stuff';
import { render } from '@testing-library/react';
import { CurrencyConvertForm, CurrencyConvertFormProps } from './currency-convert-form';

const props: CurrencyConvertFormProps = {
	currencies: ['EUR', 'USD', 'GBP'],
	onChange: console.log,
	defaultCurrency: 'EUR',
};

it('renders all inputs', () => {
	const { getByTestId } = render(<CurrencyConvertForm {...props} />);
	expect(getByTestId(CurrencyConvertFormTestIds.amountInput)).toBeDefined();
	expect(getByTestId(CurrencyConvertFormTestIds.currencySelect)).toBeDefined();
});
