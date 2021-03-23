import React from 'react';
import ReactHighcharts from 'react-highcharts';

function ReactHighchartsMemo(props) {
  const {records, onSetIndex} = props;
  
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
      type: 'column',
      data: records.map(item => item.newInactive),
      yAxis: 1,
      events: {
        click: function(e) {
          onSetIndex(e.point.index);
        }
      }
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

export default React.memo(ReactHighchartsMemo);