import {UPDATE_ADMIN} from '../constants/index';

let admin = window.localStorage.getItem('admin');
if(admin) {
  admin = JSON.parse(admin);
} else {
  admin = undefined;
}
console.log(admin);
const initialState = {
  admin
}

export const setAdmin = (state = initialState, action = {}) => {
  switch(action.type) {
    case UPDATE_ADMIN:
      // console.log(action.payload);
      return { ...state, admin: action.payload }
    default:
      return state;
  }
}