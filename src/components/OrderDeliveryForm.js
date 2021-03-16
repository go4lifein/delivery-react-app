import React from 'react';
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
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import LeftRightSwitch from './LeftRightSwitch';
import PlusOne from '@material-ui/icons/Add';
import RemoveCircle from '@material-ui/icons/Remove';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import WebCam from "./WebCam";
import {Grid } from '@material-ui/core';
import {max} from '../helpers/math';
import Review from './OrderDeliveryReview';

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
      crates: 0
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
    
    const {history, match, orders} = this.props;
    const {params} = match;
    let order_id = parseInt(params.orderId);
    if(!orders) {
      window.location = '/';
    }
    let order = orders.find((item) => {
      return Number(item.orderId) === order_id
    });
    // console.log(order)

    if(!order) {
      return <Typography variant="h4">No such order</Typography>
    }
    let {
      name,
      // address, area, phone, orderId, region, subarea, region_id, customerID, driverId, location_id, orderDate 
    } = order;

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
              {name}
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
              order={order}
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
