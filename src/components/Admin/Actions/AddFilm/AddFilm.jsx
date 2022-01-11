/* eslint-disable no-debugger */
/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import style from '../Actions.module.scss';

const AddFilm = () => {
  const [title, setTitle] = useState('');
  const [rate, setRate] = useState(null);
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState('');
  const [url, setUrl] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const history = useHistory();

  const saveFilm = async e => {
    e.preventDefault();
    await axios.post('http://localhost:5000/films', {
      title,
      rate,
      description,
      genre,
      url,
      thumbnailUrl,
    });
    history.push('/admin');
    debugger;
  };

  const createLabel = (name, data, setData, placeholder, maxLength = 255) => {
    return (
      <div className={style.item__container}>
        <label className={style.addFilm__label}>{`${name}: `}</label>
        <input
          className={style.addFilm__input}
          type="text"
          placeholder={placeholder}
          value={data}
          onChange={e => setData(e.target.value)}
          maxLength={maxLength}
          required
        />
        <span className={style.under__input}>
          Допустимая длина поля: {data?.length} / {maxLength}
        </span>
      </div>
    );
  };

  return (
    <div className={style.addFilm__container}>
      <form onSubmit={saveFilm}>
        {createLabel('Заголовок', title, setTitle, 'Добавить заголовок', 100)}
        {createLabel('Рейтинг', rate, setRate, 'Добавить рейтинг', 3)}
        <div className={style.item__container}>
          <textarea
            className={style.add__textArea}
            rows="10"
            cols="45"
            placeholder="Добавить описание"
            value={description}
            onChange={e => setDescription(e.target.value)}
            maxLength={255}
            required
          />
          <span className={style.under__input}>
            Допустимая длина поля: {description?.length} / 255
          </span>
        </div>
        {createLabel('Жанр', genre, setGenre, 'Добавить жанр', 60)}
        {createLabel(
          'Ссылка на маленькое фото',
          url,
          setUrl,
          'Добавить ссылку',
        )}
        {createLabel(
          'Ссылка на большое фото',
          thumbnailUrl,
          setThumbnailUrl,
          'Добавить ссылку',
        )}
        <div className={style.submit__row}>
          <input
            type="submit"
            className={style.submit__input}
            value="Добавить"
          />
        </div>
      </form>
    </div>
  );
};

export default AddFilm;
