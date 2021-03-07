import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, TextField } from '@material-ui/core';
import { drivers } from "../DummyData/drivers";
import Loading from './Loading';
import DriverForm from "./DriverForm"

import { getDeliveryBoysData } from "../api/v2/admin";


class DriverDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            addingDriver: false,
            driver_name: "",
            phone: "",

        }
    }
    componentDidMount() {
           
        this.setState({
            loading: false,
            driver_name: this.driver_name,
            phone: this.phone
        })

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
        const { loading, addingDriver, driver_name, phone } = this.state;

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
                        <DriverForm toggleDriverForm={this.toggleDriverForm} />
                    </Card>
                }
                
            </div>
        );
    }
}

export default DriverDashboard;
