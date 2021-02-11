import {API_URL , request} from '../helpers/utils';
import { post } from 'axios';

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

export function updateCrateId(data) {
  let url = `${API_URL}/order/updateCrateId`;
  return request({
    url: url,
    method: 'post',
    data,
    headers: {
      'Content-Type': 'application/json',
    }
  });
}

export function prepareOrder(data) {
  let url = `${API_URL}/order/prepareOrder`;
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
  return request({
    url: url,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    }
  });
}