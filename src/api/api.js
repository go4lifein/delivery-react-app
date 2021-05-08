import axios from 'axios';
import {enqueueAPIErrorSnackbar} from '../reducers/notifier';
import store from '../store';
import {API_URL} from '../helpers/utils';

export class API {
  constructor(config) {
    this.api = axios.create(config);
  }
  getRequestParam = async (path, param) => {
    return new Promise((resolve, reject) => {
      this.api.request({
        url: path,
        method: 'get',
        params: param
      })
      .then(res => resolve(res.data))
      .catch(err => {
        store.dispatch(enqueueAPIErrorSnackbar(err));
        reject(err);
      });
    })
  }
  get = (path) => {
    return new Promise((resolve, reject) => {
      this.api.request({
        url: path,
        method: 'get'
      })
      .then(res => resolve(res.data))
      .catch(err => {
        store.dispatch(enqueueAPIErrorSnackbar(err));
        reject(err);
      });
    })
  }
  postRequest = (url, data) => {
    return new Promise((resolve, reject) => {
      this.api.request({
        url: url,
        method: 'post',
        data
      })
      .then(res => resolve(res.data))
      .catch(err => {
        store.dispatch(enqueueAPIErrorSnackbar(err));
        reject(err);
      });
    })
  }
  putRequest(url, data) {
    return new Promise((resolve, reject) => {
      this.api.request({
        url: url,
        method: 'put',
        data
      })
      .then(res => resolve(res.data))
      .catch(err => {
        store.dispatch(enqueueAPIErrorSnackbar(err));
        reject(err);
      });
    })
  }
  postFormData(url, formData) {
    return new Promise((resolve, reject) => {
      this.api.post(url, {
        data: formData,
        headers: { 'Content-type': 'multipart/form-data' }
      })
      .then(res => resolve(res.data))
      .catch(err => {
        store.dispatch(enqueueAPIErrorSnackbar(err));
        reject(err);
      });
    })
  }
  setRequestAuthHeader = (key = "x-admin-token", accessToken) => {
    axios.defaults.headers.common[key] = accessToken;
  }
}

const api = new API({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    timeout: 500
  }
});

export default api;