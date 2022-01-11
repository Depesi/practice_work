/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { adminApi, mainAPI } from '../../api/api';
import style from './Admin.module.scss';

const FilmsList = () => {
  const [films, setFilm] = useState([]);

  useEffect(async () => {
    const response = await mainAPI.getSliderPhotos();
    setFilm(response);
  }, []);

  const deleteFilm = async id => {
    await adminApi.deleteFilm(id);
    const response = await mainAPI.getSliderPhotos();
    setFilm(response);
  };

  return (
    <div className="container">
      <div className={style.upper__table_row}>
        <NavLink to="/main" className={style.bttn_add}>
          На главную
        </NavLink>
        <NavLink to="/admin/add" className={style.bttn_add}>
          Добавить
        </NavLink>
      </div>
      <table className={style.admin__table}>
        <thead>
          <tr>
            <th>Название</th>
            <th>Рейтинг</th>
            <th>Описание</th>
            <th>Жанр</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {films.map((film, index) => (
            <tr key={film.id}>
              <td>{film.title}</td>
              <td>{film.rate}</td>
              <td>{film.description}</td>
              <td>{film.genre}</td>
              <td>
                <Link to={`/edit/${film.id}`} className={style.bttn__edit}>
                  Изменить
                </Link>
                <button
                  type="button"
                  onClick={() => deleteFilm(film.id)}
                  className={style.bttn__delete}
                >
                  Удалить
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FilmsList;
