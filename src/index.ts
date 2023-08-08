import dotenv from 'dotenv';
dotenv.config();
import express, {Express, Request, Response} from 'express';
import bodyParser from 'body-parser';

import envVars from './envVars';
import sequelize from './db.config';
import testRoute from './routes/test.route';

const { PORT } = envVars;
const app: Express = express();
app.use(bodyParser.json());

async function init(){
	try {
		await sequelize.sync();
		console.log('Successfully connecting to the database');
		app.listen(PORT, () => {
			console.log(`App listen in port ${PORT}`)
		})
	} catch (error) {
		console.error(error);
	}
}

init()

app.get('/', (req: Request, res: Response) => {
	res.send('ecommerce online');
})

app.use('/test', testRoute);