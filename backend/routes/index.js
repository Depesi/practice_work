/* eslint-disable import/extensions */
import express from 'express';

import {
  getAllFilms,
  getFilmById,
  createFilm,
  updateFilm,
  deleteFilm,
} from '../controllers/Films.js';

const router = express.Router();

router.get('/', getAllFilms);
router.get('/:id', getFilmById);
router.post('/', createFilm);
router.patch('/:id', updateFilm);
router.delete('/:id', deleteFilm);

export default router;