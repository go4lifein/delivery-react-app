import React, { Component, useMemo, useCallback, useState } from 'react';
import { connect } from 'react-redux';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { Button, Divider, TextField } from '@material-ui/core';

import Loading from './Loading';
import OrderDataTable from './OrderDataTable';
import {assignDrivers, getAllOrders} from '../api/admin';
import DeliveryInfo from "./DeliveryInfo";
import {updateOrdersData} from '../actions/admin.actions';

function mapStateToProps(state) {
  let {setAdmin} = state;
  return {
    ...setAdmin
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onUpdateOrdersData: (data) => dispatch(updateOrdersData(data)),
  };
}

class OrderManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      phone: "",
      selectedArea: 'all',
      selectedSubarea: 'all',
      selectedHub: 'all',
      selectedDriver: 'all',
      showWithoutDairy: false,
      hiddenAddress: false,
      selectedRow: []
    }
  }
  hideAddress = () => this.setState({hiddenAddress: true})
  
  render() {
    let loading = true;
    let {selectedArea, selectedHub, selectedSubarea, selectedDriver, showWithoutDairy, phone } = this.state;
    let {customers, locations, areas, subareas, hubs, deliveryBoys} = this.props;
    let deliveryBoysData = deliveryBoys ? Array.from(deliveryBoys.values()) : [];

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
    
    let data = [];
    if(customers) {
      loading = false
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
        if(selectedDriver !== 'all') {
          if(item.delivery_person_id !== selectedDriver) return false;
        }
        if(showWithoutDairy) {
          if(item.hasNoDairy) return true;
          return false;
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
          loading?
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

              <div style={{marginRight: 20}}>
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
              
              <div style={{marginRight: 20}}>
                <FormControl>
                  <InputLabel id="area-filter">Area</InputLabel>
                  <Select
                    labelId="area-filter"
                    style={{width: 180}}
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

              
              <div style={{marginRight: 20}}>
                <FormControl>
                  <InputLabel id="subarea-filter">Subareas</InputLabel>
                  <Select
                    labelId="subarea-filter"
                    style={{width: 180}}
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

              <div style={{marginRight: 20}}>
                <FormControl>
                  <InputLabel id="driver-filter">Driver</InputLabel>
                  <Select
                    labelId="driver-filter"
                    style={{width: 200}}
                    onChange={(e, b) => {
                      let selectedDriver = e.target.value;
                      this.setState({selectedDriver});
                    }}
                  >
                    <MenuItem value="all">All</MenuItem>
                    {deliveryBoysData.map(item => (
                      <MenuItem value={item.id} key={`driver-${item.id}`}>{item.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              
              <div style={{marginRight: 20}}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={showWithoutDairy}
                      onChange={(e, showWithoutDairy) => this.setState({showWithoutDairy})}
                      color="primary"
                    />
                  }
                  label="Show Customers Without Dairy"
                />
              </div>

              <div style={{marginRight: 20}}>
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
            
            <AssignOrders 
              data={data}
              deliveryBoys={deliveryBoys}
            />
          </div>
        }

      </div>
    );
  }
}


const AssignOrders = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  (props) => {
  const {data, deliveryBoys, onUpdateOrdersData} = props;

  let deliveryBoysData = Array.from(deliveryBoys.values());
  let [selectedRows, setSelectedRows] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(false);

  const onSelectCustomer = useCallback((selectedCustomer) => {
    setSelectedCustomer(selectedCustomer);
  }, []);
  
  const changeSelection = useCallback(({ allSelected, selectedCount, selectedRows }) => {
    setSelectedRows(selectedRows)
  }, []);

  const updateDriver = (e) => {
    let order_ids = selectedRows.map(item => item.order_id);
    let driver = e.target.value;
    const data = {
      order_ids, driver
    }
    assignDrivers(data)
    .then(res => {
      getAllOrders()
      .then(res => {
        let orders = res.data;
        onUpdateOrdersData(orders);
      });
      setSelectedRows([]);
    });
  }

  return (
    <div>
      <Divider />
      <div className="flex right middle">
        <div className="p-10">
          {
            data.length 
          } Rows Filtered
        </div>
        <div className="p-10">
          {
            selectedRows.length 
          } Rows Selected
        </div>
        <div className="p-10">
          <div>
            <FormControl variant="outlined">
              <InputLabel id="driver-filter">Select Driver</InputLabel>
              <Select
                labelId="driver-filter"
                style={{width: 200}}
                disabled={selectedRows.length < 1}
                onChange={updateDriver}
              >
                <MenuItem value="">None</MenuItem>
                {deliveryBoysData.map(item => (
                  <MenuItem value={item.id} key={`driver-${item.id}`}>{item.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <DeliveryInfo 
        customer={selectedCustomer}
        setSelectedCustomer={setSelectedCustomer}
      />
      <OrderDataTable
        data={data}
        onSelectionChange={changeSelection}
        onRowSelect={onSelectCustomer}
        deliveryBoys={deliveryBoys}
      />
    </div>
  )
})

export default connect(
  mapStateToProps
)(OrderManagement);