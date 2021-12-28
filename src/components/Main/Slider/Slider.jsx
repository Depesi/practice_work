/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BtnSlider from './BtnSlider';
import style from './Slider.module.scss';

const Slider = ({ sliderPhotos, maxLength }) => {
  const sortPhotos = sliderPhotos.filter(i => i.id <= maxLength);

  const [currentImage, setCurrentImage] = useState(1);

  const nextSlide = () => {
    if (currentImage !== sortPhotos.length) {
      setCurrentImage(currentImage + 1);
    } else if (currentImage === sortPhotos.length) {
      setCurrentImage(1);
    }
  };

  const prevSlide = () => {
    if (currentImage !== 1) {
      setCurrentImage(currentImage - 1);
    } else if (currentImage === 1) {
      setCurrentImage(sortPhotos.length);
    }
  };

  return (
    <div className={style.container__slider}>
      {sortPhotos.map((img, index) => {
        return (
          <div
            key={img.id}
            className={
              currentImage === index + 1
                ? `${style.slide} ${style.active__anim}`
                : `${style.slide}`
            }
          >
            <img src={img.url} alt={img.title}></img>
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction="next" />
      <BtnSlider moveSlide={prevSlide} direction="prev" />
    </div>
  );
};

Slider.defaultProps = {
  sliderPhotos: [],
  maxLength: 10,
};
Slider.propTypes = {
  sliderPhotos: PropTypes.array,
  maxLength: PropTypes.number,
};

export default Slider;
