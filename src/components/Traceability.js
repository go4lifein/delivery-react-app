import React, { Component, Fragment } from "react";
import logo from '../images/logo.webp';
import { Timeline, Event } from "react-timeline-scribble";

import Fab from '@material-ui/core/Fab';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ArrowRight from '@material-ui/icons/ArrowRight';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import DownloadIcon from '@material-ui/icons/GetApp';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {getReport} from '../api/misc';
import moment from 'moment';
import Loading from './Loading';
import { Button, Grid, Typography } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import LeftRightSwitch from './LeftRightSwitch';
import "../css/trace.scss";
import "../css/style.css";
import '../css/radio.css';


class Traceability extends Component{
  constructor(props) {
    super(props);
    this.state = {
      report_date: moment().format('YYYY-MM-DD'),
      milk_type: 'a2',
      loading: true,
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
      this.setState({
        report: res.data,
        loading: false,
        error: false
      });
    })
    .catch(err => {
      console.log(err);
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
    let report_date = search.get('report_date') || moment().format('YYYY-MM-DD');

    this.setState({
      milk_type, 
      report_date
    }, () => this.update());

  }
  gotoPreviousDay = () => {
    let {report_date} = this.state;
    this.setState({
      report_date: moment(report_date).subtract(1, 'day').format('YYYY-MM-DD')
    }, () => this.update());
  }
  gotoNextDay = () => {
    let {report_date} = this.state;
    this.setState({
      report_date: moment(report_date).add(1, 'day').format('YYYY-MM-DD')
    }, () => this.update());
  }
  onTypeChange = (e) => {
    console.log(e);
    this.setState({
      milk_type: e.currentTarget.value
    }, () => this.update());
  }
  setType = (milk_type) => {
    this.setState({
      milk_type
    }, () => this.update());
  }
  render() {
    let {loading, report, report_date, milk_type, error} = this.state;

    return (
      <Fragment>
        <div id="trace" className="flex middle">
          <img src={logo} alt="logo" className="logo" width="20%" style={{maxWidth: 140}} />
          {/* <h1 className="heading">Trace Your Milk</h1> */}
          <Typography variant="h5">Trace Your Milk</Typography>
        </div>
        <Divider />

        <div className="flex middle">
          <LeftRightSwitch 
            className="middle"
            style={{flex: 1}}
            onLeft={this.gotoPreviousDay}
            left={
              <IconButton 
                size="small"
                onClick={this.gotoPreviousDay}
                disabled={moment(report_date) <= moment('2021-01-15').endOf('day')}
                style={{border: '1px solid rgba(0, 0, 0, 0.23)'}}
              >
                <ArrowLeft />
              </IconButton>
            }
            center={
              <Button variant="outlined" fullWidth>
                {moment(report_date).format('DD MMM YYYY')}
              </Button>
            }
            right={
              <IconButton 
                size="small"
                onClick={this.gotoNextDay}
                disabled={moment(report_date) >= moment().startOf('day')}
                style={{border: '1px solid rgba(0, 0, 0, 0.23)'}}
              >
                <ArrowRight />
              </IconButton>
            }
          />

          <div class="switch-field p-10">
            <input type="radio" id="milk-type-a2" name="milk_type" value="a2" checked={milk_type === 'a2'} />
            <label for="radio-one" onClick={() => this.setType('a2')}>A2</label>
            <input type="radio" id="milk-type-mix" name="milk_type" value="mix" checked={milk_type === 'mix'} />
            <label for="radio-two" onClick={() => this.setType('mix')}>MIX</label>
          </div>
        </div>

        <Divider />
        {
          loading ?
          <div>
            <Loading />
          </div> :
          <div className="p-10">
            {
              error ?
              <div>
                <Alert severity="error">
                  {error}
                </Alert>
              </div> :
              <div>
                <Report report={report} />
                <TimelineReport report={report} />
                <div
                  style={{
                    position: 'fixed',
                    bottom: 20,
                    right: 10
                  }}
                >
                  <Fab 
                    color="primary" 
                    aria-label="add"
                    style={{
                      backgroundColor: '#277048'
                    }}
                    onClick={() => {
                      window.open(report.pdf_url);
                    }}
                  >
                    <DownloadIcon />
                  </Fab>
                </div>
              </div>
            
            }
          </div>
        }
        
      </Fragment>
    );
  }
}

function TimelineReport(props) {
  const {report} = props;
  if(!report) {
    return (
      <Typography>
        Sorry, we didn't find any report for that date.
      </Typography>
    )
  }
  const {
    bmc_receive,
    bmc_dispatch,
    plant_receive,
    plant_dispatch,
    whs_receive,
    whs_dispatch
  } = report;
  return (
    <div style={{marginTop: 10}}>
      <div className="p-10">
        <Typography variant="h5">Journey Your Milk Went On</Typography>
      </div>
      <Timeline>
        <Event interval={moment(bmc_receive).format('DD MMM YYYY hh:mm A')} title={"BMC"} subtitle={"Your milk arrived at the BMC."} />
        <Event interval={moment(bmc_dispatch).format('DD MMM YYYY hh:mm A')} title={"BMC"} subtitle={"Your milk left the BMC."} />
        <Event interval={moment(plant_receive).format('DD MMM YYYY hh:mm A')} title={"Plant"} subtitle={"Your milk arrived at the Plant."} />
        <Event interval={moment(plant_dispatch).format('DD MMM YYYY hh:mm A')} title={"Plant"} subtitle={"Your milk left the Plant."} />
        <Event interval={moment(whs_receive).format('DD MMM YYYY hh:mm A')} title={"Warehouse"} subtitle={"Your milk arrived at the warehouse."} />
        <Event interval={moment(whs_dispatch).format('DD MMM YYYY hh:mm A')} title={"Warehouse"} subtitle={"Your milk left the warehouse."} />
      </Timeline>
    </div>
  )
}

function Report(props) {
  const {report} = props;
  if(!report) {
    return (
      <Typography>
        Sorry, we didn't find any report for that date.
      </Typography>
    )
  }
  const {
    fat, snf, ph, mbrt, sodium_content
  } = report;

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={6} sm={6} >
          <StatCard title={"FAT"} value={fat} subtitle={"Benefits"} content={"Normal Amount"} suffix={"%"} />
        </Grid>

        <Grid item xs={6} sm={6} >
          <StatCard title={"SNF"} value={snf} subtitle={"Benefits"} content={"Normal Amount"} suffix={"%"} />
        </Grid>
        
        <Grid item xs={6} sm={6} >
          <StatCard title={"PH"} value={ph} subtitle={"Should be between 6.5 and 7"} content={"Critical Amount"} suffix={""} />
        </Grid>
        
        <Grid item xs={6} sm={6} >
          <StatCard title={"MBRT"} value={mbrt} subtitle={"Should be above 35 mins"} content={"Normal Amount"} suffix={"mins"} />
        </Grid>

        <Grid item xs={6} sm={6} >
          <StatCard title={"Sodium Content"} value={sodium_content} subtitle={"mg/100 gm SNF"} content={"Normal Amount"} suffix={""} />
        </Grid>
        
      </Grid>
    </div>
  )
}

function StatCard(props) {
  const {title, value, suffix, subtitle, content} = props;
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="h2">
          {value} {suffix}
        </Typography>
        <Typography color="textSecondary">
          {subtitle}
        </Typography>
        {/* <Typography variant="body2" component="p">
          {content}
        </Typography> */}
      </CardContent>
    </Card>
  )

}

export default Traceability;

// http://localhost:3000/#/trace?milk_type=a2&report_date=2021-01-22