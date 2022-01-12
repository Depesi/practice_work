/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './PhotosGridDisplay.module.scss';
import Modal from '../../../Modal/Modal';
import constants from '../../../../constants/constants';

const PhotosGridDisplay = ({
  filteredPhoto,
  pageSize,
  currentPage,
  ...props
}) => {
  const [modalActive, setModalActive] = useState(false);
  const [currentFilm, setCurrentFilm] = useState([]);

  const GridPhotos = filteredPhoto.slice(
    currentPage - 1,
    pageSize + currentPage - 1,
  );

  return (
    <section>
      {!GridPhotos.length ? (
        <div className={style.noFounded__movies}>
          {constants.NOT_FOUNDED_MOVIES}
        </div>
      ) : (
        <div className={style.gridPhotos__container}>
          {GridPhotos.map(img => {
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
    </section>
  );
};

PhotosGridDisplay.defaultProps = {
  filteredPhoto: [],
  pageSize: 10,
  currentPage: 1,
};

PhotosGridDisplay.propTypes = {
  filteredPhoto: PropTypes.array,
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
};

export default PhotosGridDisplay;
