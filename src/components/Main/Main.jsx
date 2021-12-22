import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from './Grid/Grid';
import style from './Main.module.scss';
import Slider from './Slider/Slider';
import { setSliderPhotos, getSliderPhotos } from '../../redux/photos-reducer';
import { getPhotosForSlider } from '../../redux/photos-selectors';

const Main = props => {
  useEffect(() => {
    props.getSliderPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const maxLength = 10;

  return (
    <div>
      <div className="container">
        <Slider sliderPhotos={props.sliderPhotos} maxLength={maxLength} />
        <div className={style.grid__heading}> Галерея </div>
        <Grid gridPhotos={props.sliderPhotos} maxLength={maxLength} />
      </div>
    </div>
  );
};

Main.propTypes = {
  sliderPhotos: PropTypes.array.isRequired,
  getSliderPhotos: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    sliderPhotos: getPhotosForSlider(state),
  };
};
export default connect(mapStateToProps, { setSliderPhotos, getSliderPhotos })(
  Main,
);
