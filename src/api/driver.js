import {API_URL , request} from '../helpers/utils';
import { post } from 'axios';

export function login(data) {
  let url = `${API_URL}/driver/login`;
  return request({
    url: url,
    method: 'post',
    data,
    headers: {
      'Content-Type': 'application/json',
    }
  });
}

export function getMyOrders(driverId) {
  let url = `${API_URL}/driver/${driverId}/getMyOrders`;
  return request({
    url: url,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    }
  });
}

export function confirmDelivery(data) {
  let url = `${API_URL}/order/confirmDelivery`;
  return request({
    url: url,
    method: 'post',
    data,
    headers: { 'Content-Type': 'application/json' }
  });
}

export function submitOrderDelivery(formData) {
  let url = `${API_URL}/driver/submitOrderDelivery`;
  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    }
  }
  return post(url, formData, config);
}