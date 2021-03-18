import React from 'react';
import moment from 'moment-timezone';
import { Typography } from '@material-ui/core';

const orderDetails = {
  "name": "karnal ashok",
  "phone": "9911589963",
  "address": "hno-667 sector 21E  gate no-2  near b.j.p office opposite police nest ",
  "location_id": 30,
  "region_id": 5,
  "customerID": "6770",
  "orderId": "147368",
  "orderDate": "2021-03-17T00:00:00.000Z",
  "driverId": 29,
  "id": 2025,
  "order_id": 147368,
  "driver_id": 29,
  "delivery_date": "2021-03-17T17:31:00.353Z",
  "delivery_type": "in_hand",
  "proof_img": "https://saleor-go4life-production.s3.ap-south-1.amazonaws.com/delivery-confirmation-proof/bd415b77f80eaa350208439d89c8cf19.jpg",
  "complete_delivery": "yes",
  "order_cancel_reason": null,
  "milk_packets": 0,
  "small_boxes": 1,
  "large_boxes": 0,
  "remark": null,
  "gable_tops": 0,
  "message": "Your GO4LIFE order was delivered directly to you at 17-Mar-2021 05:31 pm. Open the link to see the delivery picture: https://tx.gl/r/3S2n2/",
  "rider_name": "Rahul"
}

function OrderDelivery(props) {
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
      </Typography>
    </div>
  );
}

export default OrderDelivery;