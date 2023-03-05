export interface Rate {
	amount: number;
	code: string;
	country: string;
	currency: string;
	rate: number;
}

export type GetRatesApiResponse =
	| {
			data: Rate[];
	  }
	| {
			error: string;
	  };
