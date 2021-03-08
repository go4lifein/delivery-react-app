import React, { Component } from 'react'
import DataTable from "react-data-table-component"
import ArrowDownward from '@material-ui/icons/ArrowDownward';

const sortIcon = <ArrowDownward />;

function FarmerDataTable(props){
    const {data} = props;
    const columns = [
        {
            name : "Farmer Name",
            selector: 'name' , 
            sortable : true, 
            width : '300px'
        },
        
        {
            name : "Region", 
            selector : 'region',
            sortable:true , 
            width : '200px'

        },

        {
            name :"Subregion",
            selector: 'subregion' , 
            sortable :true , 
            width : '300px'


        },
    ]

    return(

        <div>
        <DataTable
          striped={true}
          noHeader
          selectableRows ={false}
     
          dense={true}
          
          sortIcon={sortIcon}
          data={data}
          columns={columns}
          highlightOnHover={true}
          pointerOnHover={true}
         
          pagination={true}
          paginationPerPage={10}
        />
      </div>
    )



};

export default React.memo(FarmerDataTable);