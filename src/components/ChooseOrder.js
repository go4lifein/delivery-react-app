import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { Button, TextField, Grid } from '@material-ui/core';

import Loading from '../components/Loading';
import {getMyOrders} from '../api/v2/driver';
import {updateOrders} from '../actions/driver.actions';
import DriverOrderTable from './DriverOrderTable';

function mapStateToProps(state) {
  let {setDriver} = state;
  return {
    ...setDriver
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onUpdateOrdersData: (data) => dispatch(updateOrders(data))
  };
}

class ChooseOrder extends Component {
  state = {
    phone: "",
    selectedArea: [],
    selectedSubarea: [],
    selectedHub: "",
    showDelivered: false
  }
  componentDidMount() {
    let {onUpdateOrdersData, driver} = this.props;
    getMyOrders(driver.id)
    .then(res => {
      onUpdateOrdersData(res.data);
    })
  }  
  filterData() {
    let {selectedSubarea, selectedArea, selectedHub, phone } = this.state;
    let { orders } = this.props;
    
    let data = [];
    
    if(orders) {
      data = orders.filter((item) => {
        if(selectedHub) {
          // console.log(selectedHub, item.region)
          if(item.region !== selectedHub) return false;
        }
        if(selectedArea.length) {
          if(!selectedArea.includes(item.area)) return false;
        }
        if(selectedSubarea.length) {
          if(!selectedSubarea.includes(item.subarea)) return false;
        }
        if(phone) {
          if(item.phone.indexOf(phone) !== -1) return true;
          if(item.name.toLowerCase().indexOf(phone.toLowerCase()) !== -1) return true;
          if(item.orderId.toString().indexOf(phone.toLowerCase()) !== -1) return true;
          return false;
        }
        return true;
      })
    }
    return data;
  }
  render() {
    let loading = true, data = [];
    let {selectedArea, selectedHub, selectedSubarea, phone, showDelivered } = this.state;
    let {orders, locations, hubs} = this.props;
    
    let areas = [], subareas = [];
    
    if(locations) locations.forEach((hub, hubName) => {
      hub.forEach((area, areaName) => {
        if( selectedHub === hubName ) {
          areas.push(areaName);
        }
        if( selectedArea.includes(areaName) || selectedArea.length === 0) {
          subareas = subareas.concat(area);
        }
      });
    });

    areas = areas.sort((a, b) => a.localeCompare(b));
    subareas = subareas.sort((a, b) => a.localeCompare(b));

    if(orders) {
      loading = false;
      data = this.filterData();
      data = data.filter((item) => {
        if(showDelivered) {
          if(item.deliveryId) return true;
          return false;
        } else {
          if(item.deliveryId) return false;
          return true;
        }
      })
    }

    data = data.sort((a, b) => a.location_id - b.location_id);

    return (
      <div>
        {
          loading ? 
          <Loading /> :
          <div>
            <div
              className="flex middle"
              style={{padding: 10}}
            >

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    value={phone}
                    label="Phone or Name"
                    onChange={(e) => this.setState({phone: e.target.value})}
                  />
                </Grid>

              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="hub-filter">Hub</InputLabel>
                  <Select
                    fullWidth
                    labelId="hub-filter"
                    value={selectedHub}
                    onChange={(e) => {
                      let selectedHub = e.target.value;
                      this.setState({selectedHub, selectedArea: [], selectedSubarea: []})
                    }}
                  >
                    {/* <MenuItem value="all">All</MenuItem> */}
                    {hubs.map(item => (
                      <MenuItem value={item} key={item}>{item}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
              
            </div>

            <div
              className="flex middle"
              style={{padding: 10}}
            >
              
              <Grid container spacing={2}>
                <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="area-filter">Area</InputLabel>
                  <Select
                    labelId="area-filter"
                    fullWidth
                    value={selectedArea}
                    onChange={(e) => {
                      let selectedArea = e.target.value;
                      this.setState({selectedArea, selectedSubarea: []})
                    }}
                  >
                    {/* <MenuItem value="all">All</MenuItem> */}
                    {areas.map(item => (
                      <MenuItem value={item} key={item}>{item}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="subarea-filter">Subareas</InputLabel>
                  <Select
                    labelId="subarea-filter"
                    fullWidth
                    value={selectedSubarea}
                    onChange={(e, b) => {
                      let selectedSubarea = e.target.value;
                      this.setState({selectedSubarea});
                    }}
                  >
                    {/* <MenuItem value="all">All</MenuItem> */}
                    {subareas.map(item => (
                      <MenuItem value={item} key={item}>{item}</MenuItem>
                    ))}
                  </Select>
                  </FormControl>
              </Grid>
              
            </Grid>
            </div>
            <div
              className="flex space-bw"
              style={{padding: 10}}
            >
              <div>
                <FormControlLabel
                  control={
                    <Switch
                      checked={showDelivered}
                      onChange={(e, showDelivered) => this.setState({showDelivered})}
                      color="primary"
                    />
                  }
                  label="Delivered"
                />
              </div>
              <div >
                <Button
                  color="primary"
                  onClick={() => {
                    this.setState({
                      phone: "",
                      selectedArea: 'all',
                      selectedSubarea: 'all',
                      selectedHub: 'all',
                      selectedDriver: 'all',
                      showWithoutDairy: false
                    })
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            </div>
            <DriverOrderTable 
              data={data}
            />
          </div>
        }
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseOrder);