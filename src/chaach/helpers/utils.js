import axios from 'axios';

export const API_URL = 'https://api.deliver.go4life.in/api';


export function getRequest(url) {
    return axios.request({
      url: url,
      method: 'get'
    });
  }
  
  
export function request(config) {
    return axios.request(config);
  }
  