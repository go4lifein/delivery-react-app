import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardContent, CardHeader, TextField } from '@material-ui/core';

import {updateAdmin} from '../actions/admin.actions';

function mapStateToProps(state) {
  let {setAdmin} = state;
  return {
    ...setAdmin
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onUpdateAdmin: (admin) => dispatch(updateAdmin(admin))
  };
}

class LoginAdmin extends Component {
  state = {
    phone: 8377072597,
    password: '121212'
  }
  handleSubmit = () => {
    let {phone, password} = this.state;
    let {onUpdateAdmin} = this.props;
    onUpdateAdmin({phone, password, name: 'Kulwant'})
  }
  render() {
    let {phone, password} = this.state;
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
          <CardHeader title="Admin Login" />
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
              <TextField
                fullWidth
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => this.setState({password: e.target.value})}
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