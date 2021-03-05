import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import exportCSV from '../helpers/exportCSV';
import Autocomplete from '@material-ui/lab/Autocomplete';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Switch from '@material-ui/core/Switch';

import Loading from './Loading';
import AssignOrders from './AssignOrders'
import {updateOrdersData, updateAdminData, addProducts, addOrderProducts, addOrderBox} from '../actions/admin.actions';
import {getAllOrders, getDeliveryBoysData, getOrderBoxData, getOrderProducts, getOrderedProducts} from '../api/v2/admin';
import {POUCH_MILK_PRODUCTS, BOX_MILK_PRODUCTS} from '../constants/config';

function mapStateToProps(state) {
  let {setAdmin} = state;
  return {
    ...setAdmin
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onUpdateOrdersData: (data) => dispatch(updateOrdersData(data)),
    onUpdateAdminData: (data) => dispatch(updateAdminData(data)),
    onAddProducts: (data) => dispatch(addProducts(data)),
    onAddOrderProducts: (data) => dispatch(addOrderProducts(data)),
    onAddOrderBox: (data) => dispatch(addOrderBox(data))
  };
}

class OrderManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      phone: "",
      selectedArea: [],
      selectedSubarea: [],
      selectedHub: [],
      selectedDriver: "all",
      showWithoutDairy: false,
      hiddenAddress: false,
      selectedRow: []
    }
  }
  update = async () => {

    try {
      this.setState({loading: true});
      let {onUpdateOrdersData, onUpdateAdminData} = this.props;

      let deliveryBoysData = await getDeliveryBoysData().then(res => res.data);
      let deliveryBoys = new Map();

      deliveryBoysData.forEach(person => {
        deliveryBoys.set(person.id, person);
      })
      onUpdateAdminData({deliveryBoys});

      let orders = await getAllOrders().then(res => res.data);
      onUpdateOrdersData(orders);

      let orderProducts = await getOrderProducts().then(res => res.data);
      this.props.onAddOrderProducts(orderProducts)
      
      let products = await getOrderedProducts().then(res => res.data);
      this.props.onAddProducts(products);
      
      let orderBoxData = await getOrderBoxData().then(res => res.data)
      this.props.onAddOrderBox(orderBoxData)

      this.setState({loading: false});

    } catch(err) {
      this.setState({
        error: err.message
      })
    }
  }
  componentDidMount = async () => {
    await this.update();
  }
  hideAddress = () => this.setState({hiddenAddress: true})
  
  exportData = () => {
    
    const { deliveryBoys, orderBoxData, orderProducts } = this.props;
    let rows = [
      ['S.No.', 'Order Id', 'Crate Id', 'Customer Id', 'Name', 'Phone', 'Region', 'Area', 'Locality', 'House', 'Driver', 'Type', 'Qty']
    ];
    let data = this.filterData();

    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      
      let {driverId} = item;
      let driverName = '';
      if(driverId) {
        driverName = deliveryBoys.get(driverId).name;
      }
      const {customerID, orderId, name, phone, region, area, subarea, address} = item;
      const boxData = orderBoxData.get(parseInt(orderId));
      const orderProductsData = orderProducts.get(parseInt(orderId));
      
      const commonFields = [
        index+1,
        orderId,
        boxData?.crateId,
        customerID,
        `"${name}"`,
        phone,
        `"${region}"`,
        `"${area}"`,
        `"${subarea}"`,
        `"${address.replace(/[^0-9a-zA-Z:/ ]/g, "")}"`,
        `"${driverName}"`
      ]

      let pouchMilkQty = 0;
      let gableTopQty = 0;

      if(orderProductsData) {
        // console.log(orderProductsData)
        orderProductsData.forEach(item => {
          const {productId, qty} = item;
          if(POUCH_MILK_PRODUCTS.includes(productId)) {
            pouchMilkQty += qty;
          } else if(BOX_MILK_PRODUCTS.includes(productId)) {
            gableTopQty += qty;
          }
        })

        if(pouchMilkQty) {
          rows.push([
            ...commonFields,
            'Pouch Milk',
            pouchMilkQty
          ])
        }
        
        if(gableTopQty) {
          rows.push([
            ...commonFields,
            'Gable Top',
            gableTopQty
          ])
        } 
      } else {
        alert("Something wrong with data uploaded for order", orderId);
      }

      // Handle LargeBox, MediumBox, Packet
      const {largeBox, mediumBox, packet } = boxData || {};
      if(largeBox) {
        rows.push([
          ...commonFields,
          `Large Box`,
          largeBox
        ]);
      }

      if(mediumBox) {
        rows.push([
          ...commonFields,
          `Large Box`,
          mediumBox
        ]);
      }
      
      if(packet) {
        rows.push([
          ...commonFields,
          `Large Box`,
          packet
        ]);
      }

      if(gableTopQty || pouchMilkQty || largeBox || mediumBox || packet ) {
        console.log("Already Loaded Customer in the sheet");
      } else {
        console.log(`This is not ideal. Maybe the packing is not over yet.\nAn order should have atleast one of gableTopQty || pouchMilkQty || largeBox || mediumBox || packet `)
        // alert(`This is not ideal. Maybe the packing is not over yet.\nAn order should have atleast one of gableTopQty || pouchMilkQty || largeBox || mediumBox || packet `);
        
        rows.push([
          ...commonFields,
          'Complete', 
          ''
        ]);
        // return;
      }  
    }

    exportCSV(rows, `Delivery Sheet - ${new Date().toLocaleDateString()}.csv`);
  }
  filterData() {
    let {selectedSubarea, selectedArea, selectedHub, selectedDriver, phone } = this.state;
    let { orders} = this.props;
    
    let data = [];
    
    if(orders) {
      data = orders.filter((item) => {
        if(selectedHub.length) {
          if(item.region !== selectedHub) return false;
        }
        if(selectedArea.length) {
          if(!selectedArea.includes(item.area)) return false;
        }
        if(selectedSubarea.length) {
          if(!selectedSubarea.includes(item.subarea)) return false;
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
    let {selectedArea, selectedHub, selectedDriver, phone, loading = true } = this.state;
    let {locations, hubs, deliveryBoys, orders, orderBoxData} = this.props;

    let deliveryBoysData = deliveryBoys ? Array.from(deliveryBoys.values()) : [];
    deliveryBoysData = deliveryBoysData.sort((a, b) => (a.name.localeCompare(b.name)));

    let areas = [], subareas = [];
    
    if(locations) locations.forEach((hub, hubName) => {
      hub.forEach((area, areaName) => {
        if( (hubName === selectedHub) || (selectedHub.length === 0) ) {
          areas.push(areaName);
        }
        if( selectedArea.includes(areaName) || selectedArea.length === 0 ) {
          subareas = subareas.concat(area);
        }
      });
    });

    areas = areas.sort((a, b) => a.localeCompare(b));

    if(orders && deliveryBoys && orderBoxData) {
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
                      this.setState({selectedHub, selectedArea: [], selectedSubarea: []})
                    }}
                  >
                    {/* <MenuItem value="all">All</MenuItem> */}
                    {hubs.map(item => (
                      <MenuItem value={item} key={item}>{item}</MenuItem>
                    ))}
                  </Select>
                  </FormControl>
              </div>
              
              <div style={{marginRight: 20, width: 300}}>
                <FormControl style={{width: '100%'}}>
                  <Autocomplete
                    options={areas}
                    multiple={true}
                    renderInput={(params) => <TextField {...params} label="Area" />}
                    onChange={(e, selectedArea) => {
                      this.setState({selectedArea, selectedSubarea: []})
                    }}
                  />
                </FormControl>
              </div>

              <div style={{marginRight: 20, width: 400}}>
                <FormControl style={{width: '100%'}}>
                  <Autocomplete
                    options={subareas}
                    multiple={true}
                    renderInput={(params) => <TextField {...params} label="Locality" />}
                    onChange={(e, selectedSubarea) => {
                      this.setState({selectedSubarea})
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
                  color="default"
                  variant="outlined"
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  Remove Filters
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
  mapStateToProps,
  mapDispatchToProps
)(OrderManagement);