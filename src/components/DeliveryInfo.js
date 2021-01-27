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
// import moment from 'moment';
import { connect } from 'react-redux';

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
      driver_id, deliver_date, delivery_type, proof_img, complete_delivery, 
      // order_cancel_reason, 
      boxes, milk_packets} = customer.delivery;

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
    return (
      <div className="pv-10">
        
        {
        customer.delivery.deliver_date ?
        <Card variant="outlined">
          <div className="p-10">
            <Typography variant="body">Delivered By</Typography>
            <Typography variant="h6">
              {driver.name}
            </Typography>
          </div>
          <Divider />
          <div className="p-10">
            <Typography variant="body">Delivered On</Typography>
            <Typography variant="h6">
              {new Date(deliver_date).toDateString()}
            </Typography>
          </div>
          <Divider />
          <div className="p-10">
              <Typography variant="body">Delivery Type - डिलीवरी कहाँ करी</Typography>
              <Typography variant="h6">
                {mapDeliveryType(delivery_type)}
              </Typography>
          </div>
          <Divider />
          <div className="p-10">
            <Typography variant="body">Delivery Photo</Typography>
            {
              proof_img ?
              <div>
                <img alt="order" src={proof_img} width={300} /> 
              </div> :
              <Typography variant="h6"><span style={{color: 'red'}}>No Picture taken</span></Typography>
            }
          </div>
          <Divider />
          <div className="p-10">
          <Typography variant="body">Complete Order Delivered? - क्या पूरा आर्डर डिलीवर किया?</Typography>
            <Typography variant="h6">
              {mapCompleteDelivery(complete_delivery)}
            </Typography>
          </div>
          <Divider />
          <div className="p-10">
          <Typography variant="body">Boxes - कितने डब्बे डिलीवर करे</Typography>
            <Typography variant="h6">{boxes}</Typography>
          </div>
          <Divider />
          <div className="p-10">
          <Typography variant="body">Milk Packets - कितने दूध के पैकेट डिलीवर करे</Typography>
            <Typography variant="h6">{milk_packets}</Typography>
          </div>
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
