import { Rate } from '@momence-interview-nx/global-stuff';
import csvToJson from 'csvtojson';
import { CSVParseParam } from 'csvtojson/v2/Parameters';

/**
 * Parse rates from cnb.cz in format:
 *
 * 02 Mar 2023 #44
 * Country|Currency|Amount|Code|Rate
 * Australia|dollar|1|AUD|14.888
 * Brazil|real|1|BRL|4.252
 * ...
 *
 * @param data - data from cnb.cz
 * @returns - parsed rates
 */
export const parseRates = async (data: string): Promise<Rate[]> => {
	const lines = data
		.split('\n') // split data by line
		.slice(1); // remove first line bcs it's a date

	// get headers in lowercase bcs it is used as json keys
	const headers = lines[0].split('|').map((header) => header.toLowerCase());

	// get rest of lines
	const ratesLines = lines.join('\n'); // join lines to string

	const csvOptions: Partial<CSVParseParam> = {
		headers,
		delimiter: '|',
		colParser: { amount: 'number', rate: 'number' },
	};

	return await csvToJson(csvOptions).fromString(ratesLines);
};
