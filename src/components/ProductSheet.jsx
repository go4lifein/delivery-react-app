import React, { Component } from 'react';
import { connect } from 'react-redux';
import DataTable from "react-data-table-component";
import DownloadIcon from '@material-ui/icons/CloudDownload';
import Button from '@material-ui/core/Button';
import exportCSV from '../helpers/exportCSV';
import Loading from './Loading';

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
      name: 'Product',
      selector: 'product',
      sortable: true,
    },
    {
      name: 'Crates',
      sortable: false,
      cell: (row, idx) => {
        const {crates, unit, product} = row;

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
                const {crateId, total, quantity} = crate;
                return (
                  <tr key={product + crateId.toString()}>
                    <td className="fixed-width-column">{crateId}</td>
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
    let { productsCollection} = this.props;
    
    let data = Array.from(productsCollection.values());

    let rows = [
      ['Product Id', 'Product', 'Crate', 'Total', 'Qty'],
    ];
    data.forEach(productItem => {
      const {crates, unit, product, product_id} = productItem;
      crates.forEach(crate => {
        const {crateId, total, quantity} = crate;
        let row = [product_id, product, crateId, `${total} ${unit}`, quantity];
        rows.push(row);
      });
    });
    exportCSV(rows, `Product Sheet - ${new Date().toLocaleDateString()}.csv`);
  }
  render() {
    let loading = true;

    let {customers, productsCollection} = this.props;
    
    let data = [];
    if(customers) {
      loading = false;
      data = Array.from(productsCollection.values());
      // data = data.filter(customer => (customer.onlyDairy === false))
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
                  <Button 
                    onClick={this.exportData}
                    startIcon={<DownloadIcon />}
                    color="secondary"
                    variant="outlined"
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
  mapStateToProps
)(CustomerSheet);