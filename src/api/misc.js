import {API_URL , request} from '../helpers/utils';

export function getMyOrders(driverId) {
  let url = `${API_URL}/misc/${driverId}/getMyOrders`;
  return request({
    url: url,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    }
  });
}