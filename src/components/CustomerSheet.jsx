import React, { Component } from 'react';
import { connect } from 'react-redux';
import DataTable from "react-data-table-component";
import DownloadIcon from '@material-ui/icons/CloudDownload';
import Button from '@material-ui/core/Button';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import exportCSV from '../helpers/exportCSV';

import {updateOrdersData} from '../actions/admin.actions';
import Loading from './Loading';
const sortIcon = <ArrowDownward />;

function mapStateToProps(state) {
  let {setAdmin} = state;
  return {
    ...setAdmin
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onUpdateOrdersData: (data) => dispatch(updateOrdersData(data))
  };
}
class CustomerSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  updateState = state => {
    this.setState({ selectedRows: state.selectedRows });
  }
  columns = [
    {
      name: 'Crate',
      selector: 'crateId',
      sortable: true,
      width: '90px'
    },
    {
      name: 'Hub',
      sortable: true,
      width: '100px',
      cell: (row, idx) => {
        let {address} = row;
        return address.hub;
      }
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
      name: 'Product',
      selector: 'products',
      sortable: false,
      cell: (row, idx) => {
        const {products, phone} = row;
        const categories = Object.entries(products);
        let allProducts = [];
        categories.forEach(([category, value]) => {
          if(category !== 'Dairy') {
            value.forEach(product => allProducts.push(product));
          }
        });

        return (
          <table style={{width: '100%', textAlign: 'left'}} id="customer-sheet-table">
            <thead>
            <tr>
              <th>Name</th>
              <th >Total</th>
              <th >Qty</th>
            </tr>
            </thead>
            <tbody>
            {
              allProducts.map(product => {
                const {product_id, total, unit, quantity} = product;
                const name = product.product;
                return (
                  <tr key={phone.toString() + product_id.toString()}>
                    <td>{name}</td>
                    <td className="fixed-width-column">{total} {unit}</td>
                    <td className="fixed-width-column">{quantity}</td>
                  </tr>
                )
              })
            }
            </tbody>
          </table>
        );
      }
    }
  ]
  exportData = () => {
    let {customers } = this.props;
    let data = Array.from(customers.values());
    data = data.filter(customer => (customer.onlyDairy === false));

    let rows = [
      ['Crate', 'Hub', 'Name', 'Phone', 'Product', 'Total', 'Qty'],
    ];
    data.forEach(customer => {
      const {products, phone} = customer;
      const categories = Object.entries(products);
      let allProducts = [];
      categories.forEach(([category, value]) => {
        if(category !== 'Dairy') {
          value.forEach(product => allProducts.push(product));
        }
      });
      allProducts.forEach((product, i) => {
        if(i === 0) {
          const { total, unit, quantity} = product;
          let row = [
            customer.crateId, `${customer.address.hub}`, `${customer.name}`, `${phone}`,`${product.product}`, `${total} ${unit}`, `${quantity}`
          ];
          rows.push(row);
        } else {
          const { total, unit, quantity} = product;
          let row = [
            customer.crateId, `${customer.address.hub}`, `${customer.name}`, `${phone}`,`${product.product}`, `${total} ${unit}`, `${quantity}`
          ];
          rows.push(row);
        }
      });
    });
    exportCSV(rows, `Customer Sheet - ${new Date().toLocaleDateString()}.csv`);
  }
  render() {
    let loading = true;

    let {customers } = this.props;
    
    let data = [];
    if(customers) {
      loading = false;
      data = Array.from(customers.values());
      data = data.filter(customer => (customer.onlyDairy === false))
    }

    return (
      <div>
          {
            loading?
            <Loading /> :
            <div id="customer-sheet-table">
              <DataTable
                data={data}
                columns={this.columns}
                sortIcon={sortIcon}
                actions={
                  <Button 
                    startIcon={<DownloadIcon />}
                    color="secondary"
                    variant="outlined"
                    onClick={this.exportData}
                  >
                    Download Excel
                  </Button>
                }
                // onSelectedRowsChange={this.updateState}
                // selectableRows
              />
            </div>
          }

      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerSheet);