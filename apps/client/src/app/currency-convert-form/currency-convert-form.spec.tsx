import { CurrencyConvertFormTestIds } from '@momence-interview-nx/shared';
import { CurrencyConvertForm, CurrencyConvertFormProps } from './currency-convert-form';
import { renderApplication } from '../../utils/testing/renderApplication';

const props: CurrencyConvertFormProps = {
	currencies: ['EUR', 'USD', 'GBP'],
	defaultCurrency: 'EUR',
};

it('renders all inputs', () => {
	const { getByTestId } = renderApplication(<CurrencyConvertForm {...props} />);
	expect(getByTestId(CurrencyConvertFormTestIds.amountInput)).toBeDefined();
	expect(getByTestId(CurrencyConvertFormTestIds.currencySelect)).toBeDefined();
	expect(getByTestId(CurrencyConvertFormTestIds.convertedAmount)).toBeDefined();
});
