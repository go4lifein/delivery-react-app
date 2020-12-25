import {API_URL , request} from '../helpers/utils';

export function getAllOrders() {
  let url = `${API_URL}/order/getAllOrders`;
  return request({
    url: url,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    }
  });
}

export function getDeliveryBoysData() {
  let url = `${API_URL}/order/getDeliveryBoysData`;
  return request({
    url: url,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    }
  });
}

export function assignDrivers(data) {
  let url = `${API_URL}/order/assignDrivers`;
  return request({
    url: url,
    method: 'post',
    data,
    headers: {
      'Content-Type': 'application/json',
    }
  });
}

export function login(data) {
  let url = `${API_URL}/admin/login`;
  return request({
    url: url,
    method: 'post',
    data,
    headers: {
      'Content-Type': 'application/json',
    }
  });
}