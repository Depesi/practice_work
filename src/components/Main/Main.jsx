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

  const pageSize = 10;

  return (
    <div className={style.mainPage__container}>
      <div className="container">
        <div className={style.slider__heading}> Выбор критиков</div>
        <Slider sliderPhotos={sliderPhotos} pageSize={pageSize} />
        <div className={style.grid__heading}> Список фильмов </div>
        <Grid gridPhotos={sliderPhotos} pageSize={pageSize} />
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
