import { Router } from 'express';
import { search } from '../books/books.controller';

export const path = '/books';
export const router = Router();

console.log("books router");
router.get('/search', search);
