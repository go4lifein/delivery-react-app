import axios from "axios";

export const API_URL = 'https://api.deliver.go4life.in/api';
// export const API_URL = 'https://go4life-deliver.herokuapp.com/api';
// export const API_URL = 'http://localhost:5000/api';
// export const API_URL = 'http://192.168.40.14:5000/api';
// export const API_URL = 'http://192.168.0.103:5000/api';

// export const API_URL = '/api';

export function getCookies() {
  var x = document.cookie;
  let cookies = x.split(';'); 
  let data = {};
  cookies.forEach(cookie => {
    let values = cookie.split('=');
    data[values[0]] = values[1];
  });
  return data;
}

function setRequestAuthHeader(accessToken) {
  axios.defaults.headers.common["x-auth-token"] = accessToken;
}

export const userAccessToken = getCookies()["x-auth-token"];

export function initRequestAuthHeader() {
  let userAccessToken = getCookies()["x-auth-token"];
  if (userAccessToken) setRequestAuthHeader(userAccessToken);
}
initRequestAuthHeader();

export function request(config) {
  return axios.request(config);
}
