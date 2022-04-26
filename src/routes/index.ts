import { Router } from 'express';
import * as books from './books.routes';
import * as reservations from './reservations.routes'

const router = Router();

router.use(books.path, books.router);
router.use(reservations.path, reservations.router);

export default router;