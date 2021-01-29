import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlusOne from '@material-ui/icons/Add';
import RemoveCircle from '@material-ui/icons/Remove';
import { Box, Button, Grid, TextField, Typography, FormControl, MenuItem, InputLabel, Select, Divider } from '@material-ui/core';
import LeftRightSwitch from './LeftRightSwitch';
import {max} from '../helpers/math';

function mapStateToProps(state) {
  let {setAdmin} = state;
  return {
    ...setAdmin
  };
}

class PackOrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {

    // Will be called when order changes because the key props is used
    
    console.log("Getting new");
    let {order} = this.props;
    let {
      small_boxes,
      large_boxes,
      crates,
      remark,
      delivery
    } = order;
    let {driver_id} = delivery;
    
    console.log("Received value", small_boxes, large_boxes, crates, remark, driver_id);
    
    if(!small_boxes) small_boxes = 0;
    if(!large_boxes) large_boxes = 0;
    if(!crates) crates = 0;
    if(remark === null) remark = "";
    if(!driver_id) driver_id = null;
    
    console.log("Forwarded value", small_boxes, large_boxes, crates, remark, driver_id);

    this.setState({
      small_boxes,
      large_boxes,
      crates,
      remark,
      driver_id
    })

  }

  onSave = (e) => {
    const {
      small_boxes = 0,
      large_boxes = 0,
      crates = 0,
      remark
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
      order,
      deliveryBoys
    } = this.props;
    let deliveryBoysData = Array.from(deliveryBoys.values());

    const {
      loading
    } = this.props;    
    
    if(!order) {
      return "No order data";
    }
    
    const {
      small_boxes = 0,
      large_boxes = 0,
      crates = 0,
      remark = null,
      driver_id
    } = this.state;

    let disabled = true;
    if((small_boxes || large_boxes || crates || remark) && driver_id) {
      disabled = false;
    }

    console.log("Render form", small_boxes, large_boxes, crates, remark, driver_id);

    return (
      <div>
        
        <div className="flex space-bw middle p-10">
          <div>
            <Typography variant="h5">Assigned Rider</Typography>
          </div>
          <div>
            <FormControl variant="outlined" size="small">
              <InputLabel id="driver-filter">Select Driver</InputLabel>
              <Select
                labelId="driver-filter"
                style={{width: 200}}
                value={driver_id}
                onChange={(e) => {
                  this.setState({
                    driver_id: e.target.value
                  })
                }}
              >
                <MenuItem value={null}>None</MenuItem>
                {deliveryBoysData.map(item => (
                  <MenuItem value={item.id} key={`driver-${item.id}`}>{item.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>

        <Divider />
        <div className="p-10">
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
                  name="remark"
                  onChange={this.onChange}
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
      </div>
    );
  }
}

export default connect(
  mapStateToProps
)(PackOrderForm);