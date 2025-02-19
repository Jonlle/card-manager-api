import { AppEnv } from '../types/env.d';

export const validateEnv = (): void => {
  const requiredVars: (keyof AppEnv)[] = ['NODE_ENV', 'PORT'];
  
  requiredVars.forEach((varName) => {
    if (!process.env[varName]) {
      throw new Error(`❌ Missing environment variable: ${varName}`);
    }
  });

  if (isNaN(Number(process.env.PORT))) {
    throw new Error('❌ PORT must be a valid number');
  }

  if (!['development', 'production'].includes(process.env.NODE_ENV!)) {
    throw new Error(`❌ Invalid NODE_ENV: ${process.env.NODE_ENV}`);
  }
};