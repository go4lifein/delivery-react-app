import React from 'react';
import { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import ReactHighcharts from './ReactHighcharts';
import Customers from './Customers';

import { getCustomersOrderHistory, getCustomers } from '../../api/admin';

let DURATION = 365;

let records = [];
let start = moment().subtract(DURATION, 'days');
for (let i = 0; i < DURATION; i++) {
  let date = start.clone().add(i, 'days').format('YYYY-MM-DD');
  records.push({
    date,
    inactiveCustomers: 0,
    newActiveCustomerIds: []
  })
}


function CustomerInactivityTrend() {
  const [data, setData] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [activeIndex, setIndex] = useState(0);

  useEffect(() => {
    getCustomersOrderHistory()
      .then(res => {
        let data = res.data;
        data = data.filter((a) => a.totalOrders > 1);
        data = data.sort((a, b) => new Date(a.lastOrderDate) - new Date(b.lastOrderDate));

        let i = 0, j = 0;
        while (i < DURATION && j < data.length) {
          let newInactive = 0;
          records[i].newActiveCustomerIds = [];
          while (j < data.length && moment(data[j].lastOrderDate).add(15, 'd') < moment(records[i].date)) {
            j++;
            newInactive++;
            records[i].newActiveCustomerIds.push(data[j].customerId);
          }
          // console.log(records[i].date, data[j].lastOrderDate, j)
          records[i].inactiveCustomers = Number(j);
          records[i].newInactive = newInactive;
          i++;
        }
        records[0].newInactive = 0;
        setData(data);
        setIndex(DURATION - 1);
      });
  }, []);

  useEffect(() => {
    let {newActiveCustomerIds = []} = records[activeIndex]
    const data = {
      ids: newActiveCustomerIds
    }
    getCustomers(data)
    .then(res => {
      let data = res.data;
      setCustomers(data);
    });
  }, [activeIndex]);

  let {newActiveCustomerIds = [], date} = records[activeIndex]
  console.log(newActiveCustomerIds, records[activeIndex]);
  console.log(customers);

  return (
    <div>
      <div>
      <ReactHighcharts data={data} records={records} onSetIndex={setIndex} />
      </div>
      <div>
        <h3 className="p-10">New Inactive on {moment(date).format('DD-MM-YYYY')} ({newActiveCustomerIds.length})</h3>
        <Customers customers={customers || []} />
      </div>
    </div>
  );
}

export default CustomerInactivityTrend;