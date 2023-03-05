import { Rate } from '@momence-interview-nx/types';

export const convertRateToTableRow = (rate: Rate): string[] => {
	return [rate.country, rate.currency, rate.amount.toString(), rate.rate.toString(), rate.code];
};
