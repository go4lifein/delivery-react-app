import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import DownloadIcon from '@material-ui/icons/CloudDownload';

import OrderDataTable from './OrderTable';
import {assignDrivers, getAllOrders} from '../api/v2/admin';
// import DeliveryInfo from "./DeliveryInfo";
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

function AssignOrders(props) {
  const {data, deliveryBoys, onUpdateOrdersData, orderBoxData} = props;

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
    let order_ids = selectedRows.map(item => item.orderId);
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
      <div className="flex space-bw middle p-10">
        <div className="flex right middle">
          
          <FormControl size="small">
            <InputLabel id="driver-filter">Select Driver</InputLabel>
            <Select
              labelId="driver-filter"
              style={{width: 200}}
              disabled={selectedRows.length < 1}
              onChange={updateDriver}
            >
              <MenuItem value="null">None</MenuItem>
              {deliveryBoysData.map(item => (
                <MenuItem value={item.id} key={`driver-${item.id}`}>{item.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className="p-10">
            {
              data.length 
            } Customers Filtered
          </div>
          <div className="p-10">
            {
              selectedRows.length 
            } Customers Selected
          </div>
          <div className="p-10">
            <Button 
              startIcon={<DownloadIcon />}
              color="secondary"
              variant="outlined"
              onClick={props.exportData}
            >
              Download Excel
            </Button>
          </div>
        </div>
      </div>
      <OrderDataTable
        data={data}
        orderBoxData={orderBoxData}
        onSelectionChange={changeSelection}
        onRowSelect={onSelectCustomer}
        deliveryBoys={deliveryBoys}
      />
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AssignOrders);