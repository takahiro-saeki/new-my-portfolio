import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './containers/App';

document.body.style.margin = 0;

render(
  <AppContainer>
    <App/>
  </AppContainer>,
  document.getElementById('app')
);

/*
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const RootContainer = require('./containers/App').default;
    render(
      <AppContainer>
        <RootContainer />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
*/
