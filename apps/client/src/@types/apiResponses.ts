import { Rate } from '.';

export type GetRatesApiResponse =
	| {
			data: Rate[];
			error: never;
	  }
	| {
			data: never;
			error: string;
	  };
