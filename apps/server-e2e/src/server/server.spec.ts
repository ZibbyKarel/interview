import { GetRatesApiResponse } from '@momence-interview-nx/types';
import axios from 'axios';

describe('GET /', () => {
	it('should return a message', async () => {
		const res = await axios.get(`/`);

		expect(res.status).toBe(200);
		expect(res.data).toEqual({ message: 'Hello API' });
	});
});

describe('GET /api/rates', () => {
	it('should return rates', async () => {
		const res = await axios.get<GetRatesApiResponse>(`/api/rates`);

		expect(res.status).toBe(200);
		expect(res.data).toEqual({
			data: expect.any(Array),
			error: undefined,
		});

		if ('data' in res.data) {
			res.data.data.forEach((item) => {
				expect(item).toEqual({
					amount: expect.any(Number),
					code: expect.any(String),
					country: expect.any(String),
					currency: expect.any(String),
					rate: expect.any(Number),
				});
			});
		}
	});
});
