import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { Button, Card, CardContent, CardHeader, Divider, TextField } from '@material-ui/core';

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
        <Card style={{minWidth: 300}}>
          <CardHeader title="Admin Login" />
          <Divider />
          <CardContent>
            <div style={{marginBottom: 10}}>
              <TextField
                autoFocus
                fullWidth
                variant="outlined"
                label="Phone"
                value={phone}
                onChange={(e) => this.setState({phone: e.target.value})}
              />
            </div>
            <div style={{marginBottom: 10}}>
              <TextField
                fullWidth
                variant="outlined"
                type="password"
                label="Password"
                value={password}
                onChange={(e) => this.setState({password: e.target.value})}
              />
            </div>
            <div >
              <Button 
                variant="contained" 
                color="primary"
                fullWidth
                onClick={this.handleSubmit}
              >
                Login
              </Button>
            </div>
            
          </CardContent>
          <Divider />
          <CardContent>
          <div>
            <Link to="/">
              Login as Driver
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