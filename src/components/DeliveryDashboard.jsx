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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import moment from 'moment-timezone';

import Loading from './Loading';
import OrderDataTable from './OrderTableDelivery';
import DeliveryInfo from './DeliveryInfo';

import {updateDeliveryReport, updateAdminData, addProducts, addOrderProducts, addOrderBox} from '../actions/admin.actions';
import {getDeliveryBoysData, getDeliveryReport, getOrderBoxData, getOrderProducts, getOrderedProducts} from '../api/v2/admin';

function mapStateToProps(state) {
  let {setAdmin} = state;
  return {
    ...setAdmin
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onUpdateDeliveryReport: (data) => dispatch(updateDeliveryReport(data)),
    onUpdateAdminData: (data) => dispatch(updateAdminData(data)),
    onAddProducts: (data) => dispatch(addProducts(data)),
    onAddOrderProducts: (data) => dispatch(addOrderProducts(data)),
    onAddOrderBox: (data) => dispatch(addOrderBox(data))
  };
}

class DeliveryDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      phone: "",
      startDate: moment().format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD'),
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

      let {startDate, endDate} = this.state;
      startDate = moment(startDate).format('YYYY-MM-DD');
      endDate = moment(endDate).format('YYYY-MM-DD');

      const {onUpdateDeliveryReport, onUpdateAdminData} = this.props;

      let deliveryBoysData = await getDeliveryBoysData().then(res => res.data);
      let deliveryBoys = new Map();

      deliveryBoysData.forEach(person => {
        deliveryBoys.set(person.id, person);
      })
      onUpdateAdminData({deliveryBoys});
      
      let orderProducts = await getOrderProducts(startDate, endDate).then(res => res.data);
      this.props.onAddOrderProducts(orderProducts)
      
      let products = await getOrderedProducts(startDate, endDate).then(res => res.data);
      this.props.onAddProducts(products);
      
      let orderBoxData = await getOrderBoxData(startDate, endDate).then(res => res.data)
      this.props.onAddOrderBox(orderBoxData)


      let data = await getDeliveryReport(startDate, endDate).then(res => res.data);
      onUpdateDeliveryReport(data);

      this.setState({loading: false});

    } catch(err) {
      console.log(err)
      this.setState({
        error: err.message
      })
    }
  }
  componentDidMount() {
    this.update();
  }
  exportData = () => {
    
    // const { deliveryBoys, orderBoxData, orderProducts } = this.props;
    let rows = [
      ['S.No.', 'Order Id', 'Crate Id', 'Customer Id', 'Name', 'Phone', 'Region', 'Area', 'Locality', 'House', 'Driver', 'Type', 'Qty']
    ];
    exportCSV(rows, `Delivery Sheet - ${new Date().toLocaleDateString()}.csv`);
  }
  filterData() {
    let {selectedSubarea, selectedArea, selectedHub, selectedDriver, phone, onlyDelivered } = this.state;
    let { orders} = this.props;
    
    let data = [];
    
    if(orders) {
      data = orders.filter((item) => {
        if(onlyDelivered) {
          if(item.delivery_date) return true;
          return false;
        }
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
  onDateChange = (e) => {
    
    let value = moment(e.target.value).format('YYYY-MM-DD');
    this.setState({
      [e.target.name]: value
    }, () => this.update());
  }
  onOrderSelect = (row) => {
    this.setState({
      selectedOrder: row
    })
  }
  render() {
    let {selectedArea, selectedHub, selectedDriver, phone, onlyDelivered, startDate, endDate, selectedOrder, loading = true } = this.state;
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

    if(orders) {
      loading = false;
    }

    let data = this.filterData();
    
    if(orders && deliveryBoys && orderBoxData) {
      loading = false;
    }

    return (
      <div>
    
        {/* Dates - Remote Filters */}
        <div 
          className="flex middle"
          style={{padding: 10}}
        >
          <div style={{marginRight: 20, width: 220}}>
            <TextField
              type="date"
              value={startDate}
              fullWidth
              label="Start Date"
              name="startDate"
              onChange={this.onDateChange}
            />
          </div>
          
          <div style={{marginRight: 20, width: 220}}>
            <TextField
              type="date"
              value={endDate}
              fullWidth
              label="End Date"
              name="endDate"
              onChange={this.onDateChange}
            />
          </div>
        </div>

        {
          loading?
          <Loading /> :
          <div>
            {/* Local Filters */}
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
              
              <div style={{marginRight: 20, width: 200}}>
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

              <div style={{marginRight: 20, width: 300}}>
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
              
              <div>
                <FormControlLabel
                  control={
                    <Switch
                      checked={onlyDelivered}
                      onChange={(e) => 
                        this.setState({
                          [e.target.name]: e.target.checked
                        })
                      }
                      name="onlyDelivered"
                      color="primary"
                    />
                  }
                  label="Delivered"
                />
              </div>

              <div style={{marginRight: 20}}>
                <Button
                  color="primary"
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  Remove Filters
                </Button>
              </div>
            </div>
            
            {/* <AssignOrders 
              data={data}
              exportData={this.exportData}
              deliveryBoys={deliveryBoys}
            /> */}
            <DeliveryInfo 
              customer={selectedOrder}
              setSelectedCustomer={this.onOrderSelect}
            />
            <OrderDataTable
              data={data}
              onRowSelect={this.onOrderSelect}
              orderBoxData={orderBoxData}
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
)(DeliveryDashboard);