declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    PORT: string;
  }
}

export type AppEnv = Pick<
  NodeJS.ProcessEnv, 
  'NODE_ENV' | 'PORT'
>;