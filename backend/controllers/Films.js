/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Film from '../models/filmModel.js';

export const getAllFilms = async (req, res) => {
  try {
    const films = await Film.findAll();
    res.json(films);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getFilmById = async (req, res) => {
  try {
    const Film = await Film.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(Film[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createFilm = async (req, res) => {
  try {
    await Film.create(req.body);
    res.json({
      message: 'Film Created',
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateFilm = async (req, res) => {
  try {
    await Film.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: 'Film Updated',
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteFilm = async (req, res) => {
  try {
    await Film.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: 'Film Deleted',
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
