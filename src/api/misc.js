import {API_URL , request, getRequest} from '../helpers/utils';
import moment from 'moment';

export async function getReport(type = 'a2', report_date = moment().format('YYYY-MM-DD')) {

  let date = moment(report_date).format('YYYY-MM-DD');
    
  let url = `${API_URL}/misc/getReport?report_date=${date}&milk_type=${type}`;
  let result =  await request({

    url: url,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    }

  });

  return result ;
}

export async function getBatchMilkReport(batchNo) {
  let url = `${API_URL}/misc/getBatchMilkReport?batchNo=${batchNo}`;
  return getRequest(url);
}

export function getOrderDetails(orderId = '') {
  orderId = parseInt(orderId)
  orderId = btoa(orderId);
  let url = `${API_URL}/order/getMyOrderDetails?orderId=${orderId}`;
  return getRequest(url);
}

export function getMyOrderItemDetails(orderId = '') {
  orderId = parseInt(orderId)
  orderId = btoa(orderId);
  let url = `${API_URL}/order/getMyOrderItemDetails?orderId=${orderId}`;
  return getRequest(url);
}