/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import style from './PhotosGridDisplay.module.scss';

const PhotosGridDisplay = props => {
  useEffect(() => {
    console.log(props.filteredPhoto);
  }, [props.filteredPhoto]);

  return (
    <>
      {!props.filteredPhoto.length ? (
        <div className={style.noFounded__movies}>
          За этим запросом на этой странице не найдемо фильмов
        </div>
      ) : (
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
      )}
    </>
  );
};

PhotosGridDisplay.propTypes = {
  filteredPhoto: PropTypes.array.isRequired,
};

export default PhotosGridDisplay;
