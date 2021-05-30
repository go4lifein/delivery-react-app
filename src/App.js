import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

// import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Notifier from "./components/UI/Notifier";

import "./css/style.css";
import "./App.css";
import NotFound from './components/404';
import Loading from "./components/Loading";
const Admin = lazy(() => import(/* webpackChunkName: "Admin" */ "./containers/Admin.jsx"));
const Driver = lazy(() => import(/* webpackChunkName: "Driver" */ "./containers/Driver.jsx"));
const Trace = lazy(() => import(/* webpackChunkName: "Trace" */ "./trace/Trace.js"));
// const TraceProduce = lazy(() => import(/* webpackChunkName: "TraceProduce" */ "./containers/TraceOrder"));
const Visual = lazy(() => import(/* webpackChunkName: "Visual" */ "./containers/Visual"));
const Tracemilk = lazy(() => import(/* webpackChunkName: "Tracemilk" */ "./trace/Tracemilk.js"))
const TraceMilkBatch = lazy(() => import(/* webpackChunkName: "Tracemilk" */ "./trace/TraceMilkBatch.js"))
const TraceMilkPouch = lazy(() => import(/* webpackChunkName: "Tracemilk" */ "./components/TracePouchMilk"))
const Customer = lazy(() => import(/* webpackChunkName: "Customer" */ "./containers/Customer"))
const Dahitrace = lazy(() => import(/* webpackChunckName: "Dahitrace" */ "./dahitrace/App"));
const Newtrace = lazy(() => import(/* webpackChunkName: "NewTrace" */ "./new_trace/App"));
// const Trace = lazy(() => import("./components/Traceability.js"));

function App() {
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = createMuiTheme({
    palette: {
      // type: 'light',
      // primary: colors.green[400],
      secondary: {
        light: "#ff4081",
        main: "#f50057",
        dark: "#c51162",
        contrastText: "#fff",
      },
      background: {
        default: "#fff",
        paper: "#fff",
      },
    },
  });

  return (
    <>
      <div id="app">
        <ThemeProvider theme={theme}>
          <Notifier />
          <CssBaseline />
          <Router base={"delivery-react-app"}>
            <main>
              <Suspense fallback={<Loading />}>
                <Switch>
                  {/* <Route path="/trace/produce" exact component={TraceProduce} /> */}
                  <Route path="/trace" exact component={Trace} />
                  <Route path="/trace/:pouch" component={TraceMilkPouch} />
                  <Route path="/visual" component={Visual} />
                  <Route path ="/newtrace" exact component = {Newtrace} />
                  <Route path = "/dahitrace" exact component = {Dahitrace} />
                  <Route path="/trace-milk" exact component={Tracemilk} />
                  <Route path="/trace-batch-milk" exact component={TraceMilkBatch} />
                  <Route path="/customer" component={Customer} />
                  <Route path="/admin" component={Admin} />
                  <Route path="/" exact component={Driver} />
                  <Route path="/" component={Driver} />
            
                </Switch>
              </Suspense>
            </main>
          </Router>
        </ThemeProvider>
      </div>
      <div id="printable">
        {/*  for print utility */}
      </div>
    </>
  );
}

export default App;
