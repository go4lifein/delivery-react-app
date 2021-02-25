import React, { Suspense,  Component, lazy} from 'react';
import { Switch, Route } from "react-router-dom";

import Loading from '../components/Loading';

class Driver extends Component {
  render() {
    return (
      <div>
        <Loading />
      </div>
    );
  }
}

export default Driver;