import React, { useState } from 'react';
import { withRouter } from "react-router";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CreateIcon from '@material-ui/icons/Create';
import AccountIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/MenuOpen';
import DownloadIcon from '@material-ui/icons/CloudDownload';
import ExitToApp from '@material-ui/icons/ExitToAppOutlined';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import ArchiveIcon from '@material-ui/icons/Archive';
import { connect } from 'react-redux';
import logo from '../images/logo.png';

import {updateAdmin} from '../actions/admin.actions';
import Box from '@material-ui/core/Box';
import {setCookie} from '../helpers/utils';

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
    case '/admin/pack':
      return 'Pack Orders';
    case '/admin/addReport':
      return 'Add Milk Report'
    case '/admin/customer-density':
      return 'Customer Density'
    case '/admin/delivery':
      return 'Delivery Dashboard'
    default:
      return '';
  }
}

function MenuAppBar(props) {
  const classes = useStyles();
  const { location} = props;
  const logOut = () => {
    const {onUpdateAdmin} = props;
    setCookie('x-admin-token', '', 0);
    onUpdateAdmin(null);

  }
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: "#fff"}} color="default">
        <Toolbar style={{padding: 10}}>
          
          <img src={logo} alt="logo" className="logo-nav" />
          <Typography variant="h5" className={classes.title}>
            {getTitle(location)}
          </Typography>
          
          {/* <Box display={{ xs: 'none', md: 'block' }} >
            <HorizontalNav logOut={logOut} />
          </Box> */}
          
          <Box >
            <SideNav logOut={logOut} />
          </Box>
          
        </Toolbar>
      </AppBar>
      <Divider />
    </div>
  );
}

function SideNav({logOut}) {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  }

  return (
    <div className="flex middle">
      <IconButton onClick={toggleMenu} >
        <MenuIcon style={{color: "#000"}} />
      </IconButton>
      <div style={{position: 'fixed', zIndex: 10}}>
        <SwipeableDrawer
          anchor="right"
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
        >
          <List>
            <ListItem button key="Reload" onClick={() => window.location.reload()}>
              <ListItemIcon>
                <RefreshIcon />
              </ListItemIcon>
              <ListItemText primary="Reload" />
            </ListItem>
            <Link to="/admin/customer-density" >
              <ListItem button key="customer-density">
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="Customer Density" />
              </ListItem>
            </Link>
            {/* <Link to="/admin/customer">
              <ListItem button key="Customer Sheet">
                <ListItemIcon>
                  <AccountIcon />
                </ListItemIcon>
                <ListItemText primary="Customer Sheet" />
              </ListItem>
            </Link>
            
            <Link to="/admin/product">
              <ListItem button key="Product Sheet">
                <ListItemIcon>
                  <DownloadIcon />
                </ListItemIcon>
                <ListItemText primary="Product Sheet" />
              </ListItem>
            </Link> */}
            <Link to="/admin/manageOrders" >
              <ListItem button key="Manage Orders">
                <ListItemIcon>
                  <CreateIcon />
                </ListItemIcon>
                <ListItemText primary="Manage Orders" />
              </ListItem>
            </Link>
            <Link to="/admin/delivery" >
              <ListItem button key="Delivery Dashboard">
                <ListItemIcon>
                  <ArchiveIcon />
                </ListItemIcon>
                <ListItemText primary="Delvery Dashboard" />
              </ListItem>
            </Link>
            {/* <Link to="/admin/pack" >
              <ListItem button key="Pack Orders">
                <ListItemIcon>
                  <ArchiveIcon />
                </ListItemIcon>
                <ListItemText primary="Pack Orders" />
              </ListItem>
            </Link> */}
            <Link to="/admin/addReport" >
              <ListItem button key="Add Report">
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="Add Report" />
              </ListItem>
            </Link>
            <ListItem button key="Logout" onClick={logOut}>
              <ListItemIcon>
                <ExitToApp />
              </ListItemIcon>
              <ListItemText primary="Sign out" />
            </ListItem>
          </List>
        </SwipeableDrawer>
      </div>
      
    </div>
  );

}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuAppBar));