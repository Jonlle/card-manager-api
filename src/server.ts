import 'module-alias/register';
import app from './app';
import { config } from '@/config';

const startServer = () => {
  app.listen(config.PORT, () => {
    console.log(`
    Environment: ${config.NODE_ENV?.toUpperCase()}
    Port:  ${config.PORT}
    `);
  });
};

startServer();