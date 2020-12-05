import React, {useState, Suspense, lazy} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline} from '@material-ui/core';

import './css/style.css';
const Admin = lazy(() => import('./containers/Admin.jsx'));
const Driver = lazy(() => import('./containers/Driver.jsx'));

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  let [themeType, setTheme] = useState(prefersDarkMode ? 'dark' : 'dark');

  const theme = createMuiTheme({
    palette: {
      type: themeType,
      background: {
        default: themeType === 'dark' ? '#232323': '#eee',
        paper: themeType === 'dark' ? '#161616': '#fff'
      },
    },
  });

  return (
    <div id="app">
      <ThemeProvider theme={theme}>
        <CssBaseline /> 
        <Router>
          <main>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route 
                  path="/admin"
                  exact
                  component={Admin} 
                />
                <Route 
                  path="/"
                  exact
                  component={Driver} 
                />
              </Switch>
            </Suspense>
          </main>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
