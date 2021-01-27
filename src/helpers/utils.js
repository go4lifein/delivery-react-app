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

export function onlyMilkAndPaneer(products) {
  const categories = Object.entries(products);
  categories.forEach(([category, value]) => {
    value.forEach(product => {
      const name = product.product;
      if(name.toLowerCase().includes("milk") === false) return false;
      if(name.toLowerCase().includes("paneer") ===false) return false;
    });
  });
  return true;
}


export function hasOnlyDairyProducts(products) {
  if('Dairy' in products && Object.entries(products).length === 1) {
    return true;
  }
  return false;
}

export function hasNoDairy(products) {
  if(!('Dairy' in products)) {
    return true;
  }
  return false;
}