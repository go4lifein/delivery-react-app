import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import PlusOne from '@material-ui/icons/Add';
import RemoveCircle from '@material-ui/icons/Remove';
import LeftRightSwitch from './LeftRightSwitch';
import {max} from '../helpers/math';

class PackOrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  // static getDerivedStateFromProps() {
  //   return true;
  // }
  
  componentDidMount() {
    
    const {order} = this.props;
    if(order) {
      const {
        small_boxes = 0,
        large_boxes = 0,
        crates = 0,
        remark = null,
        loading = false
      } = order;

      this.setState({
        small_boxes, large_boxes, crates, remark, loading
      });
    }
  }
  
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    const {
      order
    } = this.props;
    if(!order) {
      return "No order data";
    }
    
    const {
      loading
    } = this.props;

    let disabled = false;

    const {
      small_boxes = 0,
      large_boxes = 0,
      crates = 0,
      remark = null,
    } = this.state;

    console.log("Rendering pack order form", small_boxes, large_boxes, crates);
    
    return (
      <div>
        <Grid container >
            <Grid item xs={12}>
              <Box p={1}>
              <Typography variant="h5">Crates</Typography>
              <LeftRightSwitch 
                center={
                  <Typography variant="h3">
                    {crates}
                  </Typography>
                } 
                leftIcon={<RemoveCircle />} 
                rightIcon={<PlusOne />} 
                onRight={() => {
                  this.setState({
                    crates: crates+1
                  })
                }} 
                onLeft={() => {
                  this.setState({
                    crates: max(0, crates-1)
                  })
                }} 
              />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box p={1}>
              <Typography variant="h5">Small Boxes</Typography>
              <LeftRightSwitch 
                center={
                  <Typography variant="h3">
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
              <Box p={1}>
              <Typography variant="h5">Large Boxes</Typography>
              <LeftRightSwitch 
                center={
                  <Typography variant="h3">
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
              
              <Box p={1}>
              <Typography variant="h5">Remark</Typography>
              <TextField
                id="order_remark"
                label="Remark"
                multiline fullWidth
                rows={4}
                defaultValue={remark}
                variant="outlined"
              />
              </Box>
            </Grid>
            <Grid item xs={12}>
              
              <Box p={1}>
              <Button 
                variant="contained"
                color="primary"
                disabled={loading || disabled}
              >
                Submit
              </Button>
              </Box>
            </Grid>
        </Grid>
      </div>
    );
  }
}

export default PackOrderForm;