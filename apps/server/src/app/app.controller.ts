import { Controller, Get } from '@nestjs/common';
import { RatesService } from '../rates/rates.service';

import { AppService } from './app.service';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService, private readonly ratesService: RatesService) {}

	@Get()
	getData() {
		return this.appService.getData();
	}

	@Get('/rates')
	async getRates() {
		return this.ratesService.loadRates();
	}
}
