import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import {submitOrderDelivery} from '../api/v2/driver';
import {dataURItoBlob} from '../helpers/utils';

function Review ({state, props, order}) {
  const {delivery_type, delivery_img, complete_delivery, milk_packets, small_boxes, large_boxes, gable_tops} = state;

  const {history, match, driver} = props;
  const {params} = match;
  let order_id = parseInt(params.orderId);

  const [loading, setLoading] = useState(false);

  let disabled = true;
  if(delivery_type && delivery_img && complete_delivery && (milk_packets || small_boxes || large_boxes || gable_tops)) {
    disabled = false;
  }

  const onSubmit = () => {
    setLoading(true);
    const {phone} = order;
    const photoBlob = dataURItoBlob(delivery_img);
    const formData = new FormData();
    formData.append("delivery_img", photoBlob);
    formData.append("order_id", order_id);
    formData.append("driver_id", driver.id);
    formData.append("delivery_type", delivery_type);
    formData.append("complete_delivery", complete_delivery);
    formData.append("small_boxes", small_boxes);
    formData.append("large_boxes", large_boxes);
    formData.append("gable_tops", gable_tops);
    formData.append("milk_packets", milk_packets);
    formData.append("phone", phone);
    submitOrderDelivery(formData)
    .then(res => {
      history.push('/');
      setLoading(false);
    })
    .catch(err => {
      setLoading(false);
      alert(err.message);
    });
  }

  function mapDeliveryType(delivery_type) {
    switch (delivery_type) {
      
      case "in_hand":
        return "In Hand Delivery - कस्टमर के हाथ में डिलीवरी की"
      case "doorstep":
        return "Doorstep Delivery - घर के गेट के बहार आर्डर रखा"
      case "society_guard":
        return "Handed over to society guard - सोसाइटी गार्ड के पास आर्डर छोड़ा"
      case "tower_guard":
        return "Handed over to tower guard - टावर गार्ड के पास आर्डर छोड़ा"
      case "order_cancelled":
        return "Order Cancelled - आर्डर कैंसिल"
      default:
        return <span style={{color: 'red'}}>Select Delivery Type - डिलीवरी कहाँ करी</span>;
    }
  }
  function mapCompleteDelivery(complete_delivery) {
    switch (complete_delivery) {
      
      case "yes":
        return "Yes - हाँ, मैंने पूरा आर्डर डिलीवर किया"
      case "no":
        return "No - नहीं,  पूरा आर्डर डिलीवर नहीं हुआ है"
      default:
        return <span style={{color: 'red'}}>Complete Order Delivered? - क्या आपने पूरा आर्डर डिलीवर किया?</span>;
    }
  }
  return (
    <div className="pv-10">
      <Card variant="outlined">
        
        <div className="p-10">
            <Typography variant="body">Select Delivery Type - डिलीवरी कहाँ करी</Typography>
            <Typography variant="h6">
              {mapDeliveryType(delivery_type)}
            </Typography>
        </div>
        <Divider />
        <div className="p-10">
          <Typography variant="body">Take Photo - आर्डर की फोटो लीजिये</Typography>
          {
            delivery_img ?
            <div>
              <img alt="order" src={delivery_img} width={300} /> 
            </div> :
            <Typography variant="h6"><span style={{color: 'red'}}>Please take picture</span></Typography>
          }
        </div>
        <Divider />
        <div className="p-10">
        <Typography variant="body">Complete Order Delivered? - क्या आपने पूरा आर्डर डिलीवर किया?</Typography>
          <Typography variant="h6">
            {mapCompleteDelivery(complete_delivery)}
          </Typography>
        </div>
        <Divider />
        <div className="p-10">
        <Typography variant="body">Small Boxes - कितने छोटे डब्बे डिलीवर करे</Typography>
          <Typography variant="h6">{small_boxes}</Typography>
        </div>
        <Divider />
        <div className="p-10">
        <Typography variant="body">Large Boxes - कितने बड़े डब्बे डिलीवर करे</Typography>
          <Typography variant="h6">{large_boxes}</Typography>
        </div>
        <Divider />
        <div className="p-10">
        <Typography variant="body">Gable Top - कितने दूध के डब्बे डिलीवर करे</Typography>
          <Typography variant="h6">{gable_tops}</Typography>
        </div>
        <Divider />
        <div className="p-10">
        <Typography variant="body">Milk Packets - कितने दूध के पैकेट डिलीवर करे</Typography>
          <Typography variant="h6">{milk_packets}</Typography>
        </div>
      </Card>
      <div className="pv-10">
        <Button
          color="primary"
          variant="contained"
          onClick={onSubmit}
          disabled={loading || disabled}
          startIcon={loading ? <CircularProgress size={12} /> : null}
        >
          Submit
        </Button>
      </div>
    </div>
  )
}

export default Review;