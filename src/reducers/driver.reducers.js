import {UPDATE_DRIVER, UPDATE_ORDERS} from '../constants/index';


import {getCookies} from '../helpers/utils'

let driver = getCookies()['x-driver-token'];
const initialState = {
  driver
}

function hasOnlyDairyProducts(products) {
  if('Dairy' in products && Object.entries(products).length === 1) {
    return true;
  }
  return false;
}

function hasNoDairy(products) {
  if(!('Dairy' in products)) {
    return true;
  }
  return false;
}

export const setDriver = (state = initialState, action = {}) => {
  switch(action.type) {
    case UPDATE_DRIVER:
      let driver = action.payload;
      window.localStorage.setItem('driver', JSON.stringify(driver));
      return { ...state, driver}

    case UPDATE_ORDERS:

      let orders = action.payload;
      let locations = new Map();

      let hubs = [];

      orders.forEach(order => {
        let { subarea, area, region } = order;
        if(!hubs.includes(region)) {
          hubs.push(region)
        }
        
        if(locations.has(region)) {
          let hubAreas = locations.get(region);
          if(hubAreas.has(area)) {
            let subareas = hubAreas.get(area);
            if(!subareas.includes(subarea)) {
              subareas.push(subarea);
            }
            hubAreas.set(area, subareas);
            locations.set(region, hubAreas);
          } else {
            let areaData = [subarea];
            hubAreas.set(area, areaData);
            locations.set(region, hubAreas);
          }
        } else {
          let hubAreas = new Map();
          hubAreas.set(area, [subarea]);
          locations.set(region, hubAreas)
        }
      });
      
      return {
        ...state,
        orders,
        locations,
        hubs
      };
    default:
      return state;
  }
}