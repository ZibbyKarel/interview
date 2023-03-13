import { Test, TestingModule } from '@nestjs/testing';
import { RatesService } from '../rates/rates.service';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
	let app: TestingModule;

	beforeAll(async () => {
		app = await Test.createTestingModule({
			controllers: [AppController],
			providers: [AppService, RatesService],
		}).compile();
	});

	describe('getData', () => {
		it('should return "Welcome to server!"', () => {
			const appController = app.get<AppController>(AppController);
			expect(appController.getData()).toEqual({ message: 'Welcome to server!' });
		});
	});
});
