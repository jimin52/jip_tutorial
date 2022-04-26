import {
  NextFunction, Request, RequestHandler, Response,
} from 'express';
import * as ReservationsService from './reservations.service';

export const search: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
    res.send(
    await ReservationsService.search()
  )
}
