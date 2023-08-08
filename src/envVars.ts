import dotenv from 'dotenv';

type ENV_VARS = {
	NODE_ENV: string;
	PORT: number;
	DB_PORT: number;
	DB_USER: string;
	DB_PASSWORD: string;
	DB_HOST: string
}

const envVars: ENV_VARS = {
	NODE_ENV: process.env.NODE_ENV!,
	PORT: Number.parseInt(process.env.PORT!, 10),
	DB_PORT: Number.parseInt(process.env.DB_PORT!, 10),
	DB_HOST: process.env.DB_HOST!,
	DB_PASSWORD: process.env.DB_PASSWORD!,
	DB_USER: process.env.DB_USER!
}

export default envVars;