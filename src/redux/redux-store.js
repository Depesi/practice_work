import { applyMiddleware, combineReducers, createStore } from "redux";
import photosReducer from "./photos-reducer";
import thunkMiddleware from 'redux-thunk'
import appReducer from "./app-reducer";

let reducers = combineReducers({
	photos: photosReducer,
	app: appReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
window.store = store;