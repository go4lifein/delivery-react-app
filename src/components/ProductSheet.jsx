import React, { Component } from 'react';
import { connect } from 'react-redux';
import DataTable from "react-data-table-component";

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
  
  render() {
    let loading = true;

    let {customers, productsCollection} = this.props;
    
    let data = [];
    if(customers) {
      console.log(productsCollection);
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
              <DataTable
                data={data}
                columns={this.columns}
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