import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import PlusOne from '@material-ui/icons/Add';
import RemoveCircle from '@material-ui/icons/Remove';
import LeftRightSwitch from './LeftRightSwitch';
import {max} from '../helpers/math';

function PackOrderForm(props) {
  const {loading, order} = props;

  const [crates, setCrates] = useState(order.crates || 0);
  const [small_boxes, setSmallBoxes] = useState(order.small_boxes || 0);
  const [large_boxes, setLargeBoxes] = useState(order.large_boxes || 0);
  const [remark, setRemark] = useState(order.remark || "");


  console.log("Renderss");
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
                setCrates(crates + 1);
              }} 
              onLeft={() => {
                setCrates(max(0, crates - 1));
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
                setSmallBoxes(small_boxes + 1);
              }} 
              onLeft={() => {
                setSmallBoxes(max(0, small_boxes-1))
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
                setLargeBoxes(large_boxes + 1);
              }} 
              onLeft={() => {
                setLargeBoxes(max(0, large_boxes - 1))
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
              onChange={(e) => {
                setRemark(e.target.value);
              }}
            />
            </Box>
          </Grid>
          <Grid item xs={12}>
            
            <Box p={1}>
            <Button 
              variant="contained"
              color="primary"
              disabled={loading}
            >
              Submit
            </Button>
            </Box>
          </Grid>
      </Grid>
    </div>
  );
}

export default PackOrderForm;