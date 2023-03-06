import { GetRatesApiResponse } from '@momence-interview-nx/shared';
import axios from 'axios';
import { RequestHandler } from 'express';
import { parseRates } from '../utils/parseRates';

/**
 * Will send back data of type GetRatesApiResponse
 */
export const getRates: RequestHandler = async (req, res) => {
	let resp: GetRatesApiResponse = { error: 'Cannot get rates' };

	try {
		const response = await axios.get(
			'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt'
		);

		const data = await parseRates(response.data);
		resp = { data };
	} catch (err) {
		console.error(err); // potencially log to kibana or something similar
	}

	res.send(resp);
};
