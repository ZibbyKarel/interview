import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import _ from 'lodash';
import { CurrencyConvertFormTestIds } from '@momence-interview-nx/shared';

const TEXT_MARGIN = -3;

export interface CurrencyConvertFormProps {
	currencies: string[];
	onChange: (amount: number, currency: string) => void;
	defaultCurrency: string;
}

export const CurrencyConvertForm: FC<CurrencyConvertFormProps> = ({ currencies, defaultCurrency, onChange }) => {
	const [amount, setAmount] = useState<number | undefined>();
	const [currency, setCurrency] = useState<string>(defaultCurrency);

	// do not call onChange on every keystroke, but only after 500ms of inactivity
	const debouncedOnChange = useCallback(_.debounce(onChange, 500), []);

	useEffect(() => {
		debouncedOnChange(amount ?? 0, currency);
	}, [amount, currency]);

	const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
		setAmount(event.target.value ? Number(event.target.value) : undefined);
	};

	const handleCurrencyChange = (event: ChangeEvent<HTMLInputElement>) => {
		setCurrency(event.target.value);
	};

	return (
		<Box noValidate autoComplete="off" component="form" data-testid={CurrencyConvertFormTestIds.wrapper}>
			<Stack direction="row" gap={2} sx={{ alignItems: 'center' }}>
				<Typography sx={{ marginTop: TEXT_MARGIN }}>Convert</Typography>

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

				<Typography sx={{ marginTop: TEXT_MARGIN }}>Into</Typography>

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
