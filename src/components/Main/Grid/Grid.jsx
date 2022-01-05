/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PhotosGridDisplay from './PhotosGridDisplay/PhotosGridDisplay';
import PhotosTableDisplay from './PhotosTableDisplay/PhotosTableDisplay';
import style from './Grid.module.scss'

const Grid = props => {
  const [tableMode, setTableMode] = useState(false);
  const [value, setValue] = useState('');
  const [genre, setGenre] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPhoto = props.gridPhotos
	.filter(
		img =>
		  img.id >= currentPage && img.id < props.pageSize + currentPage,
	  )
	  .filter(img => {
    return img?.title?.toLowerCase().includes(value.toLowerCase()) && img?.genre?.toLowerCase().includes(genre.toLowerCase());
  });
  const allGenres = new Set(props.gridPhotos.map(img => img.genre))

  return (
    <>
      <div className={style.above__table}>
        <form>
          <input 
		    className={style.search__input}
            type="text"
            placeholder="Поиск фильма"
            onChange={e => setValue(e.target.value)}
          />
        </form> 
		<div>
			Фильтр: <select name="select__genre" required="required" className={style.select__input} onChange={e => setGenre(e.target.value)}>
				<option value=''>Все фильмы</option>	
				{[...allGenres].map((img, index) => {
					return (
						<option key={index} value={img}>{img}</option>
					);
				})}
			</select>
		</div>
		<div className={style.checkbox}>
    		<input type="checkbox" id="checked" className={style.checkbox__input} 
				onClick={!tableMode ? () => setTableMode(true) : () => setTableMode(false)}/>
    		<label htmlFor="checked" className={style.checkbox__label}> 
				<div className={style.checkbox__text}> G L</div> 
			</label>
		</div>
      </div>

      {!tableMode ? (
        <PhotosGridDisplay filteredPhoto={filteredPhoto} ></PhotosGridDisplay>
      ) : (
        <PhotosTableDisplay filteredPhoto={filteredPhoto} ></PhotosTableDisplay>
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
            currentPage + props.pageSize < props.gridPhotos.length
              ? false
              : true
          }
        />
        <label
          htmlFor="rightButton"
          className={`${style.button} + ' ' ${style.right} ' ' + ${
            currentPage + props.pageSize < props.gridPhotos.length
              ?  ' '
              : style.disabled
          }`}
        > </label>
      </div>
    </>
  );
};
Grid.propTypes = {
  gridPhotos: PropTypes.array.isRequired,
  pageSize: PropTypes.number.isRequired,
};
export default Grid;
