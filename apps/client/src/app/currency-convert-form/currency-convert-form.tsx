import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import { debounce } from 'lodash';
import { CurrencyConvertFormTestIds } from '@momence-interview-nx/shared';
import { useCZKCurrencyConvertor } from '../../utils/hooks/useCZKCurrencyConvertor';

export interface CurrencyConvertFormProps {
	currencies: string[];
	defaultCurrency: string;
}

export const CurrencyConvertForm: FC<CurrencyConvertFormProps> = ({ currencies, defaultCurrency }) => {
	const [amount, setAmount] = useState<number | undefined>();
	const [currency, setCurrency] = useState<string>(defaultCurrency);

	const [convertedAmount, setConvertedAmount] = useState<string>(Number(0).toFixed(2));

	const convert = useCZKCurrencyConvertor();

	useEffect(() => {
		setConvertedAmountDebounced(amount ?? 0, currency);
	}, [amount]);

	const setConverted = (amountValue: number, currencyValue: string) => {
		const newConvertedAmount = convert(amountValue, currencyValue).toFixed(2);
		setConvertedAmount(newConvertedAmount);
	};

	// do not call onChange on every keystroke, but only after 500ms of inactivity
	// useCallback to recreate funcion only after rerender
	const setConvertedAmountDebounced = useCallback(debounce(setConverted, 500), [setConvertedAmount]);

	const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
		setAmount(event.target.value ? Number(event.target.value) : undefined);
	};

	const handleCurrencyChange = (event: ChangeEvent<HTMLInputElement>) => {
		setCurrency(event.target.value);
		// set converted amount imeediately. No need to wait
		setConverted(amount ?? 0, event.target.value);
	};

	return (
		<Box noValidate autoComplete="off" component="form" data-testid={CurrencyConvertFormTestIds.wrapper}>
			<Stack direction="row" gap={2} sx={{ alignItems: 'center' }}>
				<TextField
					data-testid={CurrencyConvertFormTestIds.amountInput}
					helperText="Please insert amount"
					InputProps={{
						startAdornment: <Typography>CZK&nbsp;</Typography>,
					}}
					name="value"
					onChange={handleAmountChange}
					size="small"
					type="number"
					value={amount}
				/>

				<Typography gutterBottom fontSize={30} sx={{ marginTop: -2 }}>
					=&nbsp;
					<span data-testid={CurrencyConvertFormTestIds.convertedAmount}>{convertedAmount}</span>
				</Typography>

				<TextField
					select
					data-testid={CurrencyConvertFormTestIds.currencySelect}
					helperText="Please select your currency"
					id="outlined-select-currency"
					label="Select"
					onChange={handleCurrencyChange}
					size="small"
					value={currency}
				>
					{currencies?.map((currency) => (
						<MenuItem key={currency} value={currency}>
							{currency}
						</MenuItem>
					))}
				</TextField>
			</Stack>
		</Box>
	);
};
