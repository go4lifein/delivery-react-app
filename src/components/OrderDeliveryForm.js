import React, { useState } from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import LeftRightSwitch from './LeftRightSwitch';
import PlusOne from '@material-ui/icons/Add';
import RemoveCircle from '@material-ui/icons/Remove';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import WebCam from "./WebCam";
import {submitOrderDelivery} from '../api/driver';
import { CircularProgress, Grid } from '@material-ui/core';
import {max} from '../helpers/math';

function mapStateToProps(state) {
  let {setDriver} = state;
  return {
    ...setDriver
  };
}

const tutorialSteps = [
  {
    label: 'Select Delivery Type - डिलीवरी कहाँ करी'
  },
  {
    label: 'Take Photo - आर्डर की फोटो लीजिये',
  },
  {
    label: 'Complete Order Delivered? - क्या आपने पूरा आर्डर डिलीवर किया?',
  },
  {
    label: 'Boxes, Milk - कितने डब्बे डिलीवर करे',
  },
  {
    label: 'Review - कृपया जांचें'
  },
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function dataURItoBlob(dataURI) {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(',')[1]);

  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
  }

  //Old Code
  //write the ArrayBuffer to a blob, and you're done
  //var bb = new BlobBuilder();
  //bb.append(ab);
  //return bb.getBlob(mimeString);

  //New Code
  return new Blob([ab], {type: mimeString});
}


