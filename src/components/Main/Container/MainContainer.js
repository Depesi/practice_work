import { connect } from 'react-redux';
import Main from '../Main';
import {
  setSliderPhotos,
  getSliderPhotos,
} from '../../../redux/photos-reducer';

const mapStateToProps = state => {
  return {
    sliderPhotos: state.photos.sliderPhotos,
    getSliderPhotos: state.photos.getSliderPhotos,
  };
};
export default connect(mapStateToProps, { setSliderPhotos, getSliderPhotos })(
  Main,
);
