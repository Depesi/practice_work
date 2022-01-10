/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from './Grid/Grid';
import style from './Main.module.scss';
import Slider from './Slider/Slider';
import constants from '../../constants/constants';

const Main = ({ sliderPhotos, getSliderPhotos }) => {
  useEffect(() => {
    getSliderPhotos();
  }, []);

  const pageSize = 10;

  return (
    <div className={style.mainPage__container}>
      <div className="container">
        <h2 className={style.slider__heading}>{constants.CRITICTS_CHOISE}</h2>
        <Slider sliderPhotos={sliderPhotos} pageSize={pageSize} />
        <h2 className={style.grid__heading}> {constants.LIST_OF_FILMS} </h2>
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
