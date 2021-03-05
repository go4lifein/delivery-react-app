import { 
  UPDATE_ADMIN, 
  UPDATE_ORDERS_DATA, 
  UPDATE_ADMIN_DATA, 
  UPDATE_ORDER_CRATE_DATA,
  ADD_PRODUCTS,
  ADD_ORDER_PRODUCTS,
  ADD_ORDER_BOX,
  UPDATE_DELIVERY_REPORT
} from '../constants/index';

export const updateAdmin = (admin) => ({
  type: UPDATE_ADMIN,
  payload: admin
});

export const updateAdminData = (data) => ({
  type: UPDATE_ADMIN_DATA,
  payload: data
});

export const updateOrdersData = (data) => ({
  type: UPDATE_ORDERS_DATA,
  payload: data
});

export const updateOrderCrateData = (data) => ({
  type: UPDATE_ORDER_CRATE_DATA,
  payload: data
});

export const addProducts = (data) => ({
  type: ADD_PRODUCTS,
  payload: data
});

export const addOrderProducts = (data) => ({
  type: ADD_ORDER_PRODUCTS,
  payload: data
});

export const addOrderBox = (data) => ({
  type: ADD_ORDER_BOX,
  payload: data
});

export const updateDeliveryReport = (data) => ({
  type: UPDATE_DELIVERY_REPORT,
  payload: data
});