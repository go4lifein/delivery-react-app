import React from 'react';
import DataTable from "react-data-table-component";
import Checkbox from '@material-ui/core/Checkbox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';

const sortIcon = <ArrowDownward />;

function OrderDataTable(props) {
  const {data, onRowSelect, onSelectionChange, deliveryBoys} = props;

  console.log(deliveryBoys);

  const columns = [
    // {
    //   name: 'Crate',
    //   selector: 'crate_id',
    //   sortable: true,
    //   width: '70px'
    // },
    {
      name: 'Order Id',
      selector: 'orderId',
      sortable: true,
      width: '130px'
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
      selector: 'region',
      width: '100px',
    },
    {
      name: 'Area',
      sortable: true,
      selector: 'area',
      width: '140px'
    },
    {
      name: 'Locality',
      sortable: true,
      selector: 'subarea',
      width: '150px'
    },
    {
      name: 'House',
      selector: 'address',
      width: '300px'
    },
    {
      name: 'Driver',
      selector: '_driver',
      cell: (row, idx) => {
        let {driverId} = row;
        if(driverId) {
          let driver = deliveryBoys.get(driverId);
          return driver ? driver.name : '';
        }
        return '';
      }
    }
  ];

  return (
    <div>
      <DataTable
        striped={true}
        noHeader
        selectableRows
        onSelectedRowsChange={onSelectionChange}
        dense={true}
        selectableRowsComponent={Checkbox}
        sortIcon={sortIcon}
        data={data}
        columns={columns}
        highlightOnHover={true}
        pointerOnHover={true}
        pagination={true}
        paginationPerPage={10}
        // onRowClicked={(row, e) => {
        //   onRowSelect(row);
        // }}
      />
    </div>
  )
};

export default React.memo(OrderDataTable);