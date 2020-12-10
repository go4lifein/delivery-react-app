import { Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Button, Divider, TextField } from '@material-ui/core';

import Loading from '../components/Loading';
import {getMyOrders} from '../api/driver';
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
    selectedArea: 'all',
    selectedSubarea: 'all',
    selectedHub: 'all',
  }
  componentDidMount() {
    let {onUpdateOrdersData, driver} = this.props;
    getMyOrders(driver.id)
    .then(res => {
      onUpdateOrdersData(res.data);
    })
  }
  render() {
    let loading = true, data = [];
    let {selectedArea, selectedHub, selectedSubarea, phone } = this.state;
    let {customers, locations, areas, subareas, hubs} = this.props;

    
    if(selectedHub !== 'all') {
      let filteredAreas = locations.get(selectedHub);
      areas = Array.from(filteredAreas.keys());

      areas = areas.sort((a, b) => a.localeCompare(b));
      
      let subareasCollection = selectedArea !== 'all' ? [filteredAreas.get(selectedArea)] : Array.from(filteredAreas.values());
      subareas = [];
      subareasCollection.forEach(areaSubareas => {
        areaSubareas.forEach(subarea => subareas.push(subarea));
      });
      subareas = subareas.sort((a, b) => a.localeCompare(b));
    }

    if(selectedArea !== 'all') {
      
      let filteredAreas = new Map();
      Array.from(locations.keys()).forEach(hub => {
        if(locations.get(hub).has(selectedArea)) {
          filteredAreas = locations.get(hub);
        }
      })

      let subareasCollection = [filteredAreas.get(selectedArea)]
      subareas = [];
      subareasCollection.forEach(areaSubareas => {
        areaSubareas.forEach(subarea => subareas.push(subarea));
      });
      subareas = subareas.sort((a, b) => a.localeCompare(b));
    }

    if(customers) {
      loading = false;
      data = Array.from(customers.values());
      

      data = data.filter((item) => {
        if(selectedHub !== 'all') {
          if(item.address.hub !== selectedHub) return false;
        }
        if(selectedArea !== 'all') {
          if(item.address.area !== selectedArea) return false;
        }
        if(selectedSubarea !== 'all') {
          if(item.address.subarea !== selectedSubarea) return false;
        }
        if(phone) {
          if(item.phone.indexOf(phone) !== -1) return true;
          return false;
        }
        return true;
      })
    }

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

              <div style={{marginRight: 20}}>
                <TextField
                  value={phone}
                  label="Phone"
                  onChange={(e) => this.setState({phone: e.target.value})}
                />
              </div>

              <div>
                <FormControl>
                  <InputLabel id="hub-filter">Hub</InputLabel>
                  <Select
                    labelId="hub-filter"
                    style={{width: 160}}
                    value={selectedHub}
                    onChange={(e) => {
                      let selectedHub = e.target.value;
                      this.setState({selectedHub, selectedArea: 'all', selectedSubarea: 'all'})
                    }}
                  >
                    <MenuItem value="all">All</MenuItem>
                    {hubs.map(item => (
                      <MenuItem value={item} key={item}>{item}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              
            </div>
            <div
              className="flex middle"
              style={{padding: 10}}
            >
              
              <div style={{marginRight: 20}}>
                <FormControl>
                  <InputLabel id="area-filter">Area</InputLabel>
                  <Select
                    labelId="area-filter"
                    style={{width: 150}}
                    value={selectedArea}
                    onChange={(e) => {
                      let selectedArea = e.target.value;
                      this.setState({selectedArea, selectedSubarea: 'all'})
                    }}
                  >
                    <MenuItem value="all">All</MenuItem>
                    {areas.map(item => (
                      <MenuItem value={item} key={item}>{item}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              
              <div >
                <FormControl>
                  <InputLabel id="subarea-filter">Subareas</InputLabel>
                  <Select
                    labelId="subarea-filter"
                    style={{width: 150}}
                    value={selectedSubarea}
                    onChange={(e, b) => {
                      let selectedSubarea = e.target.value;
                      this.setState({selectedSubarea});
                    }}
                  >
                    <MenuItem value="all">All</MenuItem>
                    {subareas.map(item => (
                      <MenuItem value={item} key={item}>{item}</MenuItem>
                    ))}
                  </Select>
                  </FormControl>
              </div>
              
            </div>
            <div
              className="flex right"
              style={{padding: 10}}
            >
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