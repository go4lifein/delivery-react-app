import React, { Suspense,  Component, lazy} from 'react';
import { Switch, Route } from "react-router-dom";

import Loading from '../components/Loading';

const OrderTraceability = lazy(() => import(/* webpackChunkName: "OrderTraceability" */ '../components/OrderTraceability'));
const ThreeJS = lazy(() => import(/* webpackChunkName: "ThreeJS" */ '../components/ThreeJS'));

class TraceOrder extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route 
              path="/customer/order"
              exact
              component={OrderTraceability}
            />
            <Route 
              path="/"
              component={<div>404</div>}
            />
            
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default TraceOrder;