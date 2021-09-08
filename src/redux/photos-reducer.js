import { mainAPI } from "../api/api"

const SET_SLIDER_PHOTO = "SET_SLIDER_PHOTO"

let initialState = {
	sliderPhotos: [
		{
			albumId: 1,
			id: 1,
			title: "accusamus beatae ad facilis cum similique qui sunt",
			url: "https://via.placeholder.com/600/92c952",
			thumbnailUrl: "https://via.placeholder.com/150/92c952"
		}
	]
}

const photosReducer = (state = initialState, action) => {

	switch (action.type) {
		case SET_SLIDER_PHOTO:
			return {
				...state,
				sliderPhotos: action.sliderPhotos
			}

		default:
			return state
	}
}

export const setSliderPhotos = (sliderPhotos) => {
	return {
		type: SET_SLIDER_PHOTO,
		sliderPhotos
	}
}

//thunk
export const getSliderPhotos = () => async (dispatch) => {
	let data = await mainAPI.getSliderPhotos()
	dispatch(setSliderPhotos(data))
}
//thunk

export default photosReducer;