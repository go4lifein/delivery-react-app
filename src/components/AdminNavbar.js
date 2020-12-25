import React from 'react';
import { withRouter } from "react-router";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Divider } from '@material-ui/core';
import { connect } from 'react-redux';

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
      return 'Customer Sheet';
  }
}

function MenuAppBar(props) {
  const classes = useStyles();
  const { location} = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            {getTitle(location)}
          </Typography>
          
          <div>
            <Link to="/admin/customer" className="nav-link">
              <Button
                variant="outlined"
                color="primary"
              >
                Customer Sheet
              </Button>
            </Link>
            
            <Link to="/admin/product" className="nav-link">
              <Button
                variant="outlined"
                color="primary"
              >
                Product Sheet
              </Button>
            </Link>

            <Link to="/admin/manageOrders" className="nav-link">
              <Button
                variant="outlined"
                color="primary"
              >
                Manage Orders
              </Button>
            </Link>

            <span className="nav-link">
              <Button
                color="secondary"
                variant="outlined"
                onClick={() => {
                  let {onUpdateAdmin} = props;
                  onUpdateAdmin(null);
                }}
              >
                Logout
              </Button>
            </span>
            
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