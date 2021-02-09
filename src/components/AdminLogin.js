import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { Button, Card, CardContent, CardHeader, Divider, TextField } from '@material-ui/core';

import {login} from '../api/admin';
import {updateAdmin} from '../actions/admin.actions';
import {initRequestAuthHeader, setCookie} from '../helpers/utils';

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
    username: '',
    password: ''
  }
  handleSubmit = () => {
    let {username, password} = this.state;
    let {onUpdateAdmin} = this.props;
    login({username, password})
    .then(res => {
      let token = res.data['token'];
      initRequestAuthHeader(token);
      setCookie("x-admin-token", token, 5);
      onUpdateAdmin(res.data.username);
      document.location.reload();
    })
    .catch(err => alert("Please check username and password"));
  }
  render() {
    let {username, password} = this.state;
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
                label="Username"
                value={username}
                onChange={(e) => this.setState({username: e.target.value})}
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