/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './PhotosGridDisplay.module.scss';
import Modal from '../../../Modal/Modal';

const PhotosGridDisplay = props => {
  const [modalActive, setModalActive] = useState(false);
  const [currentFilm, setCurrentFilm] = useState([]);

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
              <div
                className={style.gridPhotos__item_overlay}
                key={img.id}
                onClick={() => {
                  setModalActive(true);
                  setCurrentFilm(img);
                }}
              >
                <img
                  className={style.gridPhotos__item}
                  src={img.thumbnailUrl}
                  alt={img.title}
                />
                <div className={style.gridPhotos__item_title}>{img.title}</div>
              </div>
            );
          })}
          <Modal
            active={modalActive}
            setActive={setModalActive}
            title={currentFilm?.title}
            description={currentFilm?.description}
            rate={currentFilm?.rate}
            photo={currentFilm?.url}
          />
        </div>
      )}
    </>
  );
};

PhotosGridDisplay.propTypes = {
  filteredPhoto: PropTypes.array.isRequired,
};

export default PhotosGridDisplay;
