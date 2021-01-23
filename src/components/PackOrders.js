import React, { Component, Fragment } from "react";
import Divider from '@material-ui/core/Divider';
import LeftRightSwitch from './LeftRightSwitch';
import Loading from './Loading';
import { Avatar } from "@material-ui/core";
import {min, max} from '../helpers/math';

class Traceability extends Component{
  constructor(props) {
    super(props);
    this.state = {
      crate_id: 1
    }
  }
  componentDidMount() {

  }
  update = () => {
    this.setState({
      loading: true
    }, () => {
      setTimeout(() => {
        this.setState({
          loading: false
        })
      }, 800);
    })
  }
  gotoPreviousCrate = () => {
    let {crate_id} = this.state;
    if(max(1, crate_id - 1) === crate_id) return;
    this.setState({
      crate_id: max(1, crate_id - 1)
    }, () => this.update());
  }
  gotoNextCrate = () => {
    let {crate_id} = this.state;
    this.setState({
      crate_id: crate_id + 1
    }, () => this.update());
  }
  render() {
    let {loading, error, crate_id} = this.state;
    return (
      <Fragment>
        
        <LeftRightSwitch
          onLeft={this.gotoPreviousCrate}
          onRight={this.gotoNextCrate}
          disabledLeft={crate_id === 1}
          center={
            <Avatar style={{background: 'red'}}>
              {crate_id}
            </Avatar>
          }
        />

        <Divider />
        {
          loading ?
          <div>
            <Loading />
          </div> :
          <div style={{marginTop: 10}}>
            Data goes here
          </div>
        }
        
      </Fragment>
    );
  }
}

export default Traceability;

// http://localhost:3000/#/trace?milk_type=a2&report_date=2021-01-22