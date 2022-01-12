/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { adminApi } from '../../../../api/api';
import style from '../Actions.module.scss';

const EditFilm = () => {
  const [title, setTitle] = useState('');
  const [rate, setRate] = useState(0);
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState('');
  const [url, setUrl] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const history = useHistory();
  const { id } = useParams();

  const updateFilm = async e => {
    e.preventDefault();
    await adminApi.updateFilm(
      id,
      title,
      rate,
      description,
      genre,
      url,
      thumbnailUrl,
    );
    history.push('/admin');
  };

  useEffect(() => {
    getFilmById();
  }, []);

  const getFilmById = async () => {
    const response = await adminApi.getFilmById(id);
    setTitle(response.title);
    setRate(response.rate);
    setDescription(response.description);
    setGenre(response.genre);
    setUrl(response.url);
    setThumbnailUrl(response.thumbnailUrl);
  };

  const createLabel = (name, data, setData, maxLength = 255) => {
    return (
      <div className={style.item__container}>
        <label className={style.addFilm__label}>{`${name}: `}</label>
        <input
          className={style.addFilm__input}
          type="text"
          placeholder={`Изменить ${name}`}
          value={data}
          onChange={e => setData(e.target.value)}
          maxLength={maxLength}
        />
        <span className={style.under__input}>
          Допустимая длина поля: {data?.length} / {maxLength}
        </span>
      </div>
    );
  };

  return (
    <div className={style.addFilm__container}>
      <form onSubmit={updateFilm}>
        {createLabel('Заголовок', title, setTitle, 100)}
        {createLabel('Рейтинг', rate, setRate, 3)}
        <div className={style.edit__film_item}>
          <textarea
            className={style.add__textArea}
            rows="10"
            cols="45"
            placeholder="Изменить Описание"
            value={description}
            onChange={e => setDescription(e.target.value)}
            maxLength={350}
          />
          <span className={style.under__input}>
            Допустимая длина поля: {description?.length} / 350
          </span>
        </div>
        {createLabel('Жанр', genre, setGenre, 60)}
        {createLabel('Ссылка на маленькое фото', url, setUrl)}
        {createLabel('Ссылка на большое', thumbnailUrl, setThumbnailUrl)}

        <div className={style.submit__row}>
          <input
            type="submit"
            className={style.submit__input}
            value="Обновить"
          />
        </div>
      </form>
    </div>
  );
};

export default EditFilm;
