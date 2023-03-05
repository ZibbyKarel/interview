import { parseRates } from './parseRates';

const rates = `02 Mar 2023 #44
Country|Currency|Amount|Code|Rate
Australia|dollar|1|AUD|14.888
Brazil|real|1|BRL|4.252
Bulgaria|lev|1|BGN|12.007
Canada|dollar|1|CAD|16.256
China|renminbi|1|CNY|3.206
Denmark|krone|1|DKK|3.156
EMU|euro|1|EUR|23.485
Hongkong|dollar|1|HKD|2.821
Hungary|forint|100|HUF|6.268
Iceland|krona|100|ISK|15.543
IMF|SDR|1|XDR|29.539
India|rupee|100|INR|26.829
Indonesia|rupiah|1000|IDR|1.449
Israel|new shekel|1|ILS|6.073
Japan|yen|100|JPY|16.189
Malaysia|ringgit|1|MYR|4.948
Mexico|peso|1|MXN|1.220
New Zealand|dollar|1|NZD|13.765
Norway|krone|1|NOK|2.118
Philippines|peso|100|PHP|40.253
Poland|zloty|1|PLN|5.009
Romania|leu|1|RON|4.771
Singapore|dollar|1|SGD|16.414
South Africa|rand|1|ZAR|1.215
South Korea|won|100|KRW|1.687
Sweden|krona|1|SEK|2.109
Switzerland|franc|1|CHF|23.514
Thailand|baht|100|THB|63.549
Turkey|lira|1|TRY|1.172
United Kingdom|pound|1|GBP|26.451
USA|dollar|1|USD|22.145`;

it('returns correct type of object', async () => {
	const resp = await parseRates(rates);
	expect(resp).toHaveLength(31);
	resp.forEach((rate) => {
		expect(rate).toMatchObject({
			country: expect.any(String),
			currency: expect.any(String),
			amount: expect.any(Number),
			code: expect.any(String),
			rate: expect.any(Number),
		});
	});
});
