import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import PlusOne from '@material-ui/icons/Add';
import RemoveCircle from '@material-ui/icons/Remove';
import LeftRightSwitch from './LeftRightSwitch';
import {max} from '../helpers/math';

class PackOrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      small_boxes: 0,
      large_boxes: 0,
      crate: 0,
      remark: ""
    }
  }

  onSave = (e) => {
    const {
      small_boxes = 0,
      large_boxes = 0,
      crates = 0,
      remark = null
    } = this.state;

    const {onSubmit, order} = this.props;

    onSubmit({
      small_boxes, large_boxes, crates, remark, id: order.order_id
    });
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

    const {
      loading
    } = this.props;
    
    let disabled = false;

    if(!order) {
      return "No order data";
    }

    const {
      small_boxes = 0,
      large_boxes = 0,
      crates = 0,
      remark = null,
    } = this.state;
    
    return (
      <div>
        <Grid container >
            <Grid item xs={12}>
              <Box className="flex middle space-bw">
                <Typography variant="h6">No of Crates</Typography>
                <LeftRightSwitch 
                  style={{flexGrow: 0.2}}
                  center={
                    <Typography variant="h6">
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
              <Box className="flex middle space-bw">
              <Typography variant="h6">Small Boxes</Typography>
              <LeftRightSwitch 
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
              
              <Box className="flex middle space-bw mv-10">
              <TextField
                id="order_remark"
                label="Remark"
                multiline fullWidth
                rows={2}
                defaultValue={remark}
                variant="outlined"
              />
              </Box>
            </Grid>
            
            <Grid item xs={12}>
              
              <Box className="flex middle space-bw">
              <Button 
                variant="contained"
                color="primary"
                disabled={loading || disabled}
                onClick={this.onSave}
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