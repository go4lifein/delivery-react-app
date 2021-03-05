import React, { Suspense,  Component, lazy} from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from "react-router-dom";

import Loading from '../components/Loading';
import DriverNavbar from "../components/DriverNavbar";
import DriverLogin from '../components/DriverLogin';
import {getCookie} from '../helpers/utils'

const ChooseOrder = lazy(() => import('../components/ChooseOrder'));
const OrderDeliveryForm = lazy(() => import('../components/OrderDeliveryForm'));

function mapStateToProps(state) {
  let {setDriver} = state;
  return {
    ...setDriver
  };
}

class Driver extends Component {
  componentDidMount() {
    // if()
  }
  render() {
    const {driver} = this.props;
    return (
      <div>
        {driver ?
          <div>
            <DriverNavbar />
            <Suspense fallback={<Loading />}>
              <Switch>
                <Route 
                  path="/:orderId/deliver"
                  component={OrderDeliveryForm}
                />
                <Route 
                  path="/"
                  component={ChooseOrder} 
                />
              </Switch>
            </Suspense>
          </div> :
          <DriverLogin />
        }
      </div>
    );
  }
}

export default connect(
  mapStateToProps
)(Driver);