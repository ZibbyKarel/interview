import axios from 'axios';
import { RequestHandler } from 'express';
import { parseRates } from '../utils/parseRates';

/**
 * Will send back data of type GetRatesApiResponse
 */
export const getRates: RequestHandler = async (req, res) => {
	try {
		const response = await axios.get(
			'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt'
		);

		const data = await parseRates(response.data);

		res.send({ data });
	} catch (err) {
		res.send({ error: 'Cannot get rates' });
	}
};
