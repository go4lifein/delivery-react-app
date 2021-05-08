import React, { Component } from 'react'
import { FormControl, Grid, Select, TextField, Switch, FormControlLabel, CircularProgress, Button, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { addDriverData } from "../api/v2/admin";
import { withSnackbar } from 'notistack';



class DriverForm extends Component {
    constructor(props) {
        super(props);



        this.state = {
            name: "",
            phone: "",

        }
    }


    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = async (e) => {

        e.preventDefault();

        await addDriverData({
            name: this.state.name,
            phone: this.state.phone
        }).then(res => {

            this.props.enqueueSnackbar(
                "Driver Added",
                {
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'left',
                    },
                    variant: 'success'
                }
            );
                
            this.setState({
                name: "",
                phone: ""
            })
        }).catch(err => {

            this.props.enqueueSnackbar(
            
                "Driver could not be added" ,
                    {
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'left',
                    },
                variant : 'error'});
        })
        this.props.refreshData();

    };

    render() {
        const { name, phone } = this.state;
        const { toggleDriverForm } = this.props;

        return (

            <div >
                <form id="driver-form" onSubmit={this.onSubmit} className="p-10">
                    <Grid container
                        justify="center"
                        spacing={2}
                    >
                        <Grid item xs={12}>
                            <div className="flex middle">
                                <div className="mh-10">
                                    <TextField
                                        label="Driver Name"
                                        name="name"
                                        variant="outlined"
                                        required
                                        value={name}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div >
                                    <TextField
                                        required
                                        label="Phone No:"
                                        name="phone"
                                        variant="outlined"
                                        value={phone}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <div>

                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        style={{
                                            margin: 10
                                        }}                            >
                                        Submit
                            </Button>

                                    <IconButton
                                        style={{ marginLeft: 10 }}
                                        onClick={toggleDriverForm}
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                </div>
                            </div>


                        </Grid>
                    </Grid>
                </form>
            </div>

        );
    }

}

export default (withSnackbar(DriverForm));
