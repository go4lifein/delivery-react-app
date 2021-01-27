import {UPDATE_ADMIN, UPDATE_ORDERS_DATA, UPDATE_ADMIN_DATA, UPDATE_ORDER_CRATE_DATA} from '../constants/index';

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