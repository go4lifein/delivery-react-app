import React, { Component } from 'react';
import {FormControl, Grid, Select, TextField, Switch, FormControlLabel, CircularProgress, Button } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import UploadIcon from '@material-ui/icons/CloudUpload';
import moment from 'moment';

class ReportForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      report_date: moment().format('YYYY-MM-DD'),
      milk_type: 'a2',
      ph: 7,
      snf: 9,
      fat: 4,
      sodium_content: 496,
      mbrt: 40,
      antibiotics1: false,
      antibiotics2: false,
      antibiotics3: false,
      aflatoxin: false,
      // bmc_receive: null,
      // bmc_dispatch: null,
      // plant_receive: null,
      // plant_dispatch: null,
      // whs_receive: null,
      // whs_dispatch: null,
      pdf: null,
      bmc_receive: moment().subtract(2, 'day').format('YYYY-MM-DDTHH:MM'),
      bmc_dispatch: moment().subtract(2, 'day').add(4, 'hour').format('YYYY-MM-DDTHH:MM'),
      plant_receive: moment().subtract(1, 'day').format('YYYY-MM-DDTHH:MM'),
      plant_dispatch: moment().subtract(1, 'day').add(2, 'hour').format('YYYY-MM-DDTHH:MM'),
      whs_receive: moment().subtract(10, 'hour').format('YYYY-MM-DDTHH:MM'),
      whs_dispatch: moment().subtract(8, 'hour').format('YYYY-MM-DDTHH:MM'),
    }
  }
  onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const {onSubmit} = this.props;
    onSubmit(data);

  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  onDateTimeChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onFileChange = (e) => {
    this.setState({
      pdf: e.target.value
    })
  }
  render() {
    const {
      report_date, 
      milk_type,
      ph,
      snf,
      fat,
      sodium_content,
      mbrt,
      antibiotics1,
      antibiotics2,
      antibiotics3,
      aflatoxin,
      bmc_receive,
      bmc_dispatch,
      plant_receive,
      plant_dispatch,
      whs_receive,
      whs_dispatch,
      pdf
    } = this.state;
    
    const {loading} = this.props;
    let filename = null;
    if(pdf) {
      let path = pdf.split("\\");
      filename = path[path.length - 1];
    }

    console.log(this.state);

    return (
      <div id="report-form" className="flex column middle">
        <form id="milk-report-form" onSubmit={this.onSubmit}>
        <Grid container 
          justify="center" 
          spacing={2}
        >
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="Report Date *"
                type="date"
                value={report_date}
                name="report_date"
                onChange={this.onDateTimeChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <FormControl fullWidth>
              <InputLabel id="milk_type">Milk Type *</InputLabel>
              <Select
                labelId="milk_type"
                fullWidth
                name="milk_type"
                value={milk_type}
                onChange={(e) => {
                  this.setState({
                    milk_type: e.target.value
                  })
                }}
              >
                <MenuItem value="a2">A2</MenuItem>
                <MenuItem value="mix">Mix</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextField fullWidth
              label="pH *"
              name='ph'
              onChange={this.onChange}
              type="number"
              value={ph}
            />
          </Grid>
          
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextField fullWidth
              label="FAT *"
              name="fat"
              value={fat}
              type="number"
              onChange={this.onChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextField fullWidth
              label="SNF *"
              name="snf"
              value={snf}
              type="number"
              onChange={this.onChange}
            />
          </Grid>
        </Grid>


        <Grid container 
          justify="center" 
          spacing={2}
        >  
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextField fullWidth
              label="Sodium Content *"
              name="sodium_content"
              value={sodium_content}
              type="number"
              onChange={this.onChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <TextField fullWidth
              label="MBRT *"
              name="mbrt"
              type="number"
              value={mbrt}
              onChange={this.onChange}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3} lg={3}>
            <InputLabel className="required" >BMC Received</InputLabel>
            <TextField fullWidth
              type="datetime-local"
              required
              onChange={this.onDateTimeChange}
              value={bmc_receive}
              name="bmc_receive"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <InputLabel className="required" >BMC Dispatched</InputLabel>
            <TextField fullWidth
              type="datetime-local"
              required
              onChange={this.onDateTimeChange}
              value={bmc_dispatch}
              name="bmc_dispatch"
            />
          </Grid>
        </Grid>

        <Grid container 
          justify="center" 
          spacing={2}
        >
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <InputLabel className="required" >Plant Received</InputLabel>
            <TextField fullWidth
              type="datetime-local"
              required
              onChange={this.onDateTimeChange}
              value={plant_receive}
              name="plant_receive"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <InputLabel className="required" >Plant Dispatched</InputLabel>
            <TextField fullWidth
              type="datetime-local"
              required
              onChange={this.onDateTimeChange}
              value={plant_dispatch}
              name="plant_dispatch"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <InputLabel className="required" >WHS Received</InputLabel>
            <TextField fullWidth
              type="datetime-local"
              required
              onChange={this.onDateTimeChange}
              value={whs_receive}
              name="whs_receive"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <InputLabel className="required" >WHS Dispatched</InputLabel>
            <TextField fullWidth
              type="datetime-local"
              required
              onChange={this.onDateTimeChange}
              value={whs_dispatch}
              name="whs_dispatch"
            />
          </Grid>
        </Grid>
        
        
        <Grid container 
          justify="center" 
          spacing={2}
        >  
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <FormControlLabel
              control={
                <Switch disabled
                  checked={antibiotics1}
                  onChange={(e, antibiotics1) => this.setState({ antibiotics1 })}
                  color="primary"
                />
              }
              label="Antibiotics (B & T) *"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <FormControlLabel
              control={
                <Switch disabled
                  checked={antibiotics2}
                  onChange={(e, antibiotics2) => this.setState({ antibiotics2 })}
                  color="primary"
                />
              }
              label="Antibiotics (Chloramphenicol) *"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <FormControlLabel
              control={
                <Switch disabled
                  checked={antibiotics3}
                  onChange={(e, antibiotics3) => this.setState({ antibiotics3 })}
                  color="primary"
                />
              }
              label="Antibiotics (Sulphonamide) *"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <FormControlLabel
              control={
                <Switch disabled
                  checked={aflatoxin}
                  onChange={(e, aflatoxin) => this.setState({ aflatoxin })}
                  color="primary"
                />
              }
              label="Aflatoxin M1 *"
            />
          </Grid>
        </Grid>

        <Grid container 
          justify="center" 
          spacing={2}
        >
          <Grid item>
            <div>
              <input 
                type="file" 
                id="milk-report-file-input" 
                className="file-input"
                name="pdf"
                onChange={this.onChange}
              />
              <label className="file" htmlFor="milk-report-file-input">
                <div className="flex middle">
                  <div className="icon">
                    <UploadIcon />
                  </div>
                  Upload Report
                </div>
              </label>
            </div>
            {filename}
          </Grid>
          
          <Grid item>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              // onClick={onSubmit}
              disabled={loading}
              startIcon={loading ? <CircularProgress size={12} /> : null}
            >
              Submit
            </Button>
              
          </Grid>
          
          <Grid item>
            <Button
              color="primary"
              // onClick={onSubmit}
              // disabled={loading}
              // startIcon={loading ? <CircularProgress size={12} /> : null}
            >
              Cancel
            </Button>
              
          </Grid>
          
        </Grid>
        </form>
      </div>
    );
  }
};

export default ReportForm;