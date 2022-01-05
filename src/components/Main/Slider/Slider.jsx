/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BtnSlider from './BtnSlider';
import style from './Slider.module.scss';

const Slider = ({ sliderPhotos, pageSize }) => {
  const sortPhotos = sliderPhotos
    .filter(i => i.rate >= 9)
    .sort((a, b) => {
      if (a.rate > b.rate) {
        return 1;
      }
      if (a.rate < b.rate) {
        return -1;
      }
      return 0;
    })
    .reverse();
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
            <div className={style.slide__title}>
              {img.title}
              <div>Рейтинг: {img.rate}</div>
            </div>
            <img
              src={img.url}
              alt={img.title}
              onClick={() => {
                // eslint-disable-next-line no-console
                console.log(
                  currentImage,
                  '----',
                  sortPhotos[currentImage - 1].title,
                  sortPhotos[currentImage - 1].rate,
                  sortPhotos[currentImage - 1].description,
                );
              }}
            ></img>
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
  pageSize: 10,
};
Slider.propTypes = {
  sliderPhotos: PropTypes.array,
  pageSize: PropTypes.number,
};

export default Slider;
