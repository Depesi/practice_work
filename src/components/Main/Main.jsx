/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from './Grid/Grid';
import style from './Main.module.scss';
import Slider from './Slider/Slider';

const Main = ({ sliderPhotos, getSliderPhotos }) => {
  useEffect(() => {
    getSliderPhotos();
  }, []);

  const maxLength = 10;
  return (
    <div>
      <div className="container">
        <div className={style.slider__heading}> Найближчі події</div>
        <Slider sliderPhotos={sliderPhotos} maxLength={maxLength} />
        <div className={style.grid__heading}> Галерея </div>
        <Grid gridPhotos={sliderPhotos} maxLength={maxLength} />
      </div>
    </div>
  );
};

Main.defaultProps = {
  sliderPhotos: [],
  getSliderPhotos: () => {},
};

Main.propTypes = {
  sliderPhotos: PropTypes.array,
  getSliderPhotos: PropTypes.func,
};

export default Main;
