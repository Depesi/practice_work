import { appAPI } from "../api/api"

const SET_MODE = 'SET_MODE'
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let initialState = {
	darkMode: false,
	initializeApp: false
}

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_MODE:
			return {
				...state,
				darkMode: action.darkMode
			}
		case INITIALIZED_SUCCESS:
			return { ...state, initializeApp: true }

		default:
			return state
	}
}

export const setTheme = (darkMode) => {
	return {
		type: SET_MODE,
		darkMode
	}
}

export const initializedSuccess = () => {
	return {
		type: INITIALIZED_SUCCESS
	}
}

//thunk

export const getThemeMode = () => async (dispatch) => {
	let data = await appAPI.getThemeMode()
	await dispatch(setTheme(data))
	dispatch(initializedSuccess())
}

export const setThemeMode = (darkMode) => async (dispatch) => {
	let data = await appAPI.setThemeMode(darkMode)
	dispatch(setTheme(data))
}
//thunk

export default appReducer