import { combineReducers, createStore } from "redux";
import photosReducer from "./photos-reducer";

let reducers = combineReducers({
	photos: photosReducer
})

let store = createStore(reducers);

export default store;
window.store = store;