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

        {!tableMode ? (
			<button type="button" onClick={() => setTableMode(true)} className={style.switch__photos_style}> Table Mode </button>
  
        ) : (
			<button type="button" onClick={() => setTableMode(false)} className={style.switch__photos_style}> Grid Mode </button>
   
        )}
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