function Review ({state, props}) {
  const {delivery_type, delivery_img, complete_delivery, milk_packets, small_boxes, large_boxes, gable_tops, boxes} = state;

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

class OrderDeliveryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      delivery_type: null,
      delivery_img: null,
      complete_delivery: null,
      milk_packets: 0,
      small_boxes: 0,
      large_boxes: 0,
      gable_tops: 0,
      crates: 0,
    }
  }
  handleNext = () => {
    this.setState((state) => ({
      activeStep: state.activeStep + 1
    }));
  };
  handleBack = () => {
    this.setState((state) => ({
      activeStep: state.activeStep - 1
    }));
  };
  DeliveryType = () => {
    const onChange = (event) => {
      this.setState({
        delivery_type: event.target.value
      });
    }
    return (
      <div>
        <Typography variant="h4" ></Typography>
        <FormControl component="fieldset">
          <RadioGroup aria-label="delivery type" name="delivery_type" value={this.state.delivery_type} onChange={onChange}>
            <FormControlLabel value="in_hand" control={<Radio />} label="In Hand Delivery - कस्टमर के हाथ में डिलीवरी की" />
            <FormControlLabel value="doorstep" control={<Radio />} label="Doorstep Delivery - घर के गेट के बहार आर्डर रखा" />
            <FormControlLabel value="society_guard" control={<Radio />} label="Handed over to society guard - सोसाइटी गार्ड के पास आर्डर छोड़ा" />
            <FormControlLabel value="tower_guard" control={<Radio />} label="Handed over to tower guard - टावर गार्ड के पास आर्डर छोड़ा" />
            <FormControlLabel value="order_cancelled" control={<Radio />} label="Order Cancelled - आर्डर कैंसिल" />
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
  DeliveryPhoto = () => {
    const onCapture = (image) => {
      // console.log(image)
      this.setState({
        delivery_img: image
      });
    }
    return (
      <div>
        <Typography variant="h4" ></Typography>
        <div className="flex center" >
          <WebCam 
            onCapture={onCapture} 
            image={this.state.delivery_img}
          />
        </div>
      </div>
    )
  }
  CompleteDelivery = () => {
    
    const onChange = (event) => {
      this.setState({
        complete_delivery: event.target.value
      })
    }
    return (
      <div className="pv-10">
        <FormControl component="fieldset">
          <RadioGroup aria-label="complete delivery" name="complete_delivery" value={this.state.complete_delivery} onChange={onChange}>
            <FormControlLabel value="yes" control={<Radio />} label="Yes - हाँ, मैंने पूरा आर्डर डिलीवर किया" />
            <FormControlLabel value="no" control={<Radio />} label="No - नहीं,  पूरा आर्डर डिलीवर नहीं हुआ है" />
          </RadioGroup>
        </FormControl>
      </div>
    )
  }
  BoxNumbers = () => {
    const {small_boxes, large_boxes, gable_tops, milk_packets} = this.state;

    return (
      <div className="pv-10">
        
        <Grid container>

          <Grid item xs={12}>
            <Box className="flex middle space-bw">
            <Typography variant="h6">Small Boxes</Typography>
            <LeftRightSwitch
              size="small" 
              style={{flexGrow: 0.2}}
              center={
                <Typography variant="h6">
                  {small_boxes}
                </Typography>
              } 
              leftIcon={<RemoveCircle />} 
              rightIcon={<PlusOne />} 
              onRight={() => {
                this.setState({
                  small_boxes: small_boxes+1
                })
              }} 
              onLeft={() => {
                this.setState({
                  small_boxes: max(0, small_boxes-1)
                })
              }} 
            />
            </Box>
          </Grid>
          
          <Grid item xs={12}>
            <Box className="flex middle space-bw">
            <Typography variant="h6">Large Boxes</Typography>
            <LeftRightSwitch
              size="small" 
              style={{flexGrow: 0.2}}
              center={
                <Typography variant="h6">
                  {large_boxes}
                </Typography>
              } 
              leftIcon={<RemoveCircle />} 
              rightIcon={<PlusOne />} 
              onRight={() => {
                this.setState({
                  large_boxes: large_boxes+1
                })
              }} 
              onLeft={() => {
                this.setState({
                  large_boxes: max(0, large_boxes-1)
                })
              }} 
            />
            </Box>
          </Grid>
          
          
          <Grid item xs={12}>
            <Box className="flex middle space-bw">
            <Typography variant="h6">Gable Top</Typography>
            <LeftRightSwitch
              size="small" 
              style={{flexGrow: 0.2}}
              center={
                <Typography variant="h6">
                  {gable_tops}
                </Typography>
              } 
              leftIcon={<RemoveCircle />} 
              rightIcon={<PlusOne />} 
              onRight={() => {
                this.setState({
                  gable_tops: gable_tops+1
                })
              }} 
              onLeft={() => {
                this.setState({
                  gable_tops: max(0, gable_tops-1)
                })
              }} 
            />
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box className="flex middle space-bw">
            <Typography variant="h6">Milk Packets</Typography>
            <LeftRightSwitch
              size="small" 
              style={{flexGrow: 0.2}}
              center={
                <Typography variant="h6">
                  {milk_packets}
                </Typography>
              } 
              leftIcon={<RemoveCircle />} 
              rightIcon={<PlusOne />} 
              onRight={() => {
                this.setState({
                  milk_packets: milk_packets+1
                })
              }} 
              onLeft={() => {
                this.setState({
                  milk_packets: max(0, milk_packets-1)
                })
              }} 
            />
            </Box>
          </Grid>
        
        </Grid>

        {/* <LeftRightSwitch
          center={}
          leftIcon={<RemoveCircle />} 
          rightIcon={<PlusOne />} 
        /> */}
        {/* <Slider
          valueLabelDisplay="auto"
          step={1}
          marks
          min={0}
          max={12}
          value={this.state.boxes}
          onChangeCommitted={onChange}
        /> */}
      </div>
    )
  }
  render() {
    
    const {history, match, orders, customers} = this.props;
    const {params} = match;
    let order_id = parseInt(params.orderId);
    if(!orders) {
      window.location = '/';
    }
    let order = orders.find((item) => item.order_id === order_id);
    let customer = customers.get(order.customer_id);

    if(!customer) {
      console.log(order);
      window.location = '/';
    }

    const {activeStep} = this.state;
    const maxSteps = tutorialSteps.length;
    // console.log(this.state);
    return (
      <div >
        <Dialog 
          fullScreen 
          open
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
                history.goBack();
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
        <div style={{margin: '60px 10px 20px 10px', padding: '10px 10px'}}>
          <Typography variant="h4" >
            {tutorialSteps[activeStep].label}
          </Typography>
          <Divider />
          {
            activeStep === 0 &&
            <this.DeliveryType />
          }
          
          {
            activeStep === 1 &&
            <this.DeliveryPhoto />
          }
          {
            activeStep === 2 &&
            <this.CompleteDelivery />
          }
          {
            activeStep === 3 &&
            <this.BoxNumbers />
          }
          {
            activeStep === 4 &&
            <Review 
              state={this.state}
              props={this.props}
            />
          }
        </div>
        <MobileStepper
          style={{
            borderTop: '1px solid grey'
          }}
          steps={maxSteps}
          position="bottom"
          variant="progress"
          activeStep={activeStep}
          color="default"
          nextButton={
            <Button size="small" color="primary" variant="outlined" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button size="small" color="primary" variant="outlined" onClick={this.handleBack} disabled={activeStep === 0}>
              <KeyboardArrowLeft />
              Previous
            </Button>
          }
        />
        </Dialog>
      </div>
    );
  }
}

export default withRouter(connect(
  mapStateToProps
)(OrderDeliveryForm));
