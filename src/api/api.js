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

export const adminApi = {
  deleteFilm(id) {
    return instance.delete(`films/${id}`).then(response => response.data);
  },
  getFilmById(id) {
    return instance.get(`films/${id}`).then(response => response.data);
  },
  updateFilm(id, title, rate, description, genre, url, thumbnailUrl) {
    return instance.patch(`films/${id}`, {
      title,
      rate,
      description,
      genre,
      url,
      thumbnailUrl,
    });
  },
};
