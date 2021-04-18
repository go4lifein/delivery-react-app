import axios from "axios";

export const BASE_API_URL = 'https://api.deliver.go4life.in';
// export const BASE_API_URL = 'http://localhost:5000';
export const API_URL = `${BASE_API_URL}/api`;
// export const API_URL = 'https://go4life-deliver.herokuapp.com/api';
// export const API_URL = 'http://localhost:5000/api';
// export const API_URL = 'http://192.168.40.14:5000/api';
// export const API_URL = 'http://192.168.0.103:5000/api';

// export const API_URL = '/api';

export function getCookies() {
  var x = document.cookie;
  let cookies = x.split(";");
  let data = {};
  cookies.forEach((cookie) => {
    let values = cookie.split("=");
    data[values[0]] = values[1];
  });
  return data;
}

export function setCookie(name, value, days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function setRequestAuthHeader(key = "x-admin-token", accessToken) {
  // alert(key + " " + accessToken)
  axios.defaults.headers.common[key] = accessToken;
}

export const userAccessToken = getCookies()["x-admin-token"];

export function initRequestAuthHeader(key = "x-admin-token") {
  let userAccessToken = getCookies()[key];
  if(userAccessToken) setRequestAuthHeader(key, userAccessToken);
}
if(getCookies()["x-admin-token"]) {
  initRequestAuthHeader("x-admin-token");
} else {
  initRequestAuthHeader("x-driver-token");
}

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

export function postRequest(url, data) {
  return axios.request({
    url: url,
    method: 'post',
    data,
    headers: {
      'Content-Type': 'application/json',
    }
  });
}

export function getRequest(url) {
  return axios.request({
    url: url,
    method: 'get'
  });
}

export function dataURItoBlob(dataURI) {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(',')[1]);

  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ab], {type: mimeString});
}

export function handleApiErrorMessage(err) {
  console.error("API ERROR DATA", err.response)
  if(!err) {
    throw new Error("No error object provided");
  } else if(err.response && err.response.data) {
    return err.response.data;
  } else if(err.response && err.response.status) {
    return err.response.status + ' ' + err.response.statusText ;
  } else if(err.message) {
    return err.message;
  }
  console.error(err);
  return "Some error occured.";
}