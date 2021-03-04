import React, { Suspense,  Component, lazy} from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from "react-router-dom";

import Loading from '../components/Loading';
import {getAllOrders, getDeliveryBoysData, getOrderBoxData, getOrderProducts, getOrderedProducts} from '../api/v2/admin';
import {updateOrdersData, updateAdminData, addProducts, addOrderProducts, addOrderBox} from '../actions/admin.actions';
import AdminNavbar from "../components/AdminNavbar";
import LoginAdmin from '../components/AdminLogin';

const CustomerSheet = lazy(() => import(/* webpackChunkName: "CustomerSheet" */ '../components/CustomerSheet'));
const ProductSheet = lazy(() => import(/* webpackChunkName: "ProductSheet" */ '../components/ProductSheet'));
const OrderManagement = lazy(() => import(/* webpackChunkName: "OrderManagement" */ '../components/OrderManagement'));
const PackOrders = lazy(() => import(/* webpackChunkName: "PackOrders" */ '../components/PackOrders'));
const AddReport = lazy(() => import(/* webpackChunkName: "AddReport" */ '../components/AddReport'));
const HeatMap = lazy(() => import(/* webpackChunkName: "HeatMap" */ '../components/HeatMap'));

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

class AdminRouter extends Component {
  componentDidMount() {

    let {onUpdateOrdersData, onUpdateAdminData} = this.props;

    getDeliveryBoysData()
    .then(res => {
      let deliveryBoysData = res.data;
      let deliveryBoys = new Map();

      deliveryBoysData.forEach(person => {
        deliveryBoys.set(person.id, person);
      })
      onUpdateAdminData({deliveryBoys});
    })

    getAllOrders()
    .then(res => {
      let orders = res.data;
      onUpdateOrdersData(orders);
    })

    getOrderProducts()
    .then(res => {
      this.props.onAddOrderProducts(res.data)
    })
    
    getOrderedProducts()
    .then(res => {
      this.props.onAddProducts(res.data)
    })
    
    getOrderBoxData()
    .then(res => {
      this.props.onAddOrderBox(res.data)
    })
  }
  render() {
    const {admin} = this.props;
    return (
      <div>
        
        {admin ?
          <div>
            <AdminNavbar />
              <Suspense fallback={<Loading />}>
                <Switch>
                  <Route 
                    exact
                    path="/admin/product"
                    component={ProductSheet} 
                  />
                  <Route 
                    path="/admin/manageOrders"
                    exact
                    component={OrderManagement} 
                  />
                  <Route 
                    path="/admin/customer"
                    exact
                    component={CustomerSheet} 
                  />
                  <Route 
                    path="/admin/pack"
                    exact
                    component={PackOrders}
                  />
                  <Route 
                    path="/admin/addReport"
                    component={AddReport} 
                  />
                  <Route 
                    path="/admin/customer-density"
                    component={HeatMap}
                  />
                  <Route 
                    path="/admin"
                    component={OrderManagement} 
                  />
                </Switch>
              </Suspense>
          </div>
          :
          <LoginAdmin />
        }
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminRouter);