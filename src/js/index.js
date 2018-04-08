import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './containers/App';

document.body.style.margin = 0;

render(
  <AppContainer>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <App />
    </MuiThemeProvider>
  </AppContainer>,
  document.getElementById('app')
);


if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const RootContainer = require('./containers/App').default;
    render(
      <AppContainer>
        <App />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
