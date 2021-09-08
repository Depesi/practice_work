import { applyMiddleware, combineReducers, createStore } from "redux";
import photosReducer from "./photos-reducer";
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
	photos: photosReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
window.store = store;