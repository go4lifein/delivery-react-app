import React from 'react';
import { withRouter } from "react-router";
import DataTable from "react-data-table-component";


function DriverOrderTable(props) {
  
  const {data, history} = props;
  console.log(history);
  const columns = [
    {
      name: 'Crate',
      selector: 'crateId',
      sortable: true,
      width: '70px'
    },
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
      width: '200px'
    },
    {
      name: 'Phone',
      selector: 'phone',
      sortable: true,
      width: '140px'
    },
    {
      name: 'Hub',
      sortable: true,
      selector: 'address.hub',
      width: '100px',
      cell: (row, idx) => {
        let {address} = row;
        return address.hub;
      }
    },
    {
      name: 'Region',
      sortable: true,
      selector: 'address.area',
      width: '140px',
      cell: (row, idx) => {
        let {address} = row;
        return address.area;
      }
    },
    {
      name: 'Locality',
      sortable: true,
      selector: 'address.subarea',
      width: '150px',
      cell: (row, idx) => {
        let {address} = row;
        return address.subarea;
      }
    },
    {
      name: 'House',
      selector: 'address.house',
      width: '200px',
      cell: (row, idx) => {
        let {address} = row;
        return address.house_number;
      }
    }
  ];

  console.log("Rerendering Table");

  return (
    
    <DataTable
      striped={true}
      noHeader
      dense={true}
      data={data}
      columns={columns}
      onRowClicked={(row, e) => {
        history.push(`/${row.order_id}/deliver`)
      }}
    />
  )
};

export default React.memo(withRouter(DriverOrderTable));