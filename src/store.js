import { createStore, combineReducers, applyMiddleware } from "redux";
import {createLogger} from 'redux-logger';

import { setAdmin } from "./reducers/admin.reducers";
import { setDriver } from "./reducers/driver.reducers";

const logger = createLogger();

const middlewares = [
  process.env.NODE_ENV !== "producttion" && logger
]

const store = createStore(
  combineReducers({
    setDriver,
    setAdmin,
  }),
  applyMiddleware(...middlewares)
);

export default store;