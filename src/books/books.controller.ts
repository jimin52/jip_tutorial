import {
  NextFunction, Request, RequestHandler, Response,
} from 'express';
import * as BooksService from './books.service';

export const search: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const info = req.query;
  const page = parseInt(info.page as string, 10) ? parseInt(info.page as string, 10) : 0;
  const limit = parseInt(info.limit as string, 10) ? parseInt(info.limit as string, 10) : 5;
  res.send(await BooksService.search(page, limit))
}
