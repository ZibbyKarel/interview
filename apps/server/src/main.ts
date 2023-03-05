import express from 'express';
import { getRates } from './middlewares/getRates';
import morgan from 'morgan';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3001;

const app = express();

app.use(morgan('short'));

app.get('/', (req, res) => {
	res.send({ message: 'Hello API' });
});

app.get('/api/rates', getRates);

app.listen(port, host, () => {
	console.log(`[ ready ] http://${host}:${port}`);
});
