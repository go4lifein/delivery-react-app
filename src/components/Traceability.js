import React, { Component, Fragment } from "react";
import logo from '../images/logo.webp';
import { Timeline, Event } from "react-timeline-scribble";
import "../css/trace.scss";

import "../css/style.css";

import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ArrowRight from '@material-ui/icons/ArrowRight';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import {getReport} from '../api/misc';
import moment from 'moment-timezone';
import Loading from './Loading';
import { Button, Typography } from "@material-ui/core";

class Traceability extends Component{
  constructor(props) {
    super(props);
    this.state = {
      report_date: moment().format('YYYY-MM-DD'),
      milk_type: 'a2',
      report: {
        aflatoxin: false,
        antibiotics1: false,
        antibiotics2: false,
        antibiotics3: false,
        bmc_dispatch: "2021-01-21T00:00:00.000Z",
        bmc_receive: "2021-01-21T00:00:00.000Z",
        fat: 4,
        id: 13,
        mbrt: 40,
        milk_type: "a2",
        pdf_url: "https://saleor-go4life-production.s3.ap-south-1.amazonaws.com/milk-report/a2-2021-01-22.pdf",
        ph: 7,
        plant_dispatch: "2021-01-21T00:00:00.000Z",
        plant_receive: "2021-01-21T00:00:00.000Z",
        report_date: "2021-01-22T00:00:00.000Z",
        snf: 9,
        sodium_content: 496,
        whs_dispatch: "2021-01-21T00:00:00.000Z",
        whs_receive: "2021-01-21T00:00:00.000Z",
      }
    }
  }
  update = () => {
    
    let {milk_type, report_date} = this.state;
    this.setState({
      loading: true
    })
    getReport(milk_type, report_date)
    .then(res => {
      this.state({
        report: res.data,
        loading: false
      });
    })
    .catch(err => {
      this.setState({
        error: err.response ? err.response.data : "Some error occured",
        loading: false
      });
    })
  }
  componentDidMount() {
    const {location} = this.props;
    let {search} = location;
    search = new URLSearchParams(search);
    let milk_type = search.get('milk_type') || 'a2';
    let report_date = search.get('report_date') || moment().format('YYYY-MM-YY');

    this.setState({
      milk_type, 
      report_date
    }, () => this.update());

  }
  gotoPreviousDay = () => {
    let {report_date} = this.state;
    this.setState({
      report_date: moment(report_date).subtract(1, 'day')
    }, () => this.update());
  }
  gotoNextDay = () => {
    let {report_date} = this.state;
    this.setState({
      report_date: moment(report_date).add(1, 'day')
    }, () => this.update());
  }
  render() {
    let {loading, report, report_date, milk_type, error} = this.state;
    return (
      <Fragment>
        <div id="trace" className="flex middle">
          <img src={logo} alt="logo" className="logo" width="20%" />
          {/* <h1 className="heading">Trace Your Milk</h1> */}
          <Typography variant="h5">Trace Your Milk</Typography>
        </div>
        <Divider />
        <div className="flex p-10" style={{justifyContent: 'space-around'}}>
          <div>
            <IconButton 
              onClick={this.gotoPreviousDay}
              style={{border: '1px solid rgba(0, 0, 0, 0.23)'}} 
              disabled={moment(report_date) <= moment('2021-01-15').endOf('day')}
            >
              <ArrowLeft />
            </IconButton>
          </div>
          <div className="flex center middle " style={{flexGrow: 0.5, paddingRight: 10, paddingLeft: 10}}>
            <Button variant="outlined" fullWidth style={{height: 50}}>
              {moment(report_date).format('DD MMM YYYY')}
            </Button>
          </div>
          <div>
            <IconButton 
              onClick={this.gotoNextDay}
              style={{border: '1px solid rgba(0, 0, 0, 0.23)'}} 
              disabled={moment(report_date) >= moment().startOf('day')}
            >
              <ArrowRight />
            </IconButton>
          </div>
        </div>
        <Divider />
        {
          loading ?
          <div>
            <Loading />
          </div> :
          <div style={{marginTop: 10}}>
            <Timeline>
              <Event interval={moment(report.bmc_receive).format('DD MMM YYYY hh:mm A')} title={"BMC"} subtitle={"Your milk arrived at the BMC."} />
              <Event interval={moment(report.bmc_dispatch).format('DD MMM YYYY hh:mm A')} title={"BMC"} subtitle={"Your milk left the BMC."} />
              <Event interval={moment(report.plant_receive).format('DD MMM YYYY hh:mm A')} title={"Plant"} subtitle={"Your milk arrived at the Plant."} />
              <Event interval={moment(report.plant_dispatch).format('DD MMM YYYY hh:mm A')} title={"Plant"} subtitle={"Your milk left the Plant."} />
              <Event interval={moment(report.whs_receive).format('DD MMM YYYY hh:mm A')} title={"Warehouse"} subtitle={"Your milk arrived at the warehouse."} />
              <Event interval={moment(report.whs_dispatch).format('DD MMM YYYY hh:mm A')} title={"Warehouse"} subtitle={"Your milk left the warehouse."} />
            </Timeline>
          </div>
        }
        
      </Fragment>
    );
  }
}

export default Traceability;

// http://localhost:3000/#/trace?milk_type=a2&report_date=2021-01-22