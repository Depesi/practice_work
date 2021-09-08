import * as axios from "axios"

const instance = axios.create({
	withCredentials: true,
	baseURL: 'http://localhost:3000/'
})

export const mainAPI = {
	getSliderPhotos() {
		return instance.get(`photos`).then(response => response.data)
	}
}