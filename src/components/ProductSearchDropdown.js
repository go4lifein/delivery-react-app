import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {searchProducts} from '../api/products';
import { FormControl } from '@material-ui/core';
import { withSnackbar } from 'notistack';

function ProductSearch({onChange: updateValue, enqueueSnackbar, product = null}) {
  // const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');
  const [options, setOptions] = React.useState([]);


  React.useEffect(() => {
    let cleanedUp = false;
    try {
      
      searchProducts(inputValue)
      .then(({data: products}) => {
        if(cleanedUp === false) {
          products = products.filter(product => product.category === "Fruits & Vegetables");
          setOptions(products)
        }
      })
      .catch(err => {
        enqueueSnackbar(
          `Error in fetching products: ${err.response ? err.response.data : err.message}`, {
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
          },
          variant : 'error'
        });
      })
    } catch(err) {
      
    }
    return () => {
      cleanedUp = true;
    }
  }, [inputValue, enqueueSnackbar]);

  return (
    <FormControl fullWidth>
      <Autocomplete
        id="product-dropdown"
        style={{ minWidth: 300 }}
        required
        getOptionLabel={(option) => (typeof option === 'string' ? option : option.name)}
        options={options}
        autoComplete
        getOptionSelected={(option, value) => option.name === value.name}
        value={product}
        onChange={(event, newValue) => {
          console.log(newValue)
          setOptions(newValue ? [newValue, ...options] : options);
          // setValue(newValue);
          updateValue(event, newValue);
          
        }}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderInput={(params) => (
          <TextField {...params} label="Search Product" name="productId" required fullWidth />
        )}
        renderOption={option => option.name}
      />
    </FormControl>
  );
}
export default withSnackbar(ProductSearch)