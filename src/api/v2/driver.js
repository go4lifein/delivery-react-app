import {API_URL , request, getRequest} from '../../helpers/utils';
import { post } from 'axios';

export function login(data) {
  let url = `${API_URL}/v2/driver/login`;
  return request({
    url: url,
    method: 'post',
    data,
    headers: {
      'Content-Type': 'application/json',
    }
  });
}

export function getDriver() {
  let url = `${API_URL}/v2/driver/getDriver`;
  return getRequest(url);
}


export function getMyOrders(driverId) {
  let url = `${API_URL}/v2/driver/getMyOrders`;
  return request({
    url: url,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    }
  });
}

// not used
export function confirmDelivery(data) {
  let url = `${API_URL}/order/confirmDelivery`;
  return request({
    url: url,
    method: 'post',
    data,
    headers: {
      'Content-Type': 'application/json',
    }
  });
}

export function submitOrderDelivery(formData) {
  let url = `${API_URL}/v2/driver/submitOrderDelivery`;
  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    }
  }
  return post(url, formData, config);
}