import React, { Component } from 'react'
import {Button , Card ,Select , FormControl, InputLabel, TextField, Textfield} from '@material-ui/core';
import {getAllFarmers} from "../api/v2/admin"
import Loading from "./Loading";
import FarmerDataTable from "./FarmerDataTable"
import { render } from '@testing-library/react';

    class FarmerDashboard extends Component{
        constructor(props){
            super(props);
            this.state = {
                loading:true, 
                name : "", 
                region : "",
                subregion : "",
                farmers:[],
                search : "",
            }
        }

        componentDidMount(){
            this.setState({
                loading:false
            })
            this.refreshData()
        }

        refreshData = async() =>{
            const response = await getAllFarmers();
            this.setState({
                farmers:response.data
            })
        }
        filterData = () =>{
            let search = this.state.search ; 
            let data = [];
            
            if(this.state.farmers){
                data = this.state.farmers.filter((item) =>{
                    if(!item.name.includes(search))
                    return false ; 
                    return true ; 
                })
            }
            return data  ;
        }

        onSearch = (e) =>{
            this.setState({
                search : e.target.value 
            })
            this.filterData()
        }

        

        render() {

            const {loading , name , region , subregion } = this.state ;
            let data = this.filterData();

            
            if(loading) {
                return <Loading />
            }
            return (
            
            
            <div>
                <div
                    className  ="flex space-bw m-10 middle"
                >
                    <TextField 
                        label = "Search by Name"
                        value = {this.state.search}
                        onChange = {this.onSearch}

                        />
                             <FormControl>
                            <InputLabel id ="region-filter">Region</InputLabel>
                            <Select
                                labelId = "region-filter"
                                style = {{width:100}}
                               
                              
                            >
                             
                            </Select>
                        </FormControl>
                </div>
                <FarmerDataTable
                data ={data}
                />


            </div>
            
            );
        }


    }



    export default FarmerDashboard ; 