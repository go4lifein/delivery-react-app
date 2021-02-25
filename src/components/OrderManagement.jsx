import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import exportCSV from '../helpers/exportCSV';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Loading from './Loading';
import AssignOrders from './AssignOrders'

function mapStateToProps(state) {
  let {setAdmin} = state;
  return {
    ...setAdmin
  };
}

class OrderManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      phone: "",
      selectedArea: [],
      selectedSubarea: 'all',
      selectedHub: 'all',
      selectedDriver: 'all',
      showWithoutDairy: false,
      hiddenAddress: false,
      selectedRow: []
    }
  }
  hideAddress = () => this.setState({hiddenAddress: true})
  
  exportData = () => {
    
    const { deliveryBoys } = this.props;
    let rows = [
      ['Order Id', 'Name', 'Phone', 'Hub', 'Area', 'Locality', 'House', 'Driver']
    ];
    let data = this.filterData();
    data.forEach(item => {
      
      let {driverId} = item;
      let driverName = '';
      if(driverId) {
        driverName = deliveryBoys.get(driverId).name;
      }
      const {orderId, name, phone, region, area, subarea, address} = item;
      
      rows.push([
        orderId,
        `"${name}"`,
        phone,
        `"${region}"`,
        `"${area}"`,
        `"${subarea}"`,
        `"${address.replace(/[^0-9a-zA-Z:/ ]/g, "")}"`,
        `"${driverName}"`
      ])
    })
    exportCSV(rows, `Delivery Sheet - ${new Date().toLocaleDateString()}.csv`);
  }
  filterData() {
    let {selectedArea, selectedHub, selectedDriver, phone } = this.state;
    let { orders} = this.props;
    
    let data = [];
    if(orders) {
      data = orders.filter((item) => {
        if(selectedHub !== 'all') {
          if(item.address.hub !== selectedHub) return false;
        }
        if(selectedArea.length) {
          if(!selectedArea.includes(item.area)) return false;
        }
        if(selectedDriver !== 'all') {
          if(selectedDriver === 'none') {
            if(item.driverId !== null) return false;
          } else if(item.driverId !== selectedDriver) return false;
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
    let loading = true;
    let {selectedArea, selectedHub, selectedDriver, phone } = this.state;
    let {locations, hubs, deliveryBoys, orders} = this.props;

    let deliveryBoysData = deliveryBoys ? Array.from(deliveryBoys.values()) : [];
    deliveryBoysData = deliveryBoysData.sort((a, b) => (a.name.localeCompare(b.name)));

    let areas = [], subareas = [];
    
    if(locations) locations.forEach((hub, hubName) => {
      hub.forEach((area, areaName) => {
        if( (hubName === selectedHub) || (selectedHub === 'all') ) {
          areas.push(areaName);
        }
        if( selectedArea.includes(areaName) || selectedArea.length === 0 ) {
          subareas.concat(area);
        }
      });
    });

    areas = areas.sort((a, b) => a.localeCompare(b));

    if(orders) {
      loading = false;
    }

    let data = this.filterData();

    return (
      <div>
        {
          loading?
          <Loading /> :
          <div>
            <div 
              className="flex middle"
              style={{padding: 10}}
            >
              <div style={{marginRight: 20, width: 220}}>
                <TextField
                  value={phone}
                  fullWidth
                  label="Phone, Name, Crate, Order Id"
                  onChange={(e) => this.setState({phone: e.target.value})}
                />
              </div>

              <div style={{marginRight: 20, width: 120}}>
                <FormControl>
                  <InputLabel id="hub-filter">Hub</InputLabel>
                  <Select
                    labelId="hub-filter"
                    style={{width: 100}}
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
              
              <div style={{marginRight: 20, width: 450}}>
                <FormControl style={{width: '100%'}}>
                  <Autocomplete
                    labelId="area-filter"
                    options={areas}
                    // getOptionLabel={partner => partner.name}
                    multiple={true}
                    renderInput={(params) => <TextField {...params} label="Area" />}
                    onChange={(e, selectedArea) => {
                      console.log(selectedArea);
                      this.setState({selectedArea, selectedSubarea: 'all'})
                    }}
                  />
                </FormControl>
              </div>

              <div style={{marginRight: 20}}>
                <FormControl>
                  <InputLabel id="driver-filter">Assigned Driver</InputLabel>
                  <Select
                    labelId="driver-filter"
                    style={{width: 200}}
                    value={selectedDriver || 'all'}
                    onChange={(e, b) => {
                      let selectedDriver = e.target.value;
                      this.setState({selectedDriver});
                    }}
                  >
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="none">None</MenuItem>
                    {deliveryBoysData.map(item => (
                      <MenuItem value={item.id} key={`driver-${item.id}`}>{item.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>

              <div style={{marginRight: 20}}>
                <Button
                  color="primary"
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            </div>
            
            <AssignOrders 
              data={data}
              exportData={this.exportData}
              deliveryBoys={deliveryBoys}
            />
          </div>
        }

      </div>
    );
  }
}

export default connect(
  mapStateToProps
)(OrderManagement);