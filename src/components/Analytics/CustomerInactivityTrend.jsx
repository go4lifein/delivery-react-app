import * as React from 'react';
import { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import ReactHighcharts from 'react-highcharts';

import { getCustomersOrderHistory } from '../../api/admin';

let DURATION = 365;

let records = [];
let start = moment().subtract(DURATION, 'days');
for (let i = 0; i < DURATION; i++) {
  let date = start.clone().add(i, 'days').format('YYYY-MM-DD');
  records.push({
    date,
    inactiveCustomers: 0
  })
}


function CustomerInactivityTrend() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCustomersOrderHistory()
      .then(res => {
        let data = res.data;
        data = data.sort((a, b) => new Date(a.lastOrderDate) - new Date(b.lastOrderDate))
        setData(data);
      });
  }, []);

  let i = 0, j = 0;
  while (i < DURATION && j < data.length) {
    let newInactive = 0;
    while (j < data.length && moment(data[j].lastOrderDate).add(15, 'd') < moment(records[i].date)) {
      j++;
      newInactive++;
      if (j % 100 === 0) {
        // console.log(records[i].date, data[j].lastOrderDate, j)
      }
    }
    // console.log(records[i].date, data[j].lastOrderDate, j)
    records[i].inactiveCustomers = Number(j);
    records[i].newInactive = newInactive;
    i++;
  }
  records[0].newInactive = 0;
  
  // console.log(records);
  const config = {
    xAxis: {
      categories: records.map(item => item.date),
      title: {
        text: "Date"
      },
      crosshair: true
    },
    title: {
      text: "Customer Inactivity Trend"
    },
    boost: {
      useGPUTranslations: true
    },
    chart: {
      zoomType: 'x',
      panning: true,
      panKey: 'shift'
    },
    yAxis: [{
      title: {
        text: 'Cumulative Inactive Count',
      }
    }, {
      gridLineWidth: 0,
      opposite: true,
      title: {
        text: 'New Inactive Count',
      }
    }],
    series: [{
      name: 'Cumulative Inactive Count',
      data: records.map(item => item.inactiveCustomers),
      yAxis: 0,
    }, {
      name: 'New Inactive Count',
      data: records.map(item => item.newInactive),
      yAxis: 1
    }],
    tooltip: {
      shared: true
    }

  }



  return (
    <div>
      <ReactHighcharts config={config}></ReactHighcharts>
    </div>
  );
}

export default CustomerInactivityTrend;