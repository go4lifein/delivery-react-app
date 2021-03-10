import React from 'react';
import { withRouter } from "react-router";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh'
// import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import { Divider } from '@material-ui/core';
import { connect } from 'react-redux';

import {updateDriver} from '../actions/driver.actions';
import {setCookie} from '../helpers/utils';

function mapStateToProps(state) {
  let {setDriver} = state;
  return {
    ...setDriver
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onUpdateDriver: (driver) => dispatch(updateDriver(driver))
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function getTitle(location) {
  switch (location.pathname) {
    case '/admin/product':
      return 'Product Sheet';
    case '/admin/manageOrders':
      return 'Manage Orders';
    default:
      return 'Choose Order';
  }
}

function MenuAppBar(props) {
  const classes = useStyles();
  const { location} = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="warning">
        <Toolbar>
          <img src={logo} alt="logo" className="logo-nav" />
          <Typography variant="h5" className={classes.title}>
            {getTitle(location)}
          </Typography>
          
          <div className="flex">
            <IconButton 
              onClick={() => {
                window.location.reload();
              }}
            >
              <RefreshIcon />
            </IconButton>
            <Button
              className="nav-link"
              color="secondary"
              onClick={() => {
                let {onUpdateDriver} = props;
                setCookie('x-driver-token', '', 0);
                onUpdateDriver(null);
              }}
            >
              Logout
            </Button>
            
          </div>

        </Toolbar>
      </AppBar>
      <Divider />
    </div>
  );
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuAppBar));