import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { MuiThemeProvider } from '@material-ui/core/styles';

import { createMuiTheme } from '@material-ui/core/styles';

import blue from '@material-ui/core/colors/lightBlue';

import App from './App';

const theme = () => {
  return(createMuiTheme({
    palette: {
      primary: {
        ...blue,
        '500': '#01579B'
      }
    }
  }));
}

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>
, document.getElementById('root'))

registerServiceWorker();