import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import { withSnackbar } from 'notistack';
import DataTable from "react-data-table-component";
import Loading from '../Loading';
import CSVUpload from '../utils/CSVUploadAndPreview';

import deliveryApi from "../../api/delivery";

class DeliveryInstructions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      name: "",
      phone: "",
      search: "",
      customers: [],
    }
  }
  componentDidMount() {
    this.setState({
      loading: false,
    })
    this.refreshData()
  }
  refreshData = async () => {
    const data = await deliveryApi.getCustomersWithInstructions();
    this.setState({
      customers: data
    })
  }
  filterData = () => {
    let {search, customers} = this.state;
    let data = [];
    if (customers) {
      data = customers.filter((item) => {
        if (!item.name.includes(search) && !item.phone.includes(search))
          return false;
        return true;
      })
    }
    return data;
  }
  columns = [
    {
      name: "Customer",
      selector: 'name',
      sortable: true,
      width: '300px',

    },
    {
      name: "Instruction",
      selector: 'delivery_instruction',
      sortable: true,
      width: '300px'
    }
  ]

  onSearch = (e) => {
    this.setState({
      search: e.target.value
    })
  }
  updateDeliveryInstructions = (instructions) => {
    deliveryApi.updateDeliveryInstructions(instructions)
    .then(response => {
        this.props.enqueueSnackbar(response, {
        variant: 'success'
      });
    });
  }
  validateInstructions = (instructionRecord) => {
    const {id, instruction} = instructionRecord;
    if(!id) throw new Error("Column id is compulsory.");
    if(!instruction) throw new Error("Column instruction is compulsory.");
  }
  filterValidInstructions = ({instruction, id}) => {
    if(!id) return false;
    if(!instruction) return false;
    return true;
  }
  render() {
    const { loading,  } = this.state;
    let data = this.filterData();

    if (loading) {
      return <Loading />
    }

    return (
      <div>
        <DataTable
          title={"Customer Delivery Instructions"}
          actions={
            <>
              <div>
                <TextField
                  label="Search by Name or Phone"
                  value={this.state.search}
                  onChange={this.onSearch}
    
                />
              </div>
              <div>
                <CSVUpload 
                  label={"Upload Delivery Instructions"}
                  maxLength={400}
                  filterDataCallback={this.filterValidInstructions}
                  validator={this.validateInstructions}
                  mapDataCallback={({id, instruction}) => {
                    instruction = instruction.replace("'", '');
                    return {id, instruction}
                  }}
                  onSubmit={this.updateDeliveryInstructions}
                />
              </div>
            </>
          }
          progressComponent={<Loading />}
          columns={this.columns}
          data={data}
          pagination={true}
        />

      </div>
    );
  }
}

export default withSnackbar(DeliveryInstructions);
