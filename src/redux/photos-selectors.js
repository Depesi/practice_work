import { createSelector } from "reselect";

export const getPhotosForSlider = (state) => {
	return state.photos.sliderPhotos
}