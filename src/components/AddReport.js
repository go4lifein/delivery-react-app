import { Box} from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getReport} from '../api/misc';
import {addReport} from '../api/admin';
import ReportForm from './ReportForm';

function mapStateToProps(state) {
  return {

  };
}

class AddReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      report: null,
      loading: false
    }
  }
  componentDidMount() {
    getReport()
    .then(res => {
      console.log(res.data);
      this.setState({
        report: res.data
      });
    })
    .catch(err => {
      console.log(err)
    })
  }
  onSubmit = (data) => {
    this.setState({
      loading: true
    })
    addReport(data)
    .then(res => {
      console.log(res);
      this.setState({
        loading: false
      })
      alert('Done');
    })
    .catch(err => {
      if(err.response && err.response.status === 400) {
        alert(err.response.data)
      }
      console.log(err);
      this.setState({
        loading: false
      })
    })
  }
  render() {
    const {loading, report} = this.state;
    if(report) {
      // alert("Already a report for today");
    }
    return (
      <div >
        <Box m={1}>
          <ReportForm onSubmit={this.onSubmit} loading={loading} />
        </Box>
        
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(AddReport);