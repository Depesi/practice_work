/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './PhotosTableDisplay.module.scss';
import Modal from '../../../Modal/Modal';

const PhotosTableDisplay = props => {
  const [modalActive, setModalActive] = useState(false);
  const [currentFilm, setCurrentFilm] = useState([]);

  return (
    <>
      {!props.filteredPhoto.length ? (
        <div className={style.noFounded__movies}>
          За этим запросом на этой странице не найдемо фильмов
        </div>
      ) : (
        <div className={style.tablePhotos__container}>
          {props.filteredPhoto.map(img => (
            <div className={style.tablePhotos__item} key={img.id}>
              <img
                className={style.tablePhotos__item_photo}
                src={img.thumbnailUrl}
                alt={img.title}
              />
              <div className={style.tablePhotos__item_description}>
                {img.title}
              </div>
              <div
                className={style.button__moreInfo}
                onClick={() => {
                  setModalActive(true);
                  setCurrentFilm(img);
                }}
              >
                Подробнее
              </div>
            </div>
          ))}
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

PhotosTableDisplay.propTypes = {
  filteredPhoto: PropTypes.array.isRequired,
};

export default PhotosTableDisplay;
