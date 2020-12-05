import {UPDATE_ADMIN} from '../constants/index';

export const updateAdmin = (admin) => ({
  type: UPDATE_ADMIN,
  payload: admin
});