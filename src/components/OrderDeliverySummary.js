import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment-timezone';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import Toolbar from '@material-ui/core/Toolbar';
// import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import '../css/delivery-summary.css';
import { DialogContent, Divider } from '@material-ui/core';
import DataTable from 'react-data-table-component';

function mapStateToProps(state) {
  let {setAdmin} = state;
  return {
    ...setAdmin
  };
}

const columns = [
  {
    name: 'Driver',
    sortable: true,
    selector: 'driverName'
  },
  {
    name: 'Total',
    sortable: true,
    selector: 'total'
  },
  {
    name: 'Delivered',
    sortable: true,
    selector: 'delivered'
  },
  {
    name: 'Remaining',
    sortable: true,
    selector: 'remaining'
  }

]

function OrderDeliverySummary(props) {
  const {orders, deliveryBoys, open, toggleDriverSummary} = props;

  let deliveryBoysOrders = new Map();

  let totalDelivered = 0;

  for (let index = 0; index < orders.length; index++) {
    let item = orders[index];
    
    let {driverId, delivery_date} = item;

    if(delivery_date) {
      totalDelivered += 1;
    }

    if(deliveryBoysOrders.get(driverId)) {
      let data = deliveryBoysOrders.get(driverId)

      data["total"] += 1;
      if(delivery_date) {
        data["delivered"] += 1;
      }

      deliveryBoysOrders.set(driverId, data);
    } else {
      deliveryBoysOrders.set(driverId, {
        "total": 1,
        "delivered": Number(Boolean(delivery_date)),
        "driverName": deliveryBoys.get(driverId)?.name
      });
    }
  }
  
  deliveryBoysOrders = Array.from(deliveryBoysOrders.entries());
  let data = deliveryBoysOrders.map(([driverId, summary], index) => {
    const {driverName, total, delivered} = summary;
    return {
      driverName,
      total,
      delivered,
      remaining: total - delivered
    }
  })

  return (
    <div>
      <Dialog 
        fullScreen
        open={open}
        onClose={toggleDriverSummary}
      >
        <Toolbar>
          <IconButton 
            edge="start" 
            color="inherit" 
            onClick={toggleDriverSummary} 
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" >
            Delivery Summary
          </Typography>
        </Toolbar>
        <Divider />        
        <DialogContent>
          <div>
            <div className="flex" style={{justifyContent: 'space-around'}}>
              <div className="p-10">
                Total Orders: <Typography variant="h4">{orders.length}</Typography>
              </div>
              <div className="p-10">
                Total Delivered: <Typography variant="h4">{totalDelivered}</Typography>
              </div>
              <div className="p-10">
                Remaining Orders: <Typography variant="h4">{orders.length - totalDelivered}</Typography>
              </div>
            </div>
            <DataTable
              data={data}
              noHeader={true}
              dense={true}
              columns={columns}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
};


export default connect(
  mapStateToProps
)(OrderDeliverySummary);