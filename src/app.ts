import express, { Request, Response } from 'express';
import router from './routes';
import { morganMiddleware } from './utils/logger';

const app: express.Application = express();

app.use(morganMiddleware);

app.get('/welcome', (req: Request, res: Response) => {
  res.send('welcome!');
});

// dev route
app.use('/api', router);

export default app;