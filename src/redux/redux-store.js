import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import photosReducer from './photos-reducer';
import appReducer from './app-reducer';

const reducers = combineReducers({
  photos: photosReducer,
  app: appReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
window.store = store;
