import {UPDATE_ADMIN, UPDATE_ORDERS_DATA, UPDATE_ADMIN_DATA, UPDATE_ORDER_CRATE_DATA} from '../constants/index';

import {hasOnlyDairyProducts, hasNoDairy} from '../helpers/utils';

let admin = window.localStorage.getItem('admin');
if(admin) {
  admin = JSON.parse(admin);
} else {
  admin = undefined;
}
// console.log(admin);
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

    case UPDATE_ORDER_CRATE_DATA:
      // let {customers, areas, subareas, categories, hubs, orders} = action.payload;
      console.log(action.payload);
      // return { 
      //   ...state,
      //   ...action.payload
      // }

    case UPDATE_ORDERS_DATA:

      let orders = action.payload;
      let customers = new Map();
      let productsCollection = new Map();
      let locations = new Map();
      let alreadyCreatedCratedToday = false;
      /* 
      locations = {
        "Gurgaon": {
          "Sector 69": [
            "Tulip White"
          ]
        },
        "South Delhi": {

        }
      }
      */

      // prepare location data
      orders.forEach(order => {
        let { subarea, area, hub, crate_id } = order;
        
        if(crate_id) {
          alreadyCreatedCratedToday = true;
        }
        if(locations.has(hub)) {
          let hubAreas = locations.get(hub);
          if(hubAreas.has(area)) {
            let subareas = hubAreas.get(area);
            if(!subareas.includes(subarea)) {
              subareas.push(subarea);
            }
            hubAreas.set(area, subareas);
            locations.set(hub, hubAreas);
          } else {
            let areaData = [subarea];
            hubAreas.set(area, areaData);
            locations.set(hub, hubAreas);
          }
        } else {
          let hubAreas = new Map();
          hubAreas.set(area, [subarea]);
          locations.set(hub, hubAreas)
        }
      });

      // console.log(locations);

      let categories = [];
      let hubs = [];
      let areas = [];
      let subareas = [];
      let products = {};

      // accumulate customer data
      orders.forEach(order => {
        let { 
          order_id, crate_id,
          order_staus, order_type, TIMESTAMP, last_update_on,
          crates, remark, small_boxes, large_boxes,
          customer_id, customer_name, phone_number, 
          address_id, house_number, subarea, area, hub,
          category, product, quantity,
          package_size, package_type, product_package_id, product_id, 
          region_id, location_id, delivery_person_id,
          driver_id, deliver_date, delivery_type, proof_img, complete_delivery, order_cancel_reason, boxes, milk_packets
        } = order;

        // if(order_id === 129779) {
        //   console.log(order);
        // }

        // filter orders created after crate id is generated
        if(alreadyCreatedCratedToday) {
          if(!crate_id) {
            return;
          }
        }

        let productData = {
          product,
          product_id,
          product_package_id,
          package_size,
          quantity,
          category,
          total: package_size * quantity,
          unit: package_type
        }
        
        let deliveryData = {
          driver_id, deliver_date, delivery_type, proof_img, complete_delivery, order_cancel_reason, boxes, milk_packets
        }
        
        if(categories.includes(category) === false) {
          categories.push(category);
        }
        if(!(product_id in products)) {
          products[product_id] = product;
        }

        if(customers.has(customer_id)) {
          
          let customer = customers.get(customer_id);
          let {products} = customer;
          
          if(category in products) {
            products[category].push(productData);
          } else {
            products[category] = [
              productData
            ]
          }
          
          customer.products = products;
          customer.delivery = deliveryData;
          customer.delivered = deliveryData.deliver_date;
        } else {
          
          // if(order_id === 129779) {
          //   console.log(order);
          // }
          
          if(areas.includes(area) === false) {
            areas.push(area);
          }
          if(subareas.includes(subarea) === false) {
            subareas.push(subarea);
          }
          if(hubs.includes(hub) === false) {
            hubs.push(hub);
          }

          let customer = {
            name: customer_name,
            phone: phone_number,
            order_id,
            crate_id,
            order_staus, order_type, TIMESTAMP,  last_update_on,
            crates, remark, small_boxes, large_boxes,
            address: {
              address_id,
              house_number, subarea,
              area, hub,
              region_id, location_id
            },
            products: {
              [category]: [productData]
            },
            fnvProducts: [],
            delivery_person_id,
            delivery: deliveryData,
            delivered: deliveryData.deliver_date
          }
          customers.set(customer_id, customer);
        }
      });

      // create crate id for orders except onlyDairyProducts
      let crateId = 1;
      for(const customer of customers) {
        const {products} = customer[1];
        if(hasOnlyDairyProducts(products)) {
          customer[1].onlyDairy = true;
        } else {
          customer[1].onlyDairy = false;
          customer[1].crateId = crateId;
          crateId++;
        }
        
        if(hasNoDairy(products)) {
          customer[1].hasNoDairy = true;
        } else {
          customer[1].hasNoDairy = false;
        }  
      }
      
      // create crate id for orders that has onlyDairyProducts
      for(const customer of customers) {
        const {products} = customer[1];
        if(hasOnlyDairyProducts(products)) {
          customer[1].crateId = crateId;
          crateId++;
        }
      }

      orders.forEach(order => {
        let { 
          customer_id, 
          category, product, quantity,
          package_size, package_type, product_id
        } = order;

        // if(category !== 'Dairy') {
          
          let crateData = {
            quantity,
            total: package_size * quantity,
            crateId: customers.get(customer_id).crateId,
            crate_id: customers.get(customer_id).crate_id
          }
          if(productsCollection.has(product_id)) {
            let productValue = productsCollection.get(product_id);
            let {crates} = productValue;
            crates.push(crateData);

            productValue.crates = crates;
          } else {
            let productData = {
              package_size,
              product_id,
              product,
              category,
              unit: package_type,
              crates: [crateData]
            }
            productsCollection.set(product_id, productData);
          }
        // }
      })
      
      return {
        ...state, 
        alreadyCreatedCratedToday, 
        loadingOrderData: false, 
        customers, 
        locations, 
        productsCollection, 
        products, 
        areas, 
        subareas, 
        categories, 
        hubs, 
        orders
      };
    default:
      return state;
  }
}