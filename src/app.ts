import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();

app.use(cors());
app.use(express.json());

type ApiResponse<T> = {
  code: number;
  data?: T;
  message?: string;
};

app.get('/api/health', (req: Request, res: Response<ApiResponse<string>>) => {
  res.json({
    code: 0,
    data: '🚀 Server running correctly'
  });
});

export default app;