import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardContent, CardHeader, TextField } from '@material-ui/core';

import {updateDriver} from '../actions/driver.actions';

function mapStateToProps(state) {
  let {setDriver} = state;
  return {
    ...setDriver
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onUpdateDriver: (admin) => dispatch(updateDriver(admin))
  };
}

class LoginAdmin extends Component {
  state = {
    phone: 8377072597,
  }
  handleSubmit = () => {
    let {phone } = this.state;
    let {onUpdateDriver} = this.props;
    onUpdateDriver({phone, name: 'Rajiv'})
  }
  render() {
    let {phone} = this.state;
    return (
      <div 
        style={{
          display: "flex", 
          justifyContent: 'center', 
          alignItems: 'center',
          background: 'grey',
          height: '100vh'
        }}
      >
        <Card style={{minWidth: 400}}>
          <CardHeader title="Login" />
          <CardContent>
            <div style={{marginBottom: 10}}>
              <TextField
                fullWidth
                placeholder="Phone"
                value={phone}
                onChange={(e) => this.setState({phone: e.target.value})}
              />
            </div>
            <div style={{marginBottom: 10}}>
              <Button 
                variant="contained" 
                fullWidth
                onClick={this.handleSubmit}
              >
                Login
              </Button>
            </div>
            
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginAdmin);