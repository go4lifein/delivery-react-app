import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { Button, Card, CardContent, CardHeader, Divider, Link as A, TextField } from '@material-ui/core';

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
    phone: '',
  }
  handleSubmit = () => {
    let {phone } = this.state;
    let {onUpdateDriver} = this.props;
    onUpdateDriver({phone: 7056206263, name: 'Vishal', id: 1})
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
        <Card style={{minWidth: 300}}>
          <CardHeader title="Login" />
          <Divider />
          <CardContent>
            <div style={{marginBottom: 10}}>
              <TextField
                autoFocus
                variant="outlined"
                fullWidth
                label="Phone Number"
                type="number"
                value={phone}
                onChange={(e) => this.setState({phone: e.target.value})}
              />
            </div>
            <div>
              <Button 
                variant="contained" 
                fullWidth
                color="primary"
                onClick={this.handleSubmit}
              >
                Login
              </Button>
            </div>
          </CardContent>
          <Divider />
          <CardContent>
          <div>
            <Link to="/admin">
              Login as Admin
            </Link>
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