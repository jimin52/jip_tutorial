import { Router } from 'express';
import { search } from '../reservations/reservations.controller'

export const path = '/reservations';
export const router = Router();

console.log("res router");
router.get('/search', search);