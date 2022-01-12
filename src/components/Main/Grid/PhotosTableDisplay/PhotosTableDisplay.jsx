/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './PhotosTableDisplay.module.scss';
import Modal from '../../../Modal/Modal';
import constants from '../../../../constants/constants';

const PhotosTableDisplay = ({
  filteredPhoto,
  pageSize,
  currentPage,
  ...props
}) => {
  const [modalActive, setModalActive] = useState(false);
  const [currentFilm, setCurrentFilm] = useState([]);

  const TablePhotos = filteredPhoto.slice(
    currentPage - 1,
    pageSize + currentPage - 1,
  );
  return (
    <section>
      {!TablePhotos.length ? (
        <div className={style.noFounded__movies}>
          {constants.NOT_FOUNDED_MOVIES}
        </div>
      ) : (
        <div className={style.tablePhotos__container}>
          {TablePhotos.map(img => (
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
                {constants.MORE}
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
    </section>
  );
};

PhotosTableDisplay.defaultProps = {
  filteredPhoto: [],
  pageSize: 10,
  currentPage: 1,
};

PhotosTableDisplay.propTypes = {
  filteredPhoto: PropTypes.array,
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
};
export default PhotosTableDisplay;
