import {UPDATE_DRIVER, UPDATE_ORDERS} from '../constants/index';

export const updateDriver = (driver) => ({
  type: UPDATE_DRIVER,
  payload: driver
});

export const updateOrders = (orders) => ({
  type: UPDATE_ORDERS,
  payload: orders
});