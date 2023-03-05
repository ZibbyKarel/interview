import { Rate } from '@momence-interview-nx/shared';

export const convertRateToTableRow = (rate: Rate): string[] => {
	return [rate.country, rate.currency, rate.amount.toString(), rate.rate.toString(), rate.code];
};
