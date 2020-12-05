import {UPDATE_DRIVER} from '../constants/index';

export const updateDriver = (driver) => ({
  type: UPDATE_DRIVER,
  payload: driver
});