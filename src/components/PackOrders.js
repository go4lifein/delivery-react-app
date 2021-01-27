import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import Loading from './Loading';
import { Avatar, Typography } from "@material-ui/core";
import {max} from '../helpers/math';

import LeftRightSwitch from './LeftRightSwitch';
import PackOrderForm from './PackOrderForm';
import {prepareOrder} from '../api/admin';
import {updateOrderCrateData} from '../actions/admin.actions';

function mapStateToProps(state) {
  let {setAdmin} = state;
  return {
    ...setAdmin
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onUpdateOrderCrateData: (data) => dispatch(updateOrderCrateData(data)),
  };
}

function CustomerDetails(props) {
  const {customer} = props;
  if(!customer) {
    return "No Customer Found";
  }
  const {name, phone, address, order_id} = customer;
  return (
    <div>
      <Typography variant="h5">
        {order_id} - {name}
      </Typography>
      <Typography>
        {phone}
      </Typography>
      <Typography>
        {address.house_number}, {address.subarea}, {address.area}, {address.hub}
      </Typography>
    </div>
  )
}

class PackOrders extends Component{
  constructor(props) {
    super(props);
    this.state = {
      crate_id: 1
    }
  }
  gotoPreviousCrate = () => {
    let {crate_id} = this.state;
    if(max(1, crate_id - 1) === crate_id) return;

    this.setState({
      crate_id: max(1, crate_id - 1)
    });
  }
  gotoNextCrate = () => {
    let {crate_id} = this.state;
    this.setState({
      crate_id: crate_id + 1
    });
  }
  onSubmit = (data) => {

    const {crate_id} = this.state;
    const {onUpdateOrderCrateData} = this.state;

    this.setState({
      loading: true
    })
    prepareOrder(data)
    .then(res => {
      this.setState({
        loading: false,
        crate_id: crate_id+1
      });
      onUpdateOrderCrateData(data);
    })
    .catch(err => {
      this.setState({
        loading: false
      })
      alert(err.message);
    })
    
  }
  render() {
    let {loading, crate_id} = this.state;
    const {customers, loadingOrderData} = this.props;

    if(loadingOrderData) {
      return (
        <div style={{padding: 10}}>
          <Loading />
        </div>
      )
    }

    let order;
    if(customers) {
      for(const customer of customers) {
        let data = customer[1]
        if(data.crate_id === crate_id) {
          order = data;
        }
      }
    }

    if(!customers) {
      return (
        <div style={{padding: 10}}>
          <Typography variant="h5">Failed to fetch the data. Refresh the page</Typography>
        </div>
      )
    }
    return (
      <Fragment>
        
        <LeftRightSwitch
          onLeft={this.gotoPreviousCrate}
          onRight={this.gotoNextCrate}
          disabledLeft={crate_id === 1}
          center={
            <Avatar style={{background: '#4646d2'}}>
              {crate_id}
            </Avatar>
          }
        />

        <Divider />
        {
          loading ?
          <div>
            <Loading />
          </div> :
          <div>
            {
              order ? 
                <div>
                  <div style={{padding: 10}}>
                    <CustomerDetails customer={order}/>
                  </div>
                  <Divider />
                  <div style={{padding: 10}}>
                    <PackOrderForm order={order} loading={loading} onSubmit={this.onSubmit} />
                  </div>
                </div>
              : 
              <div>
                <Typography variant="h5">No such crate number found</Typography>
              </div>
            }
          </div>
        }
        
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PackOrders);