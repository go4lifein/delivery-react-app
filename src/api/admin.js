import {API_URL, getRequest, postRequest} from '../helpers/utils';
import { post } from 'axios';

export function getAllOrders() {
  let url = `${API_URL}/order/getAllOrders`;
  return getRequest(url);
}

export function getDeliveryBoysData() {
  let url = `${API_URL}/order/getDeliveryBoysData`;
  return getRequest(url);
}

export function assignDrivers(data) {
  let url = `${API_URL}/order/assignDrivers`;
  return postRequest(url, data);
}

export function updateCrateId(data) {
  let url = `${API_URL}/order/updateCrateId`;
  return postRequest(url, data);
}

export function prepareOrder(data) {
  let url = `${API_URL}/order/prepareOrder`;
  return postRequest(url, data);
}

export function login(data) {
  let url = `${API_URL}/admin/login`;
  return postRequest(url, data);
}

export function addReport(formData) {
  let url = `${API_URL}/admin/addReport`;
  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    }
  }
  return post(url, formData, config);
}

export function getLocationCustomerDensity() {
  let url = `${API_URL}/admin/getLocationCustomerDensity`;
  return getRequest(url);
}

export function getCustomersOrderHistory() {
  let url = `${API_URL}/analytics/getCustomersOrderHistory`;
  return getRequest(url);
}

export function getCustomers(data) {
  let url = `${API_URL}/customers/getCustomers`;
  return postRequest(url, data);
}