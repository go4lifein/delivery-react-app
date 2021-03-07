import React, { Component } from 'react'
import DataTable from 'react-data-table-component'
import ArrowDownward from '@material-ui/icons/ArrowDownward';

const sortIcon = <ArrowDownward />;

function DriverDataTable(props){
    const {data} = props; 
    const columns = [
        {
            name : "Driver Name",
            selector: 'name',
            sortable : true,
            width :'300px',
           
        },
        {
            name : "Phone No.",
            selector : 'phone',
            sortable : true, 
            width: '300px'
            
        }

    ]

    return (
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
            paginationPerPage={20}
          />
        </div>
      )
};

export default React.memo(DriverDataTable);