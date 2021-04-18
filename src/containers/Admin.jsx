import React, { Suspense,  Component, lazy} from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from "react-router-dom";

import Loading from '../components/Loading';
import AdminNavbar from "../components/AdminNavbar";
import LoginAdmin from '../components/AdminLogin';

const CustomerSheet = lazy(() => import(/* webpackChunkName: "CustomerSheet" */ '../components/CustomerSheet'));
const ProductSheet = lazy(() => import(/* webpackChunkName: "ProductSheet" */ '../components/ProductSheet'));
const OrderManagement = lazy(() => import(/* webpackChunkName: "OrderManagement" */ '../components/OrderManagement'));
const DeliveryDashboard = lazy(() => import(/* webpackChunkName: "DeliveryDashboard" */ '../components/DeliveryDashboard'));
const PackOrders = lazy(() => import(/* webpackChunkName: "PackOrders" */ '../components/PackOrders'));
const AddReport = lazy(() => import(/* webpackChunkName: "AddReport" */ '../components/AddReport'));
const HeatMap = lazy(() => import(/* webpackChunkName: "HeatMap" */ '../components/HeatMap'));
const DriverDashboard = lazy(() => import (/*webpackChunkName : "DriverDashboard"*/ '../components/DriverDashboard'));
const FarmerDashboard = lazy(() => import (/*webpackChunkName : "FarmerDashboard"*/ '../components/FarmerDashboard'));
const Traceability = lazy(() => import (/*webpackChunkName : "Traceability"*/ '../components/TraceabilityDashboard'));
const CustomerInactivityTrend = lazy(() => import (/*webpackChunkName : "CustomerInactivityTrend"*/ '../components/Analytics/CustomerInactivityTrend'));
const DeliveryInstructions = lazy(() => import (/*webpackChunkName : "DeliveryInstructions"*/ '../components/Customer/DeliveryInstructions'));

function mapStateToProps(state) {
  let {setAdmin} = state;
  return {
    ...setAdmin
  };
}

class AdminRouter extends Component {
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
                    path="/admin/delivery/instructions"
                    component={DeliveryInstructions}
                  />
                  <Route 
                    path="/admin/delivery"
                    component={DeliveryDashboard}
                  />
                  <Route
                    path ="/admin/DriverDashboard"
                    component = {DriverDashboard}
                  />
                  <Route 
                    path = "/admin/FarmerDashboard"
                    component = {FarmerDashboard}
                  />
                  
                  <Route 
                    path = "/admin/traceability"
                    component = {Traceability}
                  />
                  <Route 
                    path = "/admin/trends/inactive"
                    component = {CustomerInactivityTrend}
                  />
                  
                  {/* Fallback */}
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
  mapStateToProps
)(AdminRouter);