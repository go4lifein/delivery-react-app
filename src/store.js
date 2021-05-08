import { createStore, combineReducers, applyMiddleware } from "redux";
import {createLogger} from 'redux-logger';

import { setAdmin } from "./reducers/admin.reducers";
import { notifier } from "./reducers/notifier";
import { setDriver } from "./reducers/driver.reducers";

const logger = createLogger();

const middlewares = []

if(process.env.NODE_ENV !== "production") {
  middlewares.push(logger)
}

const store = createStore(
  combineReducers({
    setDriver,
    setAdmin,
    notifier,
  }),
  applyMiddleware(...middlewares)
);

export default store;