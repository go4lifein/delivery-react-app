import React, { Component } from 'react';
import { connect } from 'react-redux';
import DataTable from "react-data-table-component";
import DownloadIcon from '@material-ui/icons/CloudDownload';
import Button from '@material-ui/core/Button';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import exportCSV from '../helpers/exportCSV';
import CircularProgress from '@material-ui/core/CircularProgress';
import { TextField, Switch, FormControlLabel } from '@material-ui/core';

import {updateOrdersData} from '../actions/admin.actions';
import {updateCrateId} from '../api/admin';
import Loading from './Loading';

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
      loading: true,
      removeSelectedDairy: true
    }
  }
  componentDidMount() {
    
    let alreadyCreatedCratedToday = false;

    let cratesLastCreated = new Date(localStorage.getItem('cratesLastCreated'));

    if(cratesLastCreated) {
      cratesLastCreated = new Date(cratesLastCreated);
      let today = new Date().setHours(0);

      console.log(today, cratesLastCreated.valueOf())
      if(cratesLastCreated > today) {
        alreadyCreatedCratedToday = true;
      }
    }
    this.setState({
      alreadyCreatedCratedToday
    })
  }
  updateState = state => {
    this.setState({ selectedRows: state.selectedRows });
  }
  createCrateNumbers = () => {
    let cratesLastCreated = new Date(localStorage.getItem('cratesLastCreated', new Date().toISOString()));
    let today = new Date().setHours(0);
    if(cratesLastCreated > today) {
      alert("Crates IDs Already created");
      return;
    }
    localStorage.setItem('cratesLastCreated', new Date().toISOString());
    this.setState({
      creatingCrate: true
    });
    let {customers } = this.props;
    let orderCrateIds = [
      /*
      {
        order_id: 
        crate_id: 
      } 
      */
    ];

    customers.forEach(item => {
      const {order_id, crateId} = item;
      orderCrateIds.push({order_id, crate_id: crateId});
    });
    updateCrateId({orderCrateIds})
    .then(res => {
      window.location.reload();
    })
  }
  columns = [
    {
      name: 'Crate',
      selector: 'crate_id',
      sortable: true,
      width: '90px'
    },
    {
      name: 'Order Id',
      selector: 'order_id',
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
        const {phone, allProducts} = row;
        
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
                const { total, unit, quantity} = product;
                const name = product.product;
                return (
                  <tr key={phone.toString() + Math.random().toString()}>
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
    const {removeSelectedDairy} = this.state;

    data.sort((c1, c2) => c1.crate_id - c2.crate_id);

    let rows = [
      ['Crate', 'Hub', 'Name', 'Phone', 'Address', 'Product', 'Category', 'Total', 'Qty'],
    ];
    data.forEach(customer => {
      const {products, phone, address} = customer;
      const {house_number, subarea, area, hub} = address;
      let addressString = `"${house_number}, ${subarea}, ${area}"`;
      const categories = Object.entries(products);
      let allProducts = [];
      categories.forEach(([category, value]) => {
        value.forEach(product => {
          product.category = category;
          if(removeSelectedDairy) {
            if(product.product.toLowerCase().includes("milk") || product.product.toLowerCase().includes("paneer")) return;
          }
          allProducts.push(product);
        });
      });
      allProducts.forEach((product, i) => {
        const { total, unit, quantity, category} = product;
        if(i === 0) {
          let row = [
            customer.crate_id, 
            `${hub}`, 
            `${customer.name}`, 
            `${phone}`,
            addressString,
            `"${product.product}"`,
            `${category}`,
            `${total} ${unit}`, 
            `${quantity}`
          ];
          rows.push(row);
        } else {
          let row = [
            '', '', '', '', '',
            `"${product.product}"`, 
            `${category}`,
            `${total} ${unit}`, `${quantity}`
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
    let {creatingCrate, removeSelectedDairy, search, alreadyCreatedCratedToday } = this.state;

    
    let data = [];

    if(customers) {
      loading = false;
      data = Array.from(customers.values());

      data.forEach(customer => {
        const {products} = customer;
        const categories = Object.entries(products);
        let allProducts = [];
        categories.forEach(([category, value]) => {
          value.forEach(product => {
            product.category = category;
            if(removeSelectedDairy) {
              if(product.product.toLowerCase().includes("milk") || product.product.toLowerCase().includes("paneer")) return;
            }
            allProducts.push(product);
          });
        });
        customer.allProducts = allProducts;
      });

      data = data.filter(item => {
        const {name, phone, allProducts, crate_id} = item;
        if(allProducts.length === 0) return false;
        if(alreadyCreatedCratedToday) {
          if(crate_id) return true;
          return false;
        }
        if(search) {
          if(name.toLowerCase().includes(search.toLowerCase())) return true;
          if(phone.toLowerCase().includes(search.toLowerCase())) return true;
          return false;
        }
        return true;
      });
    }

    return (
      <div>
          {
            loading?
            <Loading /> :
            <div id="customer-sheet-table" style={{minWidth: 1000}}>
              <DataTable
                data={data}
                columns={this.columns}
                sortIcon={<ArrowDownward />}
                actions={
                  <div className="flex middle">
                    
                    <TextField 
                      label="Search Customer"
                      style={{
                        marginRight: 10
                      }}
                      onChange={(e) => {
                        this.setState({
                          search: e.target.value
                        });
                      }}
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={removeSelectedDairy}
                          onChange={(e, removeSelectedDairy) => this.setState({ removeSelectedDairy })}
                          color="primary"
                        />
                      }
                      label="Remove Milk and Paneer"
                    />
                    
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={
                        // <CircularProgress size={12} />
                        creatingCrate ? <CircularProgress size={12} /> : null
                      }
                      disabled={creatingCrate || alreadyCreatedCratedToday}
                      style={{
                        marginRight: 4
                      }}
                      onClick={this.createCrateNumbers}
                    >
                      Create Crate Numbers
                    </Button>

                    <Button 
                      startIcon={<DownloadIcon />}
                      color="secondary"
                      variant="outlined"
                      onClick={this.exportData}
                    >
                      Download Excel
                    </Button>
                  </div>
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