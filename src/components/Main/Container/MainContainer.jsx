import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Main from '../Main';
import {
  setSliderPhotos,
  getSliderPhotos,
} from '../../../redux/photos-reducer';

class MainContainer extends React.Component {
  componentDidMount() {
    this.props.getSliderPhotos();
  }

  render() {
    return <Main {...this.props} />;
  }
}
MainContainer.propTypes = {
  sliderPhotos: PropTypes.array.isRequired,
  getSliderPhotos: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    sliderPhotos: state.photos.sliderPhotos,
    getSliderPhotos: state.photos.getSliderPhotos,
  };
};
export default connect(mapStateToProps, { setSliderPhotos, getSliderPhotos })(
  MainContainer,
);
