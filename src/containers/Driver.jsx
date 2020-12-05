import { Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginDriver from '../components/DriverLogin';

function mapStateToProps(state) {
  let {setDriver} = state;
  return {
    ...setDriver
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

class Driver extends Component {
  
  render() {
    const {driver} = this.props;
    return (
      <div>
        {driver ?
          <Typography variant="h3">{driver.name}</Typography> :
          <LoginDriver />
        }
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Driver);