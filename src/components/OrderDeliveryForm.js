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
import { AppBar, Toolbar } from '@material-ui/core';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  let {setDriver} = state;
  return {
    ...setDriver
  };
}
const tutorialSteps = [
  {
    label: 'Select Delivery Type',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Take Photo',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Complete Order Delivered?',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'Boxes',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Milk Packets',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Review',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
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
