import {API_URL , request} from '../helpers/utils';
import moment from 'moment';

export async function getReport(type = 'a2', report_date = moment().format('YYYY-MM-DD')) {

  let date = moment(report_date).format('YYYY-MM-DD');
    
  let url = `${API_URL}/misc/getReport?report_date=${date}&type=${type}`;
  let result =  await request({
    url: url,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    }
  });
 
  return result ;
  
}