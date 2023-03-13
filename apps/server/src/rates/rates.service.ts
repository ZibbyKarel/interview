import { GetRatesApiResponse } from '@momence-interview-nx/shared';
import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { parseRates } from './utils/parseRates';

@Injectable()
export class RatesService {
	/**
	 * Will send back data of type GetRatesApiResponse
	 *
	 * @returns GetRatesApiResponse
	 */
	async loadRates(): Promise<GetRatesApiResponse> {
		let resp: GetRatesApiResponse = { error: 'Cannot get rates' };

		try {
			const response = await axios.get(
				'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt'
			);

			const data = await parseRates(response.data);
			resp = { data };
		} catch (err) {
			Logger.error(err); // potencially log to kibana or something similar
		}

		return resp;
	}
}
