import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, TextField } from '@material-ui/core';
import { drivers } from "../DummyData/drivers";
import Loading from './Loading';
import DriverForm from "./DriverForm"
import DriverDataTable from "./DriverDataTable"
import { getDeliveryBoysData } from "../api/v2/admin";


class DriverDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            addingDriver: false,
            name: "",
            phone: "",
            deliveryboys: [],
            search : "",
        }
    }
     componentDidMount() {
           
        this.setState({
            loading: false,

        })
          this.refreshData()
    }

    refreshData = async () =>
    {
        const response = await getDeliveryBoysData();
        this.setState({
            deliveryboys:response.data
        })
      
    }

    filterData = () => {
        let search = this.state.search ;
        
        let data = [];
        
   
        if(this.state.deliveryboys) {
          data = this.state.deliveryboys.filter((item) => 
          {
           
           
              if(!item.name.includes(search) && !item.phone.includes(search))
              
              
              return false;
            
            
           
         
            return true;
          })
        }
        
        return data;
    }

    onSearch = (e) =>{
        this.setState({
            search : e.target.value
        })
        this.filterData()
    }
    toggleDriverForm = () => {
        this.setState((state) => ({
            addingDriver: !state.addingDriver
        }))
    }

        /*
             filterData() {
        let { name, phone } = this.state;


        let data = [];
        // if()
    }
        */

    render() {
        const { loading, addingDriver, name, phone } = this.state;
        let data = this.filterData();

        if (loading) {
            return <Loading />
        }

        return (
            <div>
                <div>

                </div>
                <div
                    className="flex space-bw m-10 middle"
                >
                    <div>
                        <TextField 
                            label="Search by Name or Phone" 
                            value = {this.state.search}
                            onChange = {this.onSearch}

                        />
                    </div>
                    <div>
                        <Button
                            variant="contained"
                            color="primary"

                            onClick={this.toggleDriverForm}
                        >
                            Add Driver
                        </Button>
                    </div>
                </div>
                {
                    addingDriver &&
                    <Card
                        className="m-10 p-10" 
                    
                    >
                        <DriverForm 
                        toggleDriverForm={this.toggleDriverForm}
                        refreshData = {this.refreshData}
                        />
                    </Card>
                }
                
                <DriverDataTable 
                    data = {data}
                    
                />
            </div>
        );
    }
}

export default DriverDashboard;
