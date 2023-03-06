import { renderHook } from '@testing-library/react';
import { useQueryClient } from 'react-query';
import { RatesQueryData } from '../../api/queries/ratesQuery';
import { useCZKCurrencyConvertor } from './useCZKCurrencyConvertor';

jest.mock('react-query');
const useQueryClientMock = jest.mocked(useQueryClient);

const rates: RatesQueryData = [
	{
		country: 'Australia',
		currency: 'dollar',
		amount: 1,
		code: 'AUD',
		rate: 14.948,
	},
];

afterEach(() => {
	jest.clearAllMocks();
});

beforeEach(() => {
	useQueryClientMock.mockReturnValue({
		getQueryData: (): RatesQueryData => rates,
	} as unknown as ReturnType<typeof useQueryClient>);
});

it('returns function', () => {
	const { result } = renderHook(() => useCZKCurrencyConvertor());
	const convert = result.current;

	expect(convert).toBeInstanceOf(Function);
	expect(convert(100, 'AUD')).toBe(6.68985817500669);
});

it('throws error when rates are not loaded yet', () => {
	useQueryClientMock.mockReturnValue({
		getQueryData: () => undefined,
	} as unknown as ReturnType<typeof useQueryClient>);

	const { result } = renderHook(() => useCZKCurrencyConvertor());
	const convert = result.current;

	expect(() => convert(100, 'AUD')).toThrowError('Rates are not loaded yet');
});

it('throws error when rate for currency is not found', () => {
	const { result } = renderHook(() => useCZKCurrencyConvertor());
	const convert = result.current;

	expect(() => convert(100, 'EUR')).toThrowError('Rate for EUR not found');
});
