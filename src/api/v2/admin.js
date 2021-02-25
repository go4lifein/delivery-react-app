import {API_URL , request} from '../../helpers/utils';
import { post } from 'axios';

export function getAllOrders() {
  let url = `${API_URL}/v2/order/getAllOrders`;
  return request({
    url: url,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    }
  });
}

export function getDeliveryBoysData() {
  let url = `${API_URL}/v2/order/getDeliveryBoysData`;
  return request({
    url: url,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    }
  });
}

export function assignDrivers(data) {
  let url = `${API_URL}/v2/order/assignDrivers`;
  return request({
    url: url,
    method: 'post',
    data,
    headers: {
      'Content-Type': 'application/json',
    }
  });
}
