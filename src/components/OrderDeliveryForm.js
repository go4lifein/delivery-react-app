import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Divider, TextField } from '@material-ui/core';
import WebCam from "./WebCam";

function mapStateToProps(state) {
  let {setDriver} = state;
  return {
    ...setDriver
  };
}
const tutorialSteps = [
  {
    label: 'Select Delivery Type - डिलीवरी कहाँ करी',
    render: (onChange) => {
      return (
        <FormControl component="fieldset">
          <RadioGroup aria-label="delivery type" name="delivery_type">
            <FormControlLabel value="in_hand" control={<Radio />} label="In Hand Delivery - कस्टमर के हाथ में डिलीवरी की" />
            <FormControlLabel value="doorstep" control={<Radio />} label="Doorstep Delivery - घर के गेट के बहार आर्डर रखा" />
            <FormControlLabel value="society_guard" control={<Radio />} label="Handed over to society guard - सोसाइटी गार्ड के पास आर्डर छोड़ा" />
            <FormControlLabel value="tower_guard" control={<Radio />} label="Handed over to tower guard - टावर गार्ड के पास आर्डर छोड़ा" />
            <FormControlLabel value="order_cancelled" control={<Radio />} label="Order Cancelled - आर्डर कैंसिल" />
          </RadioGroup>
        </FormControl>
      )
    }
  },
  {
    label: 'Take Photo - आर्डर की फोटो लीजिये',
    render: () => {
      return (
        <div className="flex center">
          <WebCam />
        </div>
      )
    }
  },
  {
    label: 'Complete Order Delivered? - क्या आपने पूरा आर्डर डिलीवर किया?',
    render: () => (<div className="pv-10">
      <FormControl component="fieldset">
        <RadioGroup aria-label="complete delivery" name="complete_delivery">
          <FormControlLabel value="yes" control={<Radio />} label="Yes - हाँ, मैंने पूरा आर्डर डिलीवर किया" />
          <FormControlLabel value="no" control={<Radio />} label="No - नहीं,  पूरा आर्डर डिलीवर नहीं हुआ है" />
        </RadioGroup>
      </FormControl>

    </div>)
  },
  {
    label: 'Boxes - कितने डब्बे डिलीवर करे',
    render: () => (<div className="pv-10">
      <TextField 
        fullWidth
        autoFocus
        placeholder="कितने डब्बे डिलीवर करे"
        type="number" 
        variant="outlined"
      />
    </div>)
  },
  {
    label: 'Milk Packets - कितने दूध के पैकेट डिलीवर करे',
    render: () => (<div className="pv-10">
      <TextField 
        fullWidth
        autoFocus
        placeholder="कितने दूध के पैकेट डिलीवर करे"
        type="number"
        variant="outlined"
      />
    </div>)
  },
  {
    label: 'Review - कृपया जांचें',
    render: (data) => (<div className="pv-10">

    </div>)
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
  stepper: {
    background: 'yellow'
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function OrderDeliveryForm(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const {history, match, orders, customers} = props;
  const {params} = match;
  let order_id = parseInt(params.orderId);
  if(!orders) {
    window.location = '/';
  }
  let order = orders.find((item) => item.order_id === order_id);
  let customer = customers.get(order.customer_id);

  if(!customer) {
    console.log(order);
    return 'No Such order found';
  }

  return (
    <div className={classes.root}>
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
          <Typography variant="h6" className={classes.title}>
            {customer.name}
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{marginTop: 60, padding: 10}}>
        <Typography variant="h4" className={classes.title}>
          {tutorialSteps[activeStep].label}
        </Typography>
        <Divider />
        <div>
          {tutorialSteps[activeStep].render()}
        </div>
      </div>
      <MobileStepper
        steps={maxSteps}
        position="bottom"
        variant="progress"
        activeStep={activeStep}
        // className={classes.stepper}
        color="default"
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Previous
          </Button>
        }
      />
      </Dialog>
    </div>
  );
}

export default withRouter(connect(
  mapStateToProps
)(OrderDeliveryForm));
