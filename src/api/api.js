/* eslint-disable import/prefer-default-export */
/* eslint-disable sonarjs/prefer-immediate-return */
/* eslint-disable prettier/prettier */
/* eslint-disable no-debugger */
import * as axios from 'axios';

const instance = axios.create({
  //   baseURL: 'http://localhost:3000/',
  baseURL: 'http://localhost:5000/', // express

  // baseURL: 'http://my-json-server.typicode.com/Depesi/photosjson/' //Работающий http server
  //   headers: {
  //   'Access-Control-Allow-Origin': true,
  //   'Access-Control-Allow-Credentials': true,
  //   },
});

export const mainAPI = {
  getSliderPhotos() {
    return instance.get(`films`).then(response => response.data);
  },
};
