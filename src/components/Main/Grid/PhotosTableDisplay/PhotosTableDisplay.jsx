import React from 'react';
import PropTypes from 'prop-types';
import style from './PhotosTableDisplay.module.scss';

const PhotosTableDisplay = props => {
  return (
    <div className={style.tablePhotos__container}>
      {props.filteredPhoto.map(img => {
        return (
          <div className={style.tablePhotos__item} key={img.id}>
            <img
              className={style.tablePhotos__item_photo}
              src={img.thumbnailUrl}
              alt={img.title}
            />
            <div className={style.tablePhotos__item_description}>
              {img.title}
            </div>
          </div>
        );
      })}
    </div>
  );
};

PhotosTableDisplay.propTypes = {
  filteredPhoto: PropTypes.array.isRequired,
};

export default PhotosTableDisplay;
