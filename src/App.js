import React, { Suspense, lazy} from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

// import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline} from '@material-ui/core';

import './css/style.css';
import Loading from './components/Loading';
const Admin = lazy(() => import('./containers/Admin.jsx'));
const Driver = lazy(() => import('./containers/Driver.jsx'));

function App() {
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = createMuiTheme({
    palette: {
      // type: 'light',
      // primary: colors.green[400],
      secondary: {
        light: '#ff4081',
        main: '#f50057',
        dark: '#c51162',
        contrastText: '#fff'
      },
      background: {
        // default: themeType === 'dark' ? '#232323': '#fff',
        // paper: themeType === 'dark' ? '#161616': '#fff'
      },
    },
  });

  return (
    <div id="app">
      <ThemeProvider theme={theme}>
        <CssBaseline /> 
        <Router base={'delivery-react-app'}>
          <main>
            <Suspense fallback={<Loading />}>
              <Switch>
                <Route 
                  path="/admin"
                  component={Admin} 
                />
                <Route 
                  path="/"
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
