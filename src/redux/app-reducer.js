/* eslint-disable sonarjs/no-small-switch */
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
  initializeApp: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return { ...state, initializeApp: true };
    default:
      return state;
  }
};

export const initializedSuccess = () => {
  return {
    type: INITIALIZED_SUCCESS,
  };
};

export default appReducer;
