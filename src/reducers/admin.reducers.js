import { UPDATE_ADMIN, UPDATE_ORDERS_DATA, UPDATE_ADMIN_DATA } from '../constants/index';


let admin = window.localStorage.getItem('admin');
if(admin) {
  admin = JSON.parse(admin);
} else {
  admin = undefined;
}

const initialState = {
  admin,
  loadingOrderData: true
}

export const setAdmin = (state = initialState, action = {}) => {
  switch(action.type) {
    case UPDATE_ADMIN:
      let admin = action.payload;
      window.localStorage.setItem('admin', JSON.stringify(admin));
      return { ...state, admin}

    case UPDATE_ADMIN_DATA:
      // let {customers, areas, subareas, categories, hubs, orders} = action.payload;
      return { 
        ...state,
        ...action.payload
      }

    case UPDATE_ORDERS_DATA:

      let orders = action.payload;
      let customers = new Map();
      let locations = new Map();
      let alreadyCreatedCratedToday = false;

      orders.forEach(order => {
        let { subarea, area, region } = order;
        
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

      // console.log(locations);

      let categories = [];
      let hubs = [];

      console.log("Total Orders", orders.length);

      // accumulate customer data
      orders.forEach(order => {

      })

      console.log(locations);
      
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