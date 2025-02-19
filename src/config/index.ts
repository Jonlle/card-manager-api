import dotenv from 'dotenv';
import { validateEnv } from './env';

dotenv.config();
validateEnv();

export const config = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: Number(process.env.PORT) || 3001,
  API_VERSION: process.env.API_VERSION || 'v1'
};