import React from 'react';
import moment from 'moment-timezone';
import { Typography } from '@material-ui/core';

function OrderDelivery(props) {
  const {orderDetails = {}} = props;
  const {orderId, delivery_date, proof_img, delivery_type, rider_name} = orderDetails;
  if(!delivery_type || delivery_type === 'order_cancelled') {
    return (
      <div>
        <Typography variant="h6">
          We are sorry :(
        </Typography>
        <Typography variant="body2">
          We could not deliver your order. Please call us if you think this is a problem.
        </Typography>
      </div>
    );
  }
  return (
    <div>
      <Typography variant="body1">
        Your order #{orderId} was delivered <br />
        at {moment(delivery_date).utc().format('DD-MM-YYYY hh:mm A')} by {rider_name}.
        {/* Delivery Image */}
      </Typography>
    </div>
  );
}

export default OrderDelivery;