import {UPDATE_DRIVER} from '../constants/index';

let driver = window.localStorage.getItem('driver');
if(driver) {
  driver = JSON.parse(driver);
} else {
  driver = undefined;
}
console.log(driver);
const initialState = {
  driver
}

export const setDriver = (state = initialState, action = {}) => {
  switch(action.type) {
    case UPDATE_DRIVER:
      return { ...state, driver: action.payload }
    default:
      return state;
  }
}