import { Module } from '@nestjs/common';
import { RatesService } from '../rates/rates.service';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
	imports: [],
	controllers: [AppController],
	providers: [AppService, RatesService],
})
export class AppModule {}
