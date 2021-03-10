import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import moment from 'moment-timezone';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

function mapStateToProps(state) {
  let {setAdmin} = state;
  return {
    ...setAdmin
  };
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


class OrderDeliveryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props
    }
  }
  Review = () => {
    
    let {customer, deliveryBoys} = this.props;
    console.log(customer);
    const {
      driver_id, delivery_date, delivery_type, proof_img, complete_delivery, 
      // order_cancel_reason, 
      small_boxes, large_boxes, gable_tops, milk_packets} = customer;

    let driver = deliveryBoys.get(driver_id);

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
    console.log(moment(delivery_date).tz("UTC"), moment(delivery_date).utc().format('hh:mm'))
    return (
      <div className="pv-10">
        
        {
        customer.driver_id ?
        <Card variant="outlined">
          <Grid container>
            <Grid item md={12} lg={6}>
              <div className="p-10">
                <Typography variant="body1">Delivered By</Typography>
                <Typography variant="h6">
                  {driver?.name} on {moment(delivery_date).utc().format('DD-MM-YYYY')} {moment(delivery_date).utc().format('HH:mm')}
                </Typography>
              </div>
              <Divider />
              {/* <div className="p-10">
                <Typography variant="body1">Delivered On</Typography>
                <Typography variant="h6">
                  {moment(delivery_date).format('DD-MMM-YYYY')}
                </Typography>
              </div> */}
              <Divider />
              <div className="p-10">
              <Typography variant="body1">Complete Order Delivered? - क्या पूरा आर्डर डिलीवर किया?</Typography>
                <Typography variant="h6">
                  {mapCompleteDelivery(complete_delivery)}
                </Typography>
              </div>
              <Divider />
              <div className="p-10">
                  <Typography variant="body1">Delivery Type - डिलीवरी कहाँ करी</Typography>
                  <Typography variant="h6">
                    {mapDeliveryType(delivery_type)}
                  </Typography>
              </div>
              <Divider />
              <div className="p-10">
              <Typography variant="body1">Small Boxes - कितने डब्बे डिलीवर करे</Typography>
                <Typography variant="h6">{small_boxes}</Typography>
              </div>
              <Divider />
              <div className="p-10">
              <Typography variant="body1">Large Boxes - कितने डब्बे डिलीवर करे</Typography>
                <Typography variant="h6">{large_boxes}</Typography>
              </div>
              <Divider />
              <div className="p-10">
              <Typography variant="body1">Gable Top - कितने दूध के डब्बे डिलीवर करे</Typography>
                <Typography variant="h6">{gable_tops}</Typography>
              </div>
              <Divider />
              <div className="p-10">
              <Typography variant="body1">Milk Packets - कितने दूध के पैकेट डिलीवर करे</Typography>
                <Typography variant="h6">{milk_packets}</Typography>
              </div>
            </Grid>
            
            <Grid item md={12} lg={6}>
              
              {/* <Divider orientation="vertical" /> */}
              <div className="p-10">
                <Typography variant="body1">Delivery Photo</Typography>
                {
                  proof_img ?
                  <div>
                    <img alt="order" src={proof_img} height={500} /> 
                  </div> :
                  <Typography variant="h6"><span style={{color: 'red'}}>No Picture taken</span></Typography>
                }
              </div>
            </Grid>
          </Grid>
        </Card> :
        
          <Typography variant="h3" style={{color: 'red'}} >
            Not Delivered yet
          </Typography>
        }
      </div>
    )
  }
  render() {
    
    let {customer} = this.props;
    
    return (
      <div >
        {customer && <Dialog 
          fullScreen 
          open={true}
          TransitionComponent={Transition}
        >
          <AppBar
            position="fixed"
            color="default"
          >
            <Toolbar>
              <IconButton 
                edge="start" 
                color="inherit" 
                onClick={() => {
                  this.props.setSelectedCustomer(false);
                }} 
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" >
                {customer.name}
              </Typography>
            </Toolbar>
          </AppBar>
          <div style={{margin: '60px 10px 20px 10px', padding: '30px 10px'}}>
            <Typography variant="h4" >
              Delivery Information
            </Typography>
            <Divider />
            <this.Review />
          </div>
        </Dialog>}
      </div>
    );
  }
}

export default connect(
  mapStateToProps
)(OrderDeliveryForm);
