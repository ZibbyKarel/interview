import { FC, useMemo, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { useRatesQuery } from '../../api/queries/ratesQuery';
import { LoadingContainer } from '../loading-container/loading-container';
import { CurrencyConvertForm } from '../currency-convert-form/currency-convert-form';
import { Table } from '../table/table';
import { convertRateToTableRow } from '../../utils/rateUtils';
import { useCZKCurrencyConvertor } from '../../utils/hooks/useCZKCurrencyConvertor';
import { RatesPageTestIds } from '@momence-interview-nx/shared';

/**
 * This component (or container if you want) should display same data as this page:
 * https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/
 */
export const RatesPage: FC = () => {
	const ratesQuery = useRatesQuery();
	const convert = useCZKCurrencyConvertor();

	const currencies = useMemo(() => {
		return ratesQuery.data?.map((rate) => rate.code) ?? [];
	}, [ratesQuery.data]);

	const defaultCurrency = currencies[0];

	const [convertValues, setConvertValues] = useState<{ amount: number; currency: string } | undefined>();

	const handleChange = (amount: number, currency: string) => {
		setConvertValues({ amount, currency });
	};

	return (
		<Container component="main" sx={{ paddingTop: 5 }}>
			<Stack gap={3}>
				<Typography gutterBottom data-testid={RatesPageTestIds.title} variant="h4">
					Central bank exchange rate fixing
				</Typography>

				<LoadingContainer query={ratesQuery}>
					<Stack direction="row" gap={2}>
						<CurrencyConvertForm currencies={currencies} defaultCurrency={defaultCurrency} onChange={handleChange} />

						{convertValues && (
							<Typography gutterBottom data-testid={RatesPageTestIds.title} fontSize={30}>
								=&nbsp;
								<span data-testid={RatesPageTestIds.convertedAmount}>
									{convert(convertValues.amount, convertValues.currency).toFixed(2)}
								</span>
								&nbsp;
								{convertValues.currency}
							</Typography>
						)}
					</Stack>

					<Table
						headers={['Country', 'Currency', 'Amount', 'Rate', 'Code']}
						rows={ratesQuery.data?.map(convertRateToTableRow) ?? []}
					/>
				</LoadingContainer>
			</Stack>
		</Container>
	);
};
