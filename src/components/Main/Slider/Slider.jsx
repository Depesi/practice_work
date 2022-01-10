/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BtnSlider from './BtnSlider';
import style from './Slider.module.scss';
import Modal from '../../Modal/Modal';
import constants from '../../../constants/constants';

const Slider = ({ sliderPhotos, pageSize }) => {
  const [modalActive, setModalActive] = useState(false);
  const [currentImage, setCurrentImage] = useState(1);

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
    <section>
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
                <div>{`${constants.RATE} ${img.rate}`}</div>
              </div>
              <img
                src={img.url}
                alt={img.title}
                onClick={() => {
                  setModalActive(true);
                }}
              ></img>
            </div>
          );
        })}
        <BtnSlider moveSlide={nextSlide} direction="next" />
        <BtnSlider moveSlide={prevSlide} direction="prev" />
      </div>

      <Modal
        active={modalActive}
        setActive={setModalActive}
        title={sortPhotos[currentImage - 1]?.title}
        description={sortPhotos[currentImage - 1]?.description}
        rate={sortPhotos[currentImage - 1]?.rate}
        photo={sortPhotos[currentImage - 1]?.url}
      />
    </section>
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
