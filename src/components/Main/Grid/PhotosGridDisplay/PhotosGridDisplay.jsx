import React from 'react';
import PropTypes from 'prop-types';
import style from './PhotosGridDisplay.module.scss';

const PhotosGridDisplay = props => {
  return (
    <div className={style.gridPhotos__container}>
      {props.filteredPhoto.map(img => {
        return (
          <div className={style.gridPhotos__item_overlay} key={img.id}>
            <img
              className={style.gridPhotos__item}
              src={img.thumbnailUrl}
              alt={img.title}
            />
            <div className={style.gridPhotos__item_title}>{img.title}</div>
          </div>
        );
      })}
    </div>
  );
};

PhotosGridDisplay.propTypes = {
  filteredPhoto: PropTypes.array.isRequired,
};

export default PhotosGridDisplay;
