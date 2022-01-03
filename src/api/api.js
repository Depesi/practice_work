import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  // baseURL: 'http://localhost:5000/', //express

  // baseURL: 'http://my-json-server.typicode.com/Depesi/photosjson/' //Работающий http server
  //   headers: {
  //   'Access-Control-Allow-Origin': true,
  //   'Access-Control-Allow-Credentials': true,
  //   },

  // baseURL: 'https://api.npoint.io/8993ef4d6fdc80c36060' //глобальный
});

export const appAPI = {
  getThemeMode() {
    return instance.get(`App`).then(response => response.data);
  },
  setThemeMode(darkMode) {
    return instance.put(`App`, { darkMode });
  },
};

export const mainAPI = {
  getSliderPhotos() {
    return instance.get(`Photos`).then(response => response.data);
  },
};
