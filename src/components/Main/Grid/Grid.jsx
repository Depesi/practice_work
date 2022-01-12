/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PhotosGridDisplay from './PhotosGridDisplay/PhotosGridDisplay';
import PhotosTableDisplay from './PhotosTableDisplay/PhotosTableDisplay';
import style from './Grid.module.scss';
import constants from '../../../constants/constants';

const Grid = props => {
  const [tableMode, setTableMode] = useState(false);
  const [value, setValue] = useState('');
  const [genre, setGenre] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPhoto = props.gridPhotos.filter(img => {
    return (
      img?.title?.toLowerCase().includes(value.toLowerCase()) &&
      img?.genre?.toLowerCase().includes(genre.toLowerCase())
    );
  });

  const allGenres = new Set(props.gridPhotos.map(img => img.genre));

  return (
    <>
      <div className={style.above__table}>
        <div className={style.filters__container}>
          <form>
            <input
              className={style.search__input}
              type="text"
              placeholder="Поиск фильма"
              onChange={e => setValue(e.target.value)}
            />
          </form>
          <div>
            <select
              name="select__genre"
              required="required"
              className={style.select__input}
              onChange={e => setGenre(e.target.value)}
            >
              <option value=""> {constants.ALL_FILMS}</option>
              {[...allGenres].sort().map((img, index) => {
                return (
                  <option key={index} value={img}>
                    {img}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className={style.checkbox}>
          <input
            type="checkbox"
            id="checked"
            className={style.checkbox__input}
            onClick={
              !tableMode ? () => setTableMode(true) : () => setTableMode(false)
            }
          />
          <label htmlFor="checked" className={style.checkbox__label}>
            <div className={style.checkbox__text}> G L</div>
          </label>
        </div>
      </div>

      {!tableMode ? (
        <PhotosGridDisplay
          filteredPhoto={filteredPhoto}
          pageSize={props.pageSize}
          currentPage={currentPage}
        ></PhotosGridDisplay>
      ) : (
        <PhotosTableDisplay
          filteredPhoto={filteredPhoto}
          pageSize={props.pageSize}
          currentPage={currentPage}
        ></PhotosTableDisplay>
      )}

      <div className={style.controll__buttons_container}>
        <input
          type="button"
          id="leftButton"
          onClick={() => {
            setCurrentPage(currentPage - props.pageSize);
          }}
          disabled={currentPage < props.pageSize ? true : false}
        />
        <label
          htmlFor="leftButton"
          className={`${style.button} + ' ' ${style.left} ' ' + ${
            currentPage < props.pageSize ? style.disabled : ' '
          }`}
        ></label>

        <input
          type="button"
          id="rightButton"
          onClick={() => {
            setCurrentPage(currentPage + props.pageSize);
          }}
          disabled={
            props.gridPhotos.length - (currentPage + props.pageSize - 1) < 1 ||
            filteredPhoto.length < props.pageSize
              ? true
              : false
          }
        />
        <label
          htmlFor="rightButton"
          className={`${style.button} + ' ' ${style.right} ' ' + ${
            props.gridPhotos.length - (currentPage + props.pageSize - 1) < 1 ||
            filteredPhoto.length < props.pageSize
              ? style.disabled
              : ' '
          }`}
        >
          {' '}
        </label>
      </div>
    </>
  );
};
Grid.propTypes = {
  gridPhotos: PropTypes.array.isRequired,
  pageSize: PropTypes.number.isRequired,
};
export default Grid;
