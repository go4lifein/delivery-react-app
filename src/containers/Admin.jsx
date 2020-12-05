import { Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import TrackMap from '../components/TrackMap';
// import DemoMap from '../components/DemoMap';
import LoginAdmin from '../components/AdminLogin';

function mapStateToProps(state) {
  let {setAdmin} = state;
  return {
    ...setAdmin
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

class Admin extends Component {
  render() {
    const {admin} = this.props;
    return (
      <div>
        {admin ?
          <Typography variant="h4">{admin.name}</Typography> :
          <LoginAdmin />
        }
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);