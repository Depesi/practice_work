/* eslint-disable no-debugger */
import { mainAPI } from '../api/api';
import { initializedSuccess } from './app-reducer';

const SET_SLIDER_PHOTO = 'SET_SLIDER_PHOTO';

const initialState = {
  sliderPhotos: [
    {
      id: 1,
      title: '',
      rate: 0,
      description: '',
      genre: '',
      url: '',
      thumbnailUrl: '',
    },
  ],
};

const photosReducer = (state = initialState, action) => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (action.type) {
    case SET_SLIDER_PHOTO:
      return {
        ...state,
        sliderPhotos: action.sliderPhotos,
      };

    default:
      return state;
  }
};

export const setSliderPhotos = sliderPhotos => {
  return {
    type: SET_SLIDER_PHOTO,
    sliderPhotos,
  };
};

// thunk
export const getSliderPhotos = () => async dispatch => {
  const data = await mainAPI.getSliderPhotos();
  dispatch(setSliderPhotos(data));
  dispatch(initializedSuccess());
};
// thunk

export default photosReducer;
