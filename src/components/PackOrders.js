import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import Loading from './Loading';
import { Avatar, Typography } from "@material-ui/core";
import {max} from '../helpers/math';

import LeftRightSwitch from './LeftRightSwitch';
import PackOrderForm from './PackOrderForm';
import {prepareOrder, getAllOrders} from '../api/admin';
import {updateOrderCrateData, updateOrdersData} from '../actions/admin.actions';


function mapStateToProps(state) {
  let {setAdmin} = state;
  return {
    ...setAdmin
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onUpdateOrderCrateData: (data) => dispatch(updateOrderCrateData(data)),
    onUpdateOrdersData: (data) => dispatch(updateOrdersData(data))
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
    this.state = {}
  }
  componentDidMount() {
    const {location} = this.props;
    let search = new URLSearchParams(location.search);
    const crate_id = Number(search.get('crate_id') || 1);
    this.setState({
      crate_id
    });
  }
  gotoPreviousCrate = () => {
    const {history} = this.props;
    let {crate_id} = this.state;
    if(crate_id === 1) return;
    crate_id = max(1, crate_id - 1);
    this.setState({
      crate_id
    }, () => {
      history.push(`/admin/pack?crate_id=${crate_id}`);
    });
  }
  gotoNextCrate = () => {
    const {history} = this.props;
    let {crate_id} = this.state;
    crate_id = Number(crate_id) + 1;
    this.setState({
      crate_id
    }, () => {
      history.push(`/admin/pack?crate_id=${crate_id}`);
      // window.location.reload();
    });
  }
  onSubmit = (data) => {

    /* 
    data : {
      small_boxes,
      large_boxes,
      crates,
      remark,
      driver_id,
      id
    }
    */
    const {onUpdateOrdersData} = this.props;

    this.setState({
      loading: true
    })
    prepareOrder(data)
    .then(res => {
      getAllOrders()
      .then(res => {
        let orders = res.data;
        onUpdateOrdersData(orders);
        this.setState({
          loading: false,
        });
      });
      
      this.gotoNextCrate();
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

    console.log("Loading", loadingOrderData);

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
        if(data.crate_id === Number(crate_id)) {
          order = data;
          break;
        }
      }
    }

    console.log(order);

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
          // disabledRight={true}
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
                  
                  <div>
                    <PackOrderForm key={String(order.order_id)} order={order} crate_id={crate_id} loading={loading} onSubmit={this.onSubmit} />
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