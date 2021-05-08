import React from 'react';
import DataTable from "react-data-table-component";
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import moment from 'moment-timezone'

const sortIcon = <ArrowDownward />;

function OrderDataTable(props) {
  const {data, onRowSelect, deliveryBoys, orderBoxData} = props;

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
      width: '100px'
    },
    {
      name: 'Order Date',
      selector: 'orderDate',
      sortable: true,
      width: '120px',
      cell: (row) => {
        const {orderDate} = row;
        return moment(orderDate).format('DD-MM-YYYY')
      }
    },
    {
      name: 'Crate Id',
      selector: 'orderId',
      sortable: true,
      width: '100px',
      cell: (row) => {
        const {orderId} = row;
        const boxData = orderBoxData.get(parseInt(orderId));
        return boxData?.crateId;
      }
    },
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
      width: '180px'
    },
    {
      name: 'Phone',
      selector: 'phone',
      sortable: true,
      width: '120px'
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
      width: '200px'
    },
    {
      name: 'Delivered on',
      selector: 'delivery_date',
      sortable: true,
      width: '180px',
      cell: (row) => {
        const {delivery_date} = row;
        if(!delivery_date) {
          return <span style={{color: 'red'}}>Not delivered</span>
        }
        return `${moment(delivery_date).utc().format('DD-MM-YYYY')} ${moment(delivery_date).utc().format('HH:mm')}`
      }
    },
    {
      name: 'Driver',
      selector: 'driverId',
      sortable: true,
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
        // selectableRows
        // onSelectedRowsChange={onSelectionChange}
        // selectableRowsComponent={Checkbox}
        dense={true}
        sortIcon={sortIcon}
        data={data}
        columns={columns}
        highlightOnHover={true}
        pointerOnHover={true}
        pagination={true}
        paginationPerPage={35}
        paginationRowsPerPageOptions={[10, 35, 100, data.length]}
        onRowClicked={(row, e) => {
          onRowSelect(row);
        }}
      />
    </div>
  )
};

export default React.memo(OrderDataTable);