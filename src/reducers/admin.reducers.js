import { 
  UPDATE_ADMIN, 
  UPDATE_ORDERS_DATA, 
  UPDATE_ADMIN_DATA,
  ADD_PRODUCTS,
  ADD_ORDER_PRODUCTS,
  ADD_ORDER_BOX
} from '../constants/index';


let admin = window.localStorage.getItem('admin');
if(admin) {
  admin = JSON.parse(admin);
} else {
  admin = undefined;
}

const initialState = {
  admin,
  products : new Map(),
  loadingOrderData: true
}

function processProducts(data, products) {
  data.forEach(item => {
    const {id, name, thumbnail: image} = item;
    products.set(id, {
      id, name, image
    })
  })
}

function processOrderProducts(data, orderProducts) {
  data.forEach(item => {
    const {orderId, productId} = item;
    if(orderProducts.has(orderId)) {
      orderProducts.get(orderId).push(item);
    } else {
      orderProducts.set(orderId, [item]);
    }
  });
}

function processOrderBoxData(data, orderBox) {
  data.forEach(item => {
    const {orderId} = item;
    orderBox.set(orderId, item);
  });
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
    
    case ADD_PRODUCTS:

      let products = new Map();
      processProducts(action.payload, products);

      return {
        ...state,
        products
      }
    case ADD_ORDER_PRODUCTS:
      let orderProducts = new Map();
      processOrderProducts(action.payload, orderProducts);

      return {
        ...state,
        orderProducts
      }
    
    case ADD_ORDER_BOX:
      let orderBoxData = new Map();
      processOrderBoxData(action.payload, orderBoxData);

      return {
        ...state,
        orderBoxData
      }

    default:
      return state;
  }
}