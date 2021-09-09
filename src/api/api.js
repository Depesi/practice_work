import * as axios from "axios"

const instance = axios.create({
	withCredentials: true,
	baseURL: 'http://my-json-server.typicode.com/Depesi/photosjson/'
})

export const appAPI = {
	getThemeMode() {
		return instance.get(`app`).then(response => response.data)
	},
	setThemeMode(darkMode) {
		return instance.put(`app`, { darkMode }).then(response => response.data)
	}

}

export const mainAPI = {
	getSliderPhotos() {
		return instance.get(`photos`).then(response => response.data)
	}
}