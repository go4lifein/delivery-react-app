import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment-timezone';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';

function mapStateToProps(state) {
  let {setAdmin} = state;
  return {
    ...setAdmin
  };
}

function OrderDeliverySummary(props) {
  const {orders, deliveryBoys, open, toggleDriverSummary} = props;

  let deliveryBoysOrders = new Map();

  for (let index = 0; index < orders.length; index++) {
    let item = orders[index];
    
    let {driverId, delivery_date} = item;

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
  console.log(deliveryBoysOrders)

  return (
    <div>
      <Dialog 
        fullScreen
        open={open}
      >
        <AppBar
          position="fixed"
          color="default"
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
                Driver Summary
              </Typography>
            </Toolbar>
        </AppBar>
      </Dialog>
    </div>
  )
};


export default connect(
  mapStateToProps
)(OrderDeliverySummary);