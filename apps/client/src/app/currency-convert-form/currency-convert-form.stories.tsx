import { Story } from '@storybook/react';
import { CurrencyConvertForm, CurrencyConvertFormProps } from './currency-convert-form';

export const Default: Story<CurrencyConvertFormProps> = (args) => <CurrencyConvertForm {...args} />;

export default {
	title: 'Components/CurrencyConvertForm',
	component: CurrencyConvertForm,
	args: {
		currencies: ['EUR', 'USD', 'GBP'],
		onChange: console.log,
		defaultCurrency: 'EUR',
	},
};
