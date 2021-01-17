import React, { Component } from 'react';
import { connect } from 'react-redux';
import DataTable from "react-data-table-component";
import DownloadIcon from '@material-ui/icons/CloudDownload';
import Button from '@material-ui/core/Button';
import exportCSV from '../helpers/exportCSV';
import Loading from './Loading';
import { TextField, Switch, FormControlLabel } from '@material-ui/core';

function mapStateToProps(state) {
  let {setAdmin} = state;
  return {
    ...setAdmin
  };
}

class CustomerSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  columns = [
    {
      name: 'Product Id',
      selector: 'product_id',
      sortable: true,
      width: "120px"
    },
    {
      name: 'Product',
      selector: 'product',
      sortable: true,
    },
    {
      name: 'Crates',
      sortable: false,
      cell: (row, idx) => {
        const {crates, unit, product} = row;
        let total_qty = 0, total_val = 0; 

        return (
          <table style={{width: '100%', textAlign: 'left'}} id="customer-sheet-table">
            <thead>
            <tr>
              <th>Crate</th>
              <th >Total</th>
              <th >Qty</th>
            </tr>
            </thead>
            <tbody>
              {
                crates.map(crate => {
                  const { total, quantity, crate_id} = crate;
                  total_qty += quantity;
                  total_val += total;
                  return (
                    <tr key={product + Math.random().toString()}>
                      <td className="fixed-width-column">{crate_id}</td>
                      <td className="fixed-width-column">{total} {unit}</td>
                      <td className="fixed-width-column">{quantity}</td>
                    </tr>
                  )
                })
              }
              
              <tr key={product + 'total'}>
                <th className="fixed-width-column">Total</th>
                <th className="fixed-width-column">{total_val} {unit}</th>
                <th className="fixed-width-column">{total_qty}</th>
              </tr>
            </tbody>
          </table>
        );
      }
    }
  ]
  exportData = () => {
    let { productsCollection} = this.props;
    
    let data = Array.from(productsCollection.values());

    let rows = [
      ['Product Id', 'Product', 'Category', 'Crate', 'Total', 'Qty'],
    ];
    data.forEach(productItem => {
      const {crates, unit, product, product_id, category} = productItem;
      let total_qty = 0, total_val = 0;
      crates.forEach((crate, i) => {
        const {crateId, total, quantity} = crate;
        
        total_qty += quantity;
        total_val += total;
        let row = ['', '', `"${category}"`, crateId, `${total} ${unit}`, quantity];
        if(i === 0) {
          row = [product_id, `"${product}"`, `"${category}"`, crateId, `${total} ${unit}`, quantity];
        }
        rows.push(row);
      });
      rows.push(['', 'Total', '', `${total_val} ${unit}`, total_qty])
    });
    exportCSV(rows, `Product Sheet - ${new Date().toLocaleDateString()}.csv`);
  }
  render() {
    let loading = true;

    let {customers, productsCollection} = this.props;
    let {search, removeSelectedDairy} = this.state;
    
    let data = [];
    if(customers) {
      loading = false;
      data = Array.from(productsCollection.values());
      data = data.filter(item => {
        const {product} = item;
        if(search) {
          if(product.toLowerCase().includes(search.toLowerCase())) return true;
          return false;
        }
        if(removeSelectedDairy) {
          if(product.toLowerCase().includes("Milk".toLowerCase())) return false;
          if(product.toLowerCase().includes("Paneer".toLowerCase())) return false;
          return true;
        }
        return true;
      })
    }

    return (
      <div>
          {
            loading?
            <Loading /> :
            <div>
              {/* <div className="p-10">
                
              </div> */}
              <DataTable
                data={data}
                columns={this.columns}
                actions={
                  <div className="flex middle">
                    <TextField 
                      label="Search Product"
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
                      onClick={this.exportData}
                      startIcon={<DownloadIcon />}
                      color="secondary"
                      variant="outlined"
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
  mapStateToProps
)(CustomerSheet);