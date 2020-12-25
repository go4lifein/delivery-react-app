import React from 'react';
import DataTable from "react-data-table-component";
import Checkbox from '@material-ui/core/Checkbox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
const sortIcon = <ArrowDownward />;
function OrderDataTable(props) {
  const {data, onRowSelect, onSelectionChange, deliveryBoys} = props;
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
    },
    {
      name: 'Gable Top',
      selector: 'gable-top',
      width: '80px',
      cell: (row, idx) => {
        let {products} = row;
        if('Dairy' in products) {
          let dairyProducts = products['Dairy'];
          let count = 0;
          dairyProducts.forEach(item => {
            if(item.product_id === 811) count += item.quantity;
          });
          if(count) return count;
          else return '';
        }
        return '';
      }
    },
    {
      name: 'Paneer',
      selector: 'paneer',
      width: '80px',
      cell: (row, idx) => {
        let {products} = row;
        if('Dairy' in products) {
          let dairyProducts = products['Dairy'];
          let count = 0;
          dairyProducts.forEach(item => {
            if(item.product_id === 225) count += item.total;
          });
          if(count) return count + 'g';
          else return '';
        }
        return '';
      }
    },
    {
      name: 'Driver',
      selector: '_driver',
      cell: (row, idx) => {
        let {delivery_person_id} = row;
        if(delivery_person_id) {
          let driver = deliveryBoys.get(delivery_person_id);
          return driver ? driver.name : '';
        }
        return '';
      }
    },
    {
      name: 'Delivered by',
      selector: 'delivery',
      cell: (row, idx) => {
        let {delivery} = row;
        const {driver_id, deliver_date} = delivery;
        if(driver_id && deliver_date) {
          let driver = deliveryBoys.get(driver_id);
          return driver ? driver.name : 'Not Delivered yet';
        }
        return '';
      }
    }
  ];

  console.log("Rerendering Table");

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
        onRowClicked={(row, e) => {
          onRowSelect(row);
        }}
      />
    </div>
  )
};

export default React.memo(OrderDataTable);