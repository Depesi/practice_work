import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/', // локальный

  // baseURL: 'http://my-json-server.typicode.com/Depesi/photosjson/' //Работающий http server
  // headers: {
  // 	'Access-Control-Allow-Credentials': true,
  // 	'Access-Control-Allow-Origin': true
  // },

  // baseURL: 'https://api.npoint.io/8993ef4d6fdc80c36060' //глобальный
});

export const appAPI = {
  getThemeMode() {
    return instance.get(`App`).then(response => response.data);
  },
  setThemeMode(darkMode) {
    return instance.put(`App`, { darkMode }); // .then(response => response.data)
  },
};

export const mainAPI = {
  getSliderPhotos() {
    return instance.get(`Photos`).then(response => response.data);
  },
};
