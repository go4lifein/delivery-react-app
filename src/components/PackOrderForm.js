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
    let {customers, crate_id} = this.props;
    
    let order;
    if(customers) {
      for(const customer of customers) {
        let data = customer[1]
        if(data.crate_id === Number(crate_id)) {
          order = data;
          break;
        }
      }
    }

    let {
      small_boxes,
      large_boxes,
      crates,
      delivery_person_id,
      remark
    } = order;
    
    console.log("Render form", small_boxes, large_boxes, crates, remark, delivery_person_id, order);

    
    if(!small_boxes) small_boxes = 0;
    if(!large_boxes) large_boxes = 0;
    if(!crates) crates = 0;
    if(remark === null) remark = "";
    if(!delivery_person_id) delivery_person_id = null;

    this.setState({
      small_boxes,
      large_boxes,
      crates,
      remark,
      delivery_person_id
    })

  }

  onSave = (e) => {
    const {
      small_boxes = 0,
      large_boxes = 0,
      crates = 0,
      delivery_person_id,
      remark
    } = this.state;

    const {onSubmit, order} = this.props;

    onSubmit({
      small_boxes, large_boxes, crates, remark, delivery_person_id, id: order.order_id
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
      delivery_person_id
    } = this.state;

    let disabled = true;
    if((small_boxes || large_boxes || crates || remark) && delivery_person_id) {
      disabled = false;
    }

    console.log("Render form", small_boxes, large_boxes, crates, remark, delivery_person_id);

    return (
      <div>
        
        <div className="flex space-bw middle p-10">
          <div>
            <Typography variant="h6">Rider</Typography>
          </div>
          <div>
            <FormControl variant="filled" size="small">
              <InputLabel id="driver-filter">Select Rider</InputLabel>
              <Select
                labelId="driver-filter"
                style={{width: 200}}
                value={String(delivery_person_id)}
                onChange={(e) => {
                  this.setState({
                    delivery_person_id: e.target.value
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
                    size="small" 
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