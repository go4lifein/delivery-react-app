import {API_URL, getRequest, postRequest} from '../helpers/utils';
import axios from 'axios';

export function getAllProducts() {
  let url = `${API_URL}/products/getAllProducts`;
  return getRequest(url);
}

export function getAllCategories() {
  let url = `${API_URL}/products/getAllCategories`;
  return getRequest(url);
}

export function searchProducts(name = "") {
  let url = `${API_URL}/products/searchProducts?name=${name}`;
  return getRequest(url);
}

export function getProductsById(ids = []) {
  let url = `${API_URL}/products/getProductsById`;
  return postRequest(url, {ids});
}

export function addHarvestReport(data) {
  
  let url = `${API_URL}/trace/addHarvestReport`;
  return axios.put(url, data, {
    headers: {
      'Content-Type': 'application/json',
    }
  });
}