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

  const gridPhotos = props.gridPhotos.filter(img => img.id <= props.maxLength);
  const allGenres = new Set(gridPhotos.map(img => img.genre))

  const filteredPhoto = gridPhotos.filter(img => {
    return img?.title?.toLowerCase().includes(value.toLowerCase()) && img?.genre?.toLowerCase().includes(genre.toLowerCase());
  });

  return (
    <>
      <div className={style.above__table}>
        <form>
          <input 
		    className={style.search__input}
            type="text"
            placeholder="Search the photo"
            onChange={e => setValue(e.target.value)}
          />
        </form> 

		<select name="select__genre" required="required" className={style.select__input} onChange={e => setGenre(e.target.value)}>
			<option value=''>Все фильмы</option>	
		    {[...allGenres].map((img, index) => {
				return (
					<option key={index} value={img}>{img}</option>
				);
			})}
		</select>

		<div className={style.checkbox}>
    		<input type="checkbox" id="checked" className={style.checkbox__input} 
				onClick={!tableMode ? () => setTableMode(true) : () => setTableMode(false)}/>
    		<label htmlFor="checked" className={style.checkbox__label}> 
				<div className={style.checkbox__text}> G L</div> 
			</label>
		</div>
      </div>

      {!tableMode ? (
        <PhotosGridDisplay filteredPhoto={filteredPhoto}></PhotosGridDisplay>
      ) : (
        <PhotosTableDisplay filteredPhoto={filteredPhoto}></PhotosTableDisplay>
      )}
    </>
  );
};
Grid.propTypes = {
  gridPhotos: PropTypes.array.isRequired,
  maxLength: PropTypes.number.isRequired,
};
export default Grid;
