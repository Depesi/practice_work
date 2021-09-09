import * as axios from "axios"

const instance = axios.create({
	baseURL: 'http://my-json-server.typicode.com/Depesi/photosjson/'
	//	baseURL: 'http://my-json-server.typicode.com/Depesi/photosjson/' Работающий http server
})

export const appAPI = {
	getThemeMode() {
		return instance.get(`App`).then(response => response.data)
	},
	setThemeMode(darkMode) {
		return instance.put(`App`, { darkMode }).then(response => response.data)
	}

}

export const mainAPI = {
	getSliderPhotos() {
		return instance.get(`Photos`).then(response => response.data)
	}
}