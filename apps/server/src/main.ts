/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import morgan from 'morgan';

import { AppModule } from './app/app.module';

const DEFAULT_GLOBAL_PREFIX = '';
const DEFAULT_PORT = 3001;

async function bootstrap() {
	const globalPrefix = process.env.GLOBAL_PREFIX ?? DEFAULT_GLOBAL_PREFIX;
	const port = process.env.PORT || DEFAULT_PORT;

	const app = await NestFactory.create(AppModule);

	app.setGlobalPrefix(globalPrefix);

	// register all middlewares
	app.use(morgan('tiny'));

	await app.listen(port);

	Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap();
