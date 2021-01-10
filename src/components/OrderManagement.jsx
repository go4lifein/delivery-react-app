import React, { Component, useCallback, useState } from 'react';
import { connect } from 'react-redux';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import DownloadIcon from '@material-ui/icons/CloudDownload';
import exportCSV from '../helpers/exportCSV';

import Autocomplete from '@material-ui/lab/Autocomplete';

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
    let {customers, deliveryBoys } = this.props;
    let data = Array.from(customers.values());

    let rows = [
      ['order_id', 'Crate', 'Name', 'Phone', 'Hub', 'Region', 'Locality', 'House', 'Order Type', 'Gable Top', 'Milk Packets', 'Paneer', 'Driver', 'Delivered By'],
    ];
    data.forEach(item => {
      const {order_id, crate_id, name, phone, address, onlyDairy, hasNoDairy, products, delivery_person_id, delivery } = item;
      const {hub, area, subarea, house_number} = address;
      const {driver_id, deliver_date} = delivery;
      let order_type;
      
      if(onlyDairy) order_type = 'Dairy'
      else if(hasNoDairy) order_type = 'Grocery'
      else order_type = 'Dairy + Grocery';

      let gable_top = 0, milk_packets = 0, paneer = 0, driverName = '', deliveredBy = '';
      if('Dairy' in products) {
        let dairyProducts = products['Dairy'];
        dairyProducts.forEach(item => {
          if(item.product_id === 811) gable_top += item.quantity;
          if(item.product_id === 1) milk_packets += item.quantity;
          if(item.product_id === 225) paneer += item.total;
        });
      }

      if(delivery_person_id) {
        let driver = deliveryBoys.get(delivery_person_id);
        if(driver) driverName = driver.name;
      }

      if(driver_id && deliver_date) {
        let driver = deliveryBoys.get(driver_id);
        if(driver) deliveredBy = driver.name;
      }

      let row = [
        order_id,
        crate_id,
        name, 
        phone,
        hub,
        area,
        subarea,
        `"${house_number}"`,
        order_type,
        gable_top,
        milk_packets,
        paneer,
        driverName,
        deliveredBy
      ];
      rows.push(row);
    });
    exportCSV(rows, `Delivery Sheet - ${new Date().toLocaleDateString()}.csv`);
  }
  render() {
    let loading = true;
    let {selectedArea, selectedHub, selectedSubarea, selectedDriver, orderType, phone, showDelivered } = this.state;
    let {customers, locations, hubs, deliveryBoys} = this.props;
    let deliveryBoysData = deliveryBoys ? Array.from(deliveryBoys.values()) : [];
    deliveryBoysData = deliveryBoysData.sort((a, b) => (a.name.localeCompare(b.name)));

    /* 
      locations = {
        "Gurgaon": {
          "Sector 69": [
            "Tulip White"
          ]
        },
        "South Delhi": {

        }
      }
    */
    // console.log(locations);
    let areas = [], subareas = [];
    
    if(locations) locations.forEach((hub, hubName) => {
      hub.forEach((area, areaName) => {
        // if valid, insert into areas
        if( (hubName === selectedHub) || (selectedHub === 'all') ) {
          areas.push(areaName);
        }
        
        if( selectedArea.includes(areaName) || selectedArea.length === 0 ) {
          subareas.concat(area);
        }
      });
    });
    areas = areas.sort((a, b) => a.localeCompare(b));

    // if(selectedHub !== 'all') {
    //   let filteredAreas = locations.get(selectedHub);
    //   areas = Array.from(filteredAreas.keys());

    //   areas = areas.sort((a, b) => a.localeCompare(b));
      
    //   let subareasCollection =  Array.from(filteredAreas.values());
    //   // selectedArea !== 'all' ? [filteredAreas.get(selectedArea)] : Array.from(filteredAreas.values());
    //   if(selectedArea && selectedArea.length) {
    //     selectedArea.forEach(area => {
    //       subareasCollection.concat(filteredAreas.get(area));
    //     })
    //   }
    //   subareas = [];
    //   subareasCollection.forEach(areaSubareas => {
    //     areaSubareas.forEach(subarea => subareas.push(subarea));
    //   });
    //   subareas = subareas.sort((a, b) => a.localeCompare(b));
    // }

    // if(selectedArea && selectedArea.length) {
      
    //   let filteredAreas = new Map();
    //   Array.from(locations.keys()).forEach(hub => {
    //     if(locations.get(hub).has(selectedArea)) {
    //       filteredAreas = locations.get(hub);
    //     }
    //   })

    //   let subareasCollection = [filteredAreas.get(selectedArea)]
    //   subareas = [];
    //   subareasCollection.forEach(areaSubareas => {
    //     areaSubareas.forEach(subarea => subareas.push(subarea));
    //   });
    //   subareas = subareas.sort((a, b) => a.localeCompare(b));
    // }
    
    let data = [];
    if(customers) {
      loading = false
      data = Array.from(customers.values());

      /* 
      Clear all Filters
          phone: "",
          selectedArea: [],
          selectedSubarea: 'all',
          selectedHub: 'all',
          selectedDriver: 'all',
          showWithoutDairy: false,
          showDelivered: false,
          orderType: 'all'
       */
      data = data.filter((item) => {
        if(selectedHub !== 'all') {
          if(item.address.hub !== selectedHub) return false;
        }
        if(selectedArea.length) {
          if(!selectedArea.includes(item.address.area)) return false;
        }
        // if(selectedSubarea !== 'all') {
        //   if(item.address.subarea !== selectedSubarea) return false;
        // }
        if(selectedDriver !== 'all') {
          if(selectedDriver === 'none') {
            if(item.delivery_person_id !== null) return false;
          } else if(item.delivery_person_id !== selectedDriver) return false;
        }
        if(showDelivered) {
          if(item.delivery.deliver_date) return true;
          return false;
        }
        if(orderType) {
          console.log(orderType)
          switch (orderType) {
            case 'all':
              return true;
            case 'dairy':
              return item.onlyDairy;
            case 'grocery':
              return item.hasNoDairy;
            case 'both':
              return item.hasNoDairy === false && item.onlyDairy === false;
            default:
              return true;
          }
        }
        if(phone) {
          if(item.phone.indexOf(phone) !== -1) return true;
          if(item.name.toLowerCase().indexOf(phone.toLowerCase()) !== -1) return true;
          if(item.order_id.toString().indexOf(phone.toLowerCase()) !== -1) return true;
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
              <div style={{marginRight: 20, width: 220}}>
                <TextField
                  value={phone}
                  fullWidth
                  label="Phone or Name or Order Id"
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
              
              <div style={{marginRight: 20, width: 250}}>
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

              
              {/* <div style={{marginRight: 20, width: 180}}>
                <FormControl style={{width: '100%'}}>
                  <Autocomplete
                    labelId="area-filter"
                    options={subareas}
                    // getOptionLabel={partner => partner.name}
                    renderInput={(params) => <TextField {...params} label="Sub-Areas" />}
                    onChange={(e, selectedSubarea) => {
                      this.setState({ selectedSubarea: selectedSubarea || 'all'})
                    }}
                  />
                  </FormControl>
              </div> */}

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
                <FormControlLabel
                  control={
                    <Switch
                      checked={showDelivered}
                      onChange={(e, showDelivered) => this.setState({showDelivered})}
                      color="primary"
                    />
                  }
                  label="Only Delivered"
                />
              </div>


              <div style={{marginRight: 20}}>
                <FormControl>
                  <InputLabel id="order-type-filter">Order Type</InputLabel>
                  <Select
                    labelId="order-type-filter"
                    style={{width: 200}}
                    onChange={(e) => {
                      this.setState({orderType: e.target.value});
                    }}
                  >
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="dairy">Dairy</MenuItem>
                    <MenuItem value="grocery">Grocery</MenuItem>
                    <MenuItem value="both">Dairy + Grocery</MenuItem>
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


const AssignOrders = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  (props) => {
  const {data, deliveryBoys, onUpdateOrdersData} = props;

  let deliveryBoysData = Array.from(deliveryBoys.values());
  deliveryBoysData = deliveryBoysData.sort((a, b) => (a.name.localeCompare(b.name)));
  
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
    <div id="assign-orders">
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
        <div className="p-10">
          <Button 
            startIcon={<DownloadIcon />}
            color="secondary"
            variant="outlined"
            onClick={props.exportData}
            // disabled={true}
          >
            Download Excel
          </Button>
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