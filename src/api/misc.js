import {API_URL , request} from '../helpers/utils';
import moment from 'moment';

export async function getReport(type = 'a2', report_date = moment().format('YYYY-MM-DD')) {
  report_date = moment(report_date).format('YYYY-MM-DD');
  // console.log(report_date, type, moment().format('YYYY-MM-DD'));
  
  let url = `${API_URL}/misc/getReport?report_date=${report_date}&milk_type=${type}`;
  return request({
    url: url,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    }
    
  });
}