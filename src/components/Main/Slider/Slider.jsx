/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './Slider.module.scss';

const Slider = ({ sliderPhotos, ...props }) => {
  const sortPhotos = sliderPhotos.filter(i => i.id <= props.maxLength);

  const [currentImage, setCurrentImage] = useState(1);

  return (
    <div className={style.slider__container}>
      {currentImage <= 1 ? (
        <div className={style.slider__container_arrowsDisabled}>&#9664;</div>
      ) : (
        <div
          role="button"
          tabIndex={0}
          className={style.slider__container_arrows}
          onClick={() => setCurrentImage(currentImage - 1)}
        >
          &#9664;
        </div>
      )}
      {sortPhotos
        .filter(img => img.id === currentImage)
        .map(img => {
          return (
            <div key={img.id} className={style.slider__item}>
              <img
                className={style.slider__active}
                src={img.url}
                alt={img.title}
              ></img>
            </div>
          );
        })}
      {currentImage >= props.maxLength ? (
        <div className={style.slider__container_arrowsDisabled}>&#9654;</div>
      ) : (
        <div
          role="button"
          tabIndex={0}
          className={style.slider__container_arrows}
          onClick={() => setCurrentImage(currentImage + 1)}
        >
          &#9654;
        </div>
      )}
    </div>
  );
};

Slider.propTypes = {
  sliderPhotos: PropTypes.array.isRequired,
  maxLength: PropTypes.number.isRequired,
};

export default Slider;
