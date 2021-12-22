import { appAPI } from '../api/api';

const SET_MODE = 'SET_MODE';
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
const SET_ERROR = 'SET_ERROR';

const initialState = {
  darkMode: false,
  initializeApp: false,
  appError: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODE:
      return {
        ...state,
        darkMode: action.darkMode,
      };
    case INITIALIZED_SUCCESS:
      return { ...state, initializeApp: true };

    case SET_ERROR:
      return { ...state, appError: action.appError };

    default:
      return state;
  }
};

export const setTheme = darkMode => {
  return {
    type: SET_MODE,
    darkMode,
  };
};

export const initializedSuccess = () => {
  return {
    type: INITIALIZED_SUCCESS,
  };
};

export const setError = appError => {
  return {
    type: SET_ERROR,
    appError,
  };
};

// thunk

export const getThemeMode = () => async dispatch => {
  const data = await appAPI.getThemeMode();
  await dispatch(setTheme(data));
  dispatch(initializedSuccess());
};

export const setThemeMode = darkMode => async dispatch => {
  const data = await appAPI.setThemeMode(darkMode);
  if (data.status >= 300) {
    dispatch(setError(true));
  } else {
    dispatch(setTheme(data.data));
  }
};
// thunk

export default appReducer;
