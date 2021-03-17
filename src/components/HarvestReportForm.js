import React, { Component } from 'react';
import { Button, InputLabel, TextField, Typography } from '@material-ui/core';
import ProductAutocomplete from './ProductSearchDropdown';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {addHarvestReport} from '../api/products';
import { withSnackbar } from 'notistack';
import '../css/form.css';

class HarvestReportForm extends Component {
  state = {
    loading: false
  }
  onSubmit = async (e) => {
    e.preventDefault()
    const {enqueueSnackbar} = this.props;
    const {farmerId, harvestTime, productId} = this.state;

    if(!(farmerId && productId && harvestTime)) {
      return;
    }
    
    this.setState({
      loading: true
    });
    await addHarvestReport({farmerId, harvestTime, productId})
    .then(res => {
      enqueueSnackbar(
        `Report has been added`, {
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left',
        },
        variant : 'success'
      });
      this.setState({
        farmerId: null,
        farmer: null,
        productId: null,
        product: null,
        harvestTime: ""
      })
    })
    .catch(err => {
      enqueueSnackbar(
        `Error in adding report: ${err.response ? err.response.data : err.message}`, {
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left',
        },
        variant : 'error'
      });
    })
    .finally(() => {
      this.setState({
        loading: false
      })
    });

  }
  render() {
    const { farmers = [] } = this.props;
    const { 
      // farmerId, productId, product, 
      farmer = {}, product,
      loading ,
      harvestTime
    } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit} className="responsive-form">
          <div className="p-10" style={{ minWidth: 200 }}>
            <Autocomplete
              style={{ minWidth: 300 }}
              options={farmers}
              required
              filterOptions={(options, state) => {
                return options.filter(farmer => farmer.name.toLowerCase().includes(state.inputValue.toLowerCase()))
              }}
              value={farmer}
              getOptionSelected={(option, value) => option.name === value.name}
              getOptionLabel={(option) => option.name || ""}
              renderInput={(params) => <TextField {...params} label="Farmer" name="farmerId" required fullWidth />}
              onChange={(e, farmer) => {
                console.log(farmer)
                if (farmer) {
                  this.setState({ farmerId: farmer.id, farmer });
                } else {
                  this.setState({
                    farmerId: null,
                    farmer: {}
                  })
                }
              }}
              renderOption={option => {
                return (
                  <div className="flex middle">
                    <div className="p-4">
                      <img src={option.image} alt={option.name} style={{ width: 40 }} />
                    </div>
                    <div>
                      <Typography variant="body1">
                        {option.name}
                      </Typography>

                      <Typography variant="body2" color="textSecondary">
                        {option.subregion}, {option.region}
                      </Typography>
                    </div>
                  </div>
                );
              }}
            />
          </div>
          <div className="p-10">
            <ProductAutocomplete
              product={product}
              onChange={(e, product) => {
                if (product) {
                  this.setState({ productId: product.id, product });
                } else {
                  this.setState({
                    productId: null,
                    product: null
                  })
                }
              }}
            />
          </div>
          <div className="p-10" style={{ minWidth: 200 }}>
            <InputLabel id="harvestTime">Harvest Time</InputLabel>
            <TextField
              labelId="harvestTime"
              fullWidth
              value={harvestTime || ""}
              onChange={(e) => {
                this.setState({
                  harvestTime: e.target.value
                });
              }}
              name="harvestTime"
              type="datetime-local"
              required
            />
          </div>
          <div className="p-10">
            <Button 
              type="submit" variant="contained" color="primary"
              disabled={loading}
            >
              Submit
            </Button>
          </div>
        </form>

      </div>
    );
  }
}

export default withSnackbar(HarvestReportForm);