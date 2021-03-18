import { Divider, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from '../Loading';

import OrderDelivery from './OrderDelivery';
import OrderItems from './OrderItems';
import './styles/order.css';
import {getOrderDetails, getMyOrderItemDetails} from '../../api/misc'

function mapStateToProps(state) {
  return {

  };
}

class OrderTraceability extends Component {
  state = {
    loading: true
  }
  componentDidMount() {
    const {location = {}} = this.props;
    const query = new URLSearchParams(location.search || "");
    const orderId = query.get('orderId');
    if(orderId) {
      this.setState({
        orderId
      }, () => this.fetchData());
    } else {
      this.setState({
        error: "No order has been provided."
      })
    }
  }
  fetchData = async () => {
    this.setState({
      loading: true
    });
    try {
      const {orderId} = this.state;

      await getOrderDetails(orderId)
      .then(res => this.setState({orderDetails: res.data}))

      await getMyOrderItemDetails(orderId)
      .then(res => this.setState({itemDetails: res.data}))


    } catch(err) {
      this.setState({
        error: err.response ? err.response.data : err.message
      });
    }
    
    this.setState({
      loading: false
    });
  }
  render() {
    const {loading, error, orderDetails, itemDetails} = this.state;

    if(loading) {
      return <Loading />
    }

    if(error) {
      return (
        <div className="p-10">
          <Alert  severity="error">{error}</Alert>
        </div>
      )
    }

    return (
      <div>
        <div className="p-10">
          <Typography variant="h4">Hi, {orderDetails.name}</Typography>
        </div>
        <Divider />
        <div className="p-10">
          <OrderDelivery />
        </div>
        <div className="p-10">
          <OrderItems itemDetails={itemDetails} />
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(OrderTraceability);