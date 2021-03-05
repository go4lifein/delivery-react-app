import React, { Suspense,  Component, lazy} from 'react';
import { Switch, Route } from "react-router-dom";

import Loading from '../components/Loading';

const DeckGLExample = lazy(() => import(/* webpackChunkName: "DeckGLExample" */ '../components/DeckGLExample'));
const ThreeJS = lazy(() => import(/* webpackChunkName: "ThreeJS" */ '../components/ThreeJS'));

class Driver extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route 
              path="/visual/gurgaon-3d"
              exact
              component={DeckGLExample} 
            />
            <Route 
              path="/visual"
              exact
              component={ThreeJS}
            />
            
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default Driver;