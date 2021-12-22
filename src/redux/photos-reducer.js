import { mainAPI } from '../api/api';

const SET_SLIDER_PHOTO = 'SET_SLIDER_PHOTO';

const initialState = {
  sliderPhotos: [
    {
      albumId: 1,
      id: 1,
      title: 'accusamus beatae ad facilis cum similique qui sunt',
      url: 'https://via.placeholder.com/600/92c952',
      thumbnailUrl: 'https://via.placeholder.com/150/92c952',
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
};
// thunk

export default photosReducer;
