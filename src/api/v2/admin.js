import {API_URL , request, getRequest} from '../../helpers/utils';
import { post } from 'axios';
import moment from 'moment-timezone';

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

export function getOrderedProducts(
  fromDate = moment().format('YYYY-MM-DD'), 
  endDate = moment().format('YYYY-MM-DD')
) {
  let url = `${API_URL}/v2/order/getOrderedProducts?fromDate=${fromDate}&endDate=${endDate}`;
  return getRequest(url);
}

export function getOrderProducts(
  fromDate = moment().format('YYYY-MM-DD'), 
  endDate = moment().format('YYYY-MM-DD')
) {
  let url = `${API_URL}/v2/order/getOrderProducts?fromDate=${fromDate}&endDate=${endDate}`;
  return getRequest(url);
}

export function getOrderBoxData(
  fromDate = moment().format('YYYY-MM-DD'), 
  endDate = moment().format('YYYY-MM-DD')
) {
  let url = `${API_URL}/v2/order/getOrderBoxData?fromDate=${fromDate}&endDate=${endDate}`;
  return getRequest(url);
}
