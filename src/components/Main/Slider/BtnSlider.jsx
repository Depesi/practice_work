/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import style from './Slider.module.scss';
import leftArrow from '../../../assets/icons/left-arrow.svg';
import rightArrow from '../../../assets/icons/right-arrow.svg';

const BtnSlider = ({ direction, moveSlide }) => {
  // eslint-disable-next-line prettier/prettier
  return (
    <button
      type="button"
      onClick={moveSlide}
      className={
        direction === 'next'
          ? `${style.btn__slide} ${style.next}`
          : `${style.btn__slide} ${style.prev}`
      }
    >
      <img
        src={direction === 'next' ? rightArrow : leftArrow}
        alt={direction}
      />
    </button>
  );
};

BtnSlider.propTypes = {
  direction: PropTypes.string.isRequired,
  moveSlide: PropTypes.func.isRequired,
};

export default BtnSlider;
