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

  const gridPhotos = props.gridPhotos.filter(img => img.id <= props.maxLength);
  const filteredPhoto = gridPhotos.filter(img => {
    return img?.title?.toLowerCase().includes(value.toLowerCase());
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
