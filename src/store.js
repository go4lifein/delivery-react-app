import { createStore, combineReducers, applyMiddleware } from "redux";
import {createLogger} from 'redux-logger';

import { setAdmin } from "./reducers/admin.reducers";
import { setDriver } from "./reducers/driver.reducers";

const logger = createLogger();

const store = createStore(
  combineReducers({
    setDriver,
    setAdmin,
  }),
  applyMiddleware(logger)
);

export default store;