import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import reportWebVitals from './reportWebVitals';

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import { setAdmin } from "./reducers/admin.reducers";
import { setDriver } from "./reducers/driver.reducers";

const store = createStore(
  combineReducers({
    setDriver,
    setAdmin,
  })
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
