import React from 'react';
import DataTable from "react-data-table-component";

const columns = [
  {
    name: 'id',
    selector: 'id',
    sortable: true,
  },
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
    cell: (row) => {
      const {id: customerId, name} = row;
      return <a href={`https://gaudugdham.milkmanapps.com/subscriptions?id=${btoa(customerId)}`} target="_blank" rel="noreferrer">{name}</a>
    }
  },
  {
    name: 'Phone',
    selector: 'phone_number',
    sortable: true,
    cell: (row) => {
      const {phone_number: phone} = row;
      return <a href={`tel:+91${phone}`} className="flex middle">{phone}</a>
    }
    
  },
  {
    name: 'Total Orders',
    selector: 'orders_count',
    sortable: true
  },
  {
    name: 'Wallet',
    selector: 'wallet_balance',
    sortable: true
  }
];

function CustomerTable({customers}) {
  
  return (
    <div>
      <DataTable
        noHeader
        dense={true}
        data={customers}
        columns={columns}
      />
    </div>
  )
}

export default CustomerTable;