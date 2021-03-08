import {API_URL, getRequest, postRequest} from '../../helpers/utils';
import moment from 'moment-timezone';
import axios from 'axios';

export function getAllOrders(
  fromDate = moment().format('YYYY-MM-DD'), 
  endDate = moment().format('YYYY-MM-DD')
) {
  let url = `${API_URL}/v2/order/getAllOrders?fromDate=${fromDate}&endDate=${endDate}`;
  return getRequest(url);
}

export function getDeliveryBoysData() {
  let url = `${API_URL}/v2/order/getDeliveryBoysData`;
  return getRequest(url);
}

export function assignDrivers(data) {
  let url = `${API_URL}/v2/order/assignDrivers`;
  return postRequest(url, data);
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

export function getDeliveryReport(
  fromDate = moment().format('YYYY-MM-DD'), 
  endDate = moment().format('YYYY-MM-DD')
) {
  let url = `${API_URL}/v2/order/getDeliveryReport?fromDate=${fromDate}&endDate=${endDate}`;
  return getRequest(url);
}

export function addDriverData(data) {
  let url = `${API_URL}/delivery/addDeliveryPerson`;
  return axios.put(url, data, {
    headers: {
      'Content-Type': 'application/json',
    }
  });
}


